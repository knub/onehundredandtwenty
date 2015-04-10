/* use strict-mode provided by ecma-script5, see http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/ for details */
"use strict";

/*
 * Holds all relevant information from the study regulations 
 * 'Fachspezifische Ordnung für das Bachelor- und Masterstudium im Fach IT-Systems Engineering an der Universität Potsdam'
 * (variable names in german, because 'Vertiefungsgebiete' is hard to translate and not really nice)
 */
var studyRegulations = {
	softskills: ["SSK-MA", "SSK-RE", "SSK-KO", "SSK-DT", "SSK-SK"],
	otherSoftskillsMax: { "SSK-RE": 6, "SSK-KO": 6, "SSK-DT": 12, "SSK-SK": 6 },
	modules: ["ITSE", "BPET", "HCT", "IST", "OSIS", "SAMT"],
};
var semesterManager = {
	semesters: ["SS13", "WS13/14", "SS14", "WS14/15", "SS15", "WS15/16", "SS16", "WS16/17", "SS17", "WS17/18", "SS18"],
	shownSemesters: [
	/*
		"SS13"
		*/
	],
	numberDisplayed: 4,
	current: "WS14/15",
	lastSummerSemester: "SS14",
	lastWinterSemester: "WS14/15",
	/* the semester that is the first semester when you first start the application */
	startswith: "WS14/15",
	updateSemester: function(semester_number, semester_string) {
		var index = semester_number - 1;
		if (semester_string.search(/[WS]S((\d{2}\/\d{2})|(\d{2}))/) < 0) {
			console.error("Mismatched semester string. Check data!");
			return;
		}

		var old_chosen = this.semesters.indexOf(this.shownSemesters[index]);
		var new_chosen = this.semesters.indexOf(semester_string);
		var difference = new_chosen - old_chosen;

		this.shownSemesters[index] = semester_string;

		for (var i = index + 1; i < this.shownSemesters.length; i += 1) {
			var old_index = this.semesters.indexOf(this.shownSemesters[i]);
			if (old_index + difference < this.semesters.length) this.shownSemesters[i] = this.semesters[old_index + difference];
			else this.shownSemesters[i] = this.semesters.last();
		}
	}
};

var ruleManager = {
	getSemester: null,
	rules: [],
	init: function(getSemester_Function) {
		this.getSemester = getSemester_Function;
	},
	checkAll: function() {
		var numberFailedRules = 0;
		var rules = [];
		for (var rule = 0; rule < this.rules.length; rule += 1) {
			this.rules[rule].success = true;
			if (!this.rules[rule].check(this.getSemester)) {
				numberFailedRules += 1;
				this.rules[rule].success = false;
			}
			rules.push(this.rules[rule]);
		}
		rules.numberFailedRules = numberFailedRules;
		return rules;
	}
};

/*
 * Rule-objectes, each representing one special type of rule
 * These objects basically act as classes (will be 'cloned' by Object.create later
 * It's a kind of 'inheritance by convention', meaning:
 *	- each rule has a type, by which it can be identified
 * 	- each rule must have a check method, which - given a special course to check - passes or fails
 *	- each rule must have a message property, which will be displayed, if the rule/test fails
 *	- there is one init-method, serving as constructor, which takes neccessary parameters and saves them, finally returning 'this'
 *	- some rules assign special information to variables, which can be used in the frontend to e. g. display already chosen Vertiefungen
 *
 * Furthermore, most objects have some special properties needed for that special kind of rule
 */

/* 1. Semester-Rule: Check that the chosen semesters are valid. */
var semesterRule = {
	/* type */
	type: 'semesterRule',
	/* constructor */
	init: function(course) {
		return this;
	},
	/* check method */
	check: function(getSemester) {
		for (var i = 0; i < semesterManager.shownSemesters.length - 1; i += 1) {
			var earlier_index = semesterManager.semesters.indexOf(semesterManager.shownSemesters[i]);
			var later_index = semesterManager.semesters.indexOf(semesterManager.shownSemesters[i + 1]);
			if (earlier_index >= later_index) {
				this.message = "Das " + (i + 2).toString() + "te Semester kommt zeitlich nicht nach dem " + (i + 1).toString() + "ten.";
				return false;
			}
		}
		return true;
	},
	/* message */
	message: "Eine späteres Semester kommt vor einem früheren."
};

/* 2. Time-Rule: course is not schedulable in the chosen semester */
var timeRule = {
	/* type */
	type: "timeRule",
	/* constructor */
	init: function(course) {
		this.course = course;
		this.message = "Die Veranstaltung '" + data[this.course].nameLV + "' wird im gewählten Semester nicht angeboten.";

		return this;
	},
	/* check method */
	check: function(getSemester) {
		// get the semester number (first, second, third ...) for the given course
		var semesterNumber = getSemester(this.course);
		this.message = "Die Veranstaltung '" + data[this.course].nameLV + "' wird im gewählten " + semesterNumber + ". Semester nicht angeboten.";

		if (semesterNumber === - 1) return true;
		// now get the semester time (WS10/11, SS10, ...) for the given course
		// important: subtract 1, because semester number starts at 1, while array starts at 0
		var semesterTime = semesterManager.shownSemesters[semesterNumber - 1];

		// now we have to distinguish two cases:
		// -	the semester is in the past/present
		// -	the semester is in the future
		if (semesterManager.semesters.indexOf(semesterTime) <= semesterManager.semesters.indexOf(semesterManager.current)) {
			// past or present
			return data[this.course].semester.indexOf(semesterTime) !== - 1;
		}
		else {
			// if the course is currently chosen for a summer semester
			if (semesterTime.indexOf("SS") >= 0) {
				// check if it was explicitly allowed or offered in the last summer semester
				return data[this.course].semester.indexOf(semesterTime) !== -1 ||
					   data[this.course].semester.indexOf(semesterManager.lastSummerSemester) !== - 1;
			}
			// if the course is currently chosen for a winter semester
			else if (semesterTime.indexOf("WS") >= 0) {
				// check if it was explicitly allowed or offered in the last winter semester
				return data[this.course].semester.indexOf(semesterTime) !== -1 ||
					   data[this.course].semester.indexOf(semesterManager.lastWinterSemester) !== - 1;
			}
			// else something went completly wrong
			else {
				console.error("Something is wrong with the semester-time. Check data!");
			}
			return true;
		}
	},
	/* message */
	message: 'Der Kurs wird im gewählten Semester nicht angeboten.',
	course: ""
};

/* 3. Clone-Rule: take care of clones (repetitions) of a specific course */
var cloneRule = {
	/* type */
	type: "cloneRule",
	/* constructor */
	init: function(cloneId) {
		this.cloneId = cloneId;
		var index = cloneId.indexOf("-");
		this.course = cloneId.substr(0, index);

		this.message = "Die Veranstaltung '" + data[this.course].nameLV + "' wird im gewählten Semester nicht angeboten.";

		return this;
	},
	/* check method */
	check: function(getSemester) {
		// get the semester number (first, second, third ...) for the given course
		var semesterNumber = getSemester(this.cloneId);
		if (semesterNumber === -1)
			return true;
		if (semesterNumber <= getSemester(this.course) || getSemester(this.course) === -1) {
			this.message = "Die Wiederholung von '" + data[this.course].nameLV + "' muss nach dem ersten Belegen der Veranstaltung geschehen.";
			return false;
		}
		this.message = "Die Veranstaltung '" + data[this.course].nameLV + "' wird im gewählten " + semesterNumber + ". Semester nicht angeboten.";

		if (semesterNumber === - 1) return true;
		// now get the semester time (WS10/11, SS10, ...) for the given course
		// important: subtract 1, because semester number starts at 1, while array starts at 0
		var semesterTime = semesterManager.shownSemesters[semesterNumber - 1];

		// now we have to distinguish two cases:
		// -	the semester is in the past/present
		// -	the semester is in the future
		if (semesterManager.semesters.indexOf(semesterTime) <= semesterManager.semesters.indexOf(semesterManager.current)) {
			// past or present
			return data[this.course].semester.indexOf(semesterTime) !== - 1;
		}
		else {
			// if the course is currently chosen for a summer semester
			if (semesterTime.indexOf("SS") >= 0) {
				// check if it was offered in the last summer semester
				return data[this.course].semester.indexOf(semesterManager.lastSummerSemester) !== - 1;
			}
			// if the course is currently chosen for a winter semester
			else if (semesterTime.indexOf("WS") >= 0) {
				// check if it was offered in the last summer semester
				return data[this.course].semester.indexOf(semesterManager.lastWinterSemester) !== - 1;
			}
			// else something went completly wrong
			else {
				console.error("Something is wrong with the semester-time. Check data!");
			}
			return true;
		}
	},
	/* message */
	message: 'Der Kurs wird im gewählten Semester nicht angeboten.',
	course: "",
	cloneId: ""
};

/* 4. ITSE-Rule: 24 cp in ITSE-courses (included in Modules-Rule, but gives a clearer error message) */
var itseRule = {
	/* type */
	type: "itseRule",
	/* constructor */
	init: function() {
		return this;
	},
	/* check method */
	check: function(getSemester) {
		/* Helper */
		// return all courses which are in ITSE
		var getCourses = function() {
			var courses = [];
			for (var course in data) {				
				if (!data.hasOwnProperty(course)) continue;
				if (getSemester(course) == - 1 ) continue;
				
				if (data[course].kennung.indexOf("ITSE") !== -1) {
					courses.push(course);
				}
			}
			return courses;
		};		
		var cpSum = function(courses){
			var sum = 0;
			courses.forEach(function(element){
				sum += data[element].cp;
			});
			return sum;
		};
		
		/* actual function */
		var courses = getCourses();
		
		var itsecourses = [];
		courses.forEach(function(element){
			if ( data[element].kennung.indexOf("ITSE") !== -1 ) {
				itsecourses.push(element);
			}
		});		
		var itsesum = cpSum(itsecourses);
		return (itsesum >= 24);

	},
	message: 'Es müssen mindestens 24 Leistungspunkte im Modul ITSE erbracht werden.'
};

/* 5. Modules-Rule: 4x 6cp in ITSE-courses, 24cp in VT1, 15cp in VT2 */
var modulesRule = {
	/* type */
	type: "modulesRule",
	/* constructor */
	init: function() {
		return this;
	},
	/* check method */
	check: function(getSemester) {
		/* Helper */
		// return all courses which are in any Vertiefungsgebiet
		var getCourses = function() {		
			var modules = studyRegulations.modules;
			var courses = [];
			for (var course in data) {				
				if (!data.hasOwnProperty(course)) continue;
				if (getSemester(course) == - 1 ) continue;
				// go through kennung and add (once) if any VT-kennung is hit
				data[course].kennung.every(function(element) {
					if ( modules.indexOf(element) !== -1 ) {
						courses.push(course);
						return false;
					}
					return true;
				});
			}
			return courses;
		};		
		var getModulesAbove15 = function(courses){
			var modules = [];
			studyRegulations.modules.forEach(function(element){
				if(cpSum4Module(courses,element) >= 15){
					if(modules.indexOf(element) == -1){
						modules.push(element);
					}
				}
			});
			return modules;
		};
		var cpSum = function(courses){
			var sum = 0;
			courses.forEach(function(element){
				sum += data[element].cp;
			});
			return sum;
		};
		var cpSum4Module = function(courses,module){
			var sum = 0;
			courses.forEach(function(element){
				if(data[element].kennung.indexOf(module) !== -1)
					sum += data[element].cp;
			});
			return sum;
		};		
		var getVTs = function(courses){
			var vts = [];
			for (var course in data) {
				if (!data.hasOwnProperty(course)) continue;
				if (getSemester(course) == - 1 ) continue;
				// go through kennung and add (once) if any VT-kennung is hit
				data[course].kennung.forEach(function(element) {
					if (element !== "ITSE" && studyRegulations.modules.indexOf(element) !== -1 && vts.indexOf(element) == -1) {
						vts.push(element);
					}
				});
			}
			return vts;
		}
		var cloneCombination = function(obj){
			var cpy = {};
			for (var key in obj) {
				// these are arrays, slice()-copy them
				cpy[key] = obj[key].slice();
			}
			return cpy;
		}
		
		/* actual function */
		// Several valid combinations are possible
		// Each combination is a set of courses ordered in the module it is counted to.
		// IMPORTANT: This rule assumes no course is SSK-* as well as ITSE or any VT
		//
		var combinations = [];
		
		
		var courses = getCourses();
		this.vertiefungen = courses;
		var modules = getModulesAbove15(courses);
		
		var vts = getVTs(courses); //not including ITSE
		//build all 2-sized combinations
		var vtcombos = [];
		for (var i = 0; i < vts.length; i += 1) {
			for (var j = i+1; j < vts.length; j += 1) {
				//if (i==j) continue;
				var elem = {};
				elem['ITSE'] = [];
				elem[vts[i]] = [];
				elem[vts[j]] = [];
				combinations.push(elem);
			}
		}
		
		
		// For each course and each combination, create new configurations, with the course added in one of its modules each, and throw away the old ones
		for (var i = 0; i < courses.length; i += 1) {
			var newcombinations = [];
			for (var j = 0; j < combinations.length; j += 1) {
				data[courses[i]].kennung.forEach(function(element){
					if (element in combinations[j]){
						if(combinations[j][element].length < 8){ //optimization - with 8 courses you have definately reached 24cp, everything beyond does not matter
							var newcombination = cloneCombination(combinations[j]);
							newcombination[element].push(courses[i]);
							newcombinations.push(newcombination);
						}
					}
				});
			}
			combinations = newcombinations;
		}
		
		//console.log(combinations.length);
		
		// now we have all interesting combinations, copy valid ones 
		// note the format is different now: for the frontend, all we need to know is VT1,VT2
		// in what exact combinations this is reached does not matter (is too much to be printed)
		var validcombinations = [];
		var validcombinationsstr = [];
		for (var i = 0; i < combinations.length; i += 1) {
			var sums = {};
			for (var element in combinations[i]){
				sums[element] = cpSum(combinations[i][element]);
			}
			
			// Requirement 1: 24 cp in ITSE
			if(sums["ITSE"] < 24) continue;
			// Requirement 2: 24 cp in VT1 and 15 cp in VT2
			// Try both ways
			for (var module in sums) {
				if (module == "ITSE") continue;
				if (sums[module] >= 24){
					for (var secondmodule in sums){ // this finds the third key
						if (secondmodule == "ITSE") continue;
						if (secondmodule == module) continue;
						if(sums[secondmodule] >= 15){
							var str = module + '-' + secondmodule;
							if (validcombinationsstr.indexOf(str) == -1) {
								validcombinationsstr.push(str);
								validcombinations.push([module,secondmodule]);
							}
						}
					}
				}
			}
		}
		this.combinations = validcombinations;
		//console.log(this.combinations);
		return (this.combinations.length > 0);
	},
	message: 'Es müssen mindestens zwei unterschiedliche Vertiefungsgebiete mit 24 und 15 Leistungspunkten belegt werden.'
};

/* 6. Softskills-Rule: atleast six credit points in SSK-MA and twelve credit points in other Softskills must be done */
var softskillsRule = {
	/* type */
	type: "softskillsRule",
	/* constructor */
	init: function() {
		return this;
	},
	/* check method */
	check: function(getSemester) {
		/* Helper */
		// return all courses with a SSK-* kennung
		var getSSKCourses = function() {		
			var ssk = studyRegulations.softskills;
			var sskCourses = [];
			for (var course in data) {				
				if (!data.hasOwnProperty(course)) continue;
				if (getSemester(course) == - 1 ) continue;
				// go through kennung and add (once) if any SSK- kennung is hit
				data[course].kennung.every(function(element) {
					if ( ssk.indexOf(element) !== -1 ) {
						sskCourses.push(course);
						return false;
					}
					return true;
				});
			}
			return sskCourses;
		};
		var cpSum = function(courses){
			var sum = 0;
			courses.forEach(function(element){
				sum += data[element].cp;
			});
			return sum;
		};
		var cloneCombination = function(obj){
			var cpy = {};
			for (var key in obj) {
				// these are arrays, slice()-copy them
				cpy[key] = obj[key].slice();
			}
			return cpy;
		}
		
		/* actual function */		
		// Several valid combinations might be possible
		// Each combination is a set of courses ordered in the module it is counted to.
		// IMPORTANT: This rule assumes no course is SSK-* as well as ITSE or any VT
		//
		var combinations = [];		
		var courses = getSSKCourses();
		
		// build one empty combination
		var base = {};
		studyRegulations.softskills.forEach(function(element){
			base[element] = [];
		});
		combinations.push(base);
		
		// For each course and each combination, create new configurations, with the course added in the one of its modules each, and throw away the old ones
		for (var i = 0; i < courses.length; i += 1) {
			var newcombinations = [];
			for (var j = 0; j < combinations.length; j += 1) {
				data[courses[i]].kennung.forEach(function(element){
					if (element in combinations[j]){
						var newcombination = cloneCombination(combinations[j]);
						newcombination[element].push(courses[i]);
						newcombinations.push(newcombination);
					}
				});
			}
			combinations = newcombinations;
		}
		
		// check if there is at least one valid combination
		for (var i = 0; i < combinations.length; i += 1) {
			var otherSum = 0;
			var maSum = 0;
			for (var element in combinations[i]){
				var moduleSum = cpSum(combinations[i][element]);
				if (element == "SSK-MA") {
					maSum = moduleSum;
				} else {
					// only count up to otherSoftskillsMax;
					otherSum += Math.min(studyRegulations.otherSoftskillsMax[element], moduleSum);
				}
			}
			if (maSum >= 6 && otherSum >= 12) return true;
		}
		
		this.courses = courses;
		// no valid combination was found
		return false;
	},
	/* message */
	message: 'Es müssen mindestens 6 LP in SSK: Management und 12 LP in weiteren SSK-Bereichen erbracht werden.'
};


// ---
// Rules created, now started adding them to rule manager
// ---
/* 1: create semester rule, just push it to rules array */
ruleManager.rules.push(semesterRule);

/* now walk through the array and add data-dependent rules */
for (var course in data) {
	if (!data.hasOwnProperty(course)) continue;
	
	/* 2: create time-rules for all courses saved in data */
	ruleManager.rules.push(Object.create(timeRule).init(course));
}
/* 4: create itse-rule, just push it to rules-array */
ruleManager.rules.push(itseRule);

/* 5: create modules-rule, just push it to rules-array */
ruleManager.rules.push(modulesRule);

/* 6: create softskills-rule, just push it to rules-array */
ruleManager.rules.push(softskillsRule);

/* 3: clone rules are added at runtime when items are cloned */
