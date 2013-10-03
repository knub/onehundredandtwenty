/*
 * NOTE: Please update semesterManager in js/logic.js as well, after updating this file
 *
 * This file must only be edited manually!
 * Remember to update 'Klubsprecher' and 'Studium Plus'!
 */
 
 /* 
 *	NOTES to Conversion from Bachelor to Master
 *   Pflicht is always false, leave out
 *   vertiefung is always empty, logic uses kennung
 */

/*
 * Data structure for a course:
 *    kurz: Short text for the course. Make sure, it fits in the browser on 1024px
 *    lehrform: "Seminar" or "Projekt" or "Vorlesung"
 *    modul: "Vertiefungsgebiete" is what you want in most cases here
 *    semester: semester string: (WS|SS)[0-9]{2}, e.g. WS11
 *    pflicht: whether this course must be chosen or not
 *    empfohlen: integer indicating in which course this semester is recommended
 *    vertiefung: array containing strings for the vertiefungsgebiete, "BPET"/"HCT"/"IST"/"OSIS"/"SAMT" alphabetically!
 *    cp: how much credit points you get for this course
 *    vorher: identifier/key of the course/s which must be taken before the current one, e.g. 'mathematik1'
 *    dozent: self explaining
 *    nameLV: long name
 */

 var ws10_11 = "WS10/11",
    ss11    = "SS11",
    ws11_12 = "WS11/12",
    ss12    = "SS12",
    ws12_13 = "WS12/13",
    ss13    = "SS13",
    ws13_14 = "WS13/14";

var data = {
    bringYourOwnProject: {
		kurz: "BYOP",
        kennung: ["SSK-KO","SSK-SK","SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: false, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. Karen Dittmann"], 
        nameLV: "Bring your own project: IT-Projekte erfolgreich planen und managen"
    }, 
    interactiveData: {
		kurz: "Interactive Data",
        kennung: ["ITSE","VT SAMT","VT HCT"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Robert Hirschfeld","Marcel Taeumel","Tim Felgentreff","Jens Lincke"], 
        nameLV: "Interactive Representations of Data Structures and Algorithms"
    }, 
    informationssicherheit: {
		kurz: "Information Security",
        kennung: ["ITSE","VT IST","VT OSIS"], 
        lehrform: ["Vorlesung"," \u00dcbung"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Christoph Meinel"], 
        nameLV: "Informationssicherheit"
    }, 
    advancedRecommendationTechniques: {
		kurz: "Advanced<br />Recommandation",
        kennung: ["VT BPET","VT OSIS"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Dr. Gjergji Kasneci"], 
        nameLV: "Advanced Recommendation Techniques"
    }, 
    inMemoryDatabases: {
		kurz: "In Memory Databases",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: ["Enterprise Systems Technology"," Information Systems"," Business Computing"," Systems Architecture"," Software Engineering"], 
        cp: 6, 
        vorher: [], 
        dozent: ["Martin Faust","David Schwalb","Dipl.-Kfm. Jens Kr\u00fcger","Dr. J\u00fcrgen M\u00fcller","Christian Schwarz"], 
        nameLV: "In-Memory Databases: Algorithms and Data Structures on Modern Hardware"
    }, 
    dataProfilingAndCleansing: {
		kurz: "Data Profiling and Cleansing",
        kennung: ["ITSE","VT BPET","VT OSIS"], 
        lehrform: ["Vorlesung"," \u00dcbung"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Felix Naumann"], 
        nameLV: "Data Profiling and Data Cleansing"
    }, 
    duplicationDetection: {
		kurz: "Duplication Detection",
        kennung: ["VT BPET","VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Felix Naumann","Arvid Heise"], 
        nameLV: "Large Scale Duplicate Detection"
    }, 
    ITEntrepreneurshipII: {
		kurz: "Entrepreneurship II",
        kennung: ["SSK-MA","SSK-KO","SSK-RE"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. Rouven Westphal"], 
        nameLV: "IT Entrepreneurship II"
    }, 
    penTesting: {
		kurz: "Penetration Testing",
        kennung: ["ITSE","VT IST","VT OSIS"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Christoph Meinel","Hosnieh Rafiee"], 
        nameLV: "Penetration Testing and Securing IPv6 Networks"
    }, 
    hciProjectSeminar: {
		kurz: "HCI Cameras<br /> and Haptics",
        kennung: ["ITSE","VT HCT","VT SAMT"], 
        lehrform: ["Projekt"," Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Patrick Baudisch"], 
        nameLV: "HCI Project Seminar on Cameras, Haptics & Interactive Fabrication"
    }, 
    personalLeadership: {
		kurz: "Personal Leadership",
        kennung: ["SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: ["Softskills"], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. Rolf Specht"], 
        nameLV: "Personal Leadership Skills"
    }, 
    Geovisualisierung: {
		kurz: "Geovisualisierung",
        kennung: ["ITSE","VT HCT","VT IST"], 
        lehrform: ["Vorlesung"], 
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. J\u00fcrgen D\u00f6llner","Sebastian Pasewaldt","Sebastian Schmechel","Dr. Matthias Trapp"], 
        nameLV: "Geovisualisierung"
    }, 
    regelungSteuerung: {
		kurz: "Regelung & Steuerung",
        kennung: ["ITSE","VT OSIS","VT SAMT"], 
        lehrform: ["Vorlesung"], 
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Dr.-Ing. Ralf Wollowski"], 
        nameLV: "Systemtechnische Grundlagen der Regelungs-<br />und Steuerungstechnik"
    }, 
    IntroductionOfDesignThinking: {
		kurz: "Introduction<br />Design Thinking",
        kennung: ["SSK-DT"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. Claudia Nicolai","Prof. Ulrich Weinberg"], 
        nameLV: "Introduction of Design Thinking (Einf\u00fchrung in das Design Thinking)"
    }, 
    SemanticMultimedia: {
		kurz: "Semantic Multimedia",
        kennung: ["VT IST","VT OSIS","VT HCT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Dr. rer. nat. Harald Sack","J\u00f6rg Waitelonis","Nadine Steinmetz","Magnus Knuth"], 
        nameLV: "Semantic Multimedia"
    }, 
    AdvancedMDE: {
		kurz: "Advanced MDE",
        kennung: ["ITSE","VT SAMT"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Holger Giese","M. Sc. Thomas Beyhl"], 
        nameLV: "Advanced MDE: Model Management"
    }, 
    KonfliktUndKommunikationsmanagement: {
		kurz: "Kommunikations-<br />management",
        kennung: ["SSK-KO","SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. Michaela Schumacher"], 
        nameLV: "Konflikt-<br />und Kommunikationsmanagement"
    }, 
    TrendsInIT: {
		kurz: "Trends in IT",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"], 
        lehrform: ["Vorlesung"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Prof. Dr. Hasso Plattner"], 
        nameLV: "Trends and Concepts in the Software Industry I: Inner Mechanics of In-Memory Databases"
    }, 
    eventProcessingTechnologies: {
		kurz: "Event Processing",
        kennung: ["VT BPET","VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Jan Mendling"], 
        nameLV: "Event Processing Technologies"
    }, 
    algorithmenGeovisualisierung: {
		kurz: "Algorithmen der<br />Geovisualisierung",
        kennung: ["ITSE","VT HCT","VT IST"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. J\u00fcrgen D\u00f6llner","Rico Richter","Stefan Buschmann"], 
        nameLV: "Algorithmen und Techniken der Geovisualisierung (ehem.: Geovisualisierungsverfahren)"
    }, 
    Softwarevisualisierung: {
		kurz: "Software-<br />visualisierung",
        kennung: ["VT HCT","VT OSIS","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. J\u00fcrgen D\u00f6llner","Jonas Tr\u00fcmper","Sebastian Schmechel","Sebastian Kay Belle"], 
        nameLV: "Softwarevisualisierungsverfahren"
    }, 
    automatedAnalysisOfFormalModels: {
		kurz: "auto. Analysis of<br />Formal Models",
        kennung: ["ITSE","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Prof. Dr. Holger Giese","Leen Lambers","M.Sc. Johannes Dyck"], 
        nameLV: "Automated Analysis of Formal Models"
    }, 
    dependableSystems: {
		kurz: "Dependable Systems",
        kennung: ["ITSE","VT OSIS"], 
        lehrform: ["Vorlesung"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: ["Verteiles Rechnen"," Systemsicherheit"," Systems Integration"," Systems Architecture"," Systemarchitektur"," Software Engineering"," Security and Safety Engineering"," Network & Service Computing"," Information Systems"], 
        cp: 6, 
        vorher: [], 
        dozent: ["Dr. Peter Tr\u00f6ger"], 
        nameLV: "Dependable Systems"
    }, 
    productInnovationAndEngineering: {
		kurz: "Product Innovation",
        kennung: ["ITSE","VT BPET","VT HCT"], 
        lehrform: ["Projekt"," Seminar"], 
        modul: ["Vertiefungsgebiete"," IT-Systems Engineering"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Dr. J\u00fcrgen M\u00fcller","Thomas Kowark","Dipl.-Kfm. Jens Kr\u00fcger"], 
        nameLV: "Global Team-Based Product Innovation & Engineering II -<br />ME 310"
    }, 
    Fuehrungskompetenz: {
		kurz: "F\u00fchrungs-<br />kompetenz",
        kennung: ["SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Michael Karl Heidemann M.A.","Eugen Unger"], 
        nameLV: "F\u00fchrungskompetenz"
    }, 
    softwareAdaption: {
		kurz: "Software Adaption",
        kennung: ["ITSE","VT SAMT"], 
        lehrform: ["Vorlesung"," Projekt"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Holger Giese","Thomas Vogel"], 
        nameLV: "Software Adaption"
    }, 
    ueberzeugendPraesentieren: {
		kurz: "\u00dcberzeugend<br />pr\u00e4sentieren",
        kennung: ["SSK-KO"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. Werner Dieball"], 
        nameLV: "\u00dcberzeugend pr\u00e4sentieren -<br />Noch besser auftreten! (Fortgeschrittene)"
    }, 
    hciResearch: {
		kurz: "HCI Research",
        kennung: ["ITSE","VT HCT","VT SAMT"], 
        lehrform: ["Vorlesung"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Patrick Baudisch"], 
        nameLV: "Human Computer Interaction Research"
    }, 
    managementEssentials: {
		kurz: "Management Essentials",
        kennung: ["SSK-MA"], 
        lehrform: ["Vorlesung"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Prof. Dr. Katharina H\u00f6lzle"], 
        nameLV: "Management Essentials"
    }, 
    advancedDesignThinking: {
		kurz: "D-School<br />Advanced Track",
        kennung: ["SSK-DT"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Dr. Claudia Nicolai","Prof. Ulrich Weinberg"], 
        nameLV: "Advanced Design Thinking (D-School Advanced Track)"
    }, 
    Englisch3: {
		kurz: "Fachenglisch<br />Level 3",
        kennung: ["SSK-SK","SSK-KO"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["David Meier"], 
        nameLV: "Fachspezifisches Englisch (Level 3)"
    }, 
    Unternehmensgruendung: {
		kurz: "Unternehmens-<br />gr\u00fcndung",
        kennung: ["SSK-KO","SSK-MA","SSK-RE"], 
        lehrform: ["Vorlesung"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Prof. Dr. Katharina H\u00f6lzle","Dr. Jens Schmidt-Ehmcke"], 
        nameLV: "Unternehmensgr\u00fcndung im IT-Sektor"
    }, 
    softwareProfiling: {
		kurz: "Software Profiling",
        kennung: ["ITSE","VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. Peter Tr\u00f6ger","Frank Feinbube"], 
        nameLV: "Software Profiling"
    }, 
    schnittstellenGeoinformationGeokommunikation: {
		kurz: "Geo-Schnittstellen",
        kennung: ["VT HCT","VT IST"], 
        lehrform: ["Vorlesung"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. techn. Markus Jobst","Sebastian Pasewaldt"], 
        nameLV: "Schnittstellen der Geoinformation und Geokommunikation"
    }, 
    softwareAsAService: {
		kurz: "Software as a Service",
        kennung: ["ITSE","VT IST","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Prof. Dr. Christoph Meinel","Eyad Saleh"], 
        nameLV: "Software-as-a-Service and Multi-tenancy"
    }, 
    BusinessEtikette: {
		kurz: "Business Etikette",
        kennung: ["SSK-SK","SSK-KO"], 
        lehrform: ["Seminar"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. Timm Krohn","Imme Vogelsang"], 
        nameLV: "Business Etikette -<br />HPI Charm School"
    }, 
    designThinkingBasics: {
		kurz: "D-School<br />Basic Track",
        kennung: ["SSK-DT"], 
        lehrform: ["Seminar"," Projekt"], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 9, 
        vorher: [], 
        dozent: ["Dr. Claudia Nicolai","Prof. Ulrich Weinberg"], 
        nameLV: "Design Thinking Basics (D-School Basic Track)"
    }, 
    CloudUndVirtualisierung: {
		kurz: "Cloud & Virtualisierung",
        kennung: ["ITSE","VT IST","VT OSIS"], 
        lehrform: ["Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Prof. Dr. Christoph Meinel","Maxim Schnjakin"], 
        nameLV: "Cloud und Virtualisierung"
    }, 
    DesigningProgrammingInMemoryDatabases: {
		kurz: "Designing In-Mem DB",
        kennung: ["ITSE","VT BPET","VT OSIS","VT SAMT"], 
        lehrform: ["Projekt"," Seminar"], 
        modul: ["IT-Systems Engineering","Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 6, 
        vorher: [], 
        dozent: ["Christian Schwarz","Dr. J\u00fcrgen M\u00fcller","Dipl.-Kfm. Jens Kr\u00fcger"], 
        nameLV: "Designing and Programming Applications for In-Memory Databases"
    }, 
    StudiumPlus: {
		kurz: "Studium Plus",
        kennung: ["SSK-SK","SSK2"], 
        lehrform: [""], 
        modul: ["Softskills"], 
        semester: [ss13], 
        benotet: false, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: [""], 
        nameLV: "StudiumPlus"
    }, 
    seminarDesForschungskollegs: {
		kurz: "Seminar des<br />Forschungskollegs",
        kennung: ["VT BPET","VT HCT","VT IST","VT OSIS","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: false, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Prof. Dr. Andreas Polze","Prof. Dr. Robert Hirschfeld"], 
        nameLV: "Seminar des Forschungskollegs"
    }, 
    cloudSicherheit: {
		kurz: "Cloud Sicherheit",
        kennung: ["VT IST","VT OSIS","VT SAMT"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Prof. Dr. Andreas Polze","Christian Neuhaus"], 
        nameLV: "Algorithmen und Analysemethoden f\u00fcr Sicherheit in Cloud-Infrastrukturen"
    }, 
    PersoenlichkeitUndSelbstmanagement: {
		kurz: "Pers\u00f6nlichkeit &<br />Selbstmanagement",
        kennung: ["SSK-KO","SSK-MA"], 
        lehrform: ["Seminar"], 
        modul: ["Vertiefungsgebiete"], 
        semester: [ss13], 
        benotet: true, 
        pflicht: false, 
        empfohlen: "", 
        vertiefung: [""], 
        cp: 3, 
        vorher: [], 
        dozent: ["Dr. Michaela Schumacher"], 
        nameLV: "Pers\u00f6nlichkeit und Selbstmanagement"
    }
}