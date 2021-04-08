/*
 * NOTE: Please update semesterManager in js/logic.js as well, after updating this file
 *
 * This file must only be edited manually!
 */

/*
 * Data structure for a course:
 *    kurz: Short text for the course. Make sure, it fits in the browser on 1024px
 *    lehrform: "Seminar" or "Projekt" or "Vorlesung"
 *    modul: "Vertiefungsgebiete" is what you want in most cases here
 *    semester: semester string: (WS|SS)[0-9]{2}, e.g. WS11
 *    cp: how much credit points you get for this course
 *    dozent: self explaining
 *    nameLV: long name
 */

 var ws10_11 = "WS10/11",
    ss11    = "SS11",
    ws11_12 = "WS11/12",
    ss12    = "SS12",
    ws12_13 = "WS12/13",
    ss13    = "SS13",
    ws13_14 = "WS13/14",
    ss14 = "SS14",
    ws14_15 = "WS14/15",
    ss15 = "SS15",
    ws15_16 = "WS15/16",
    ss16 = "SS16",
    ws16_17 = "WS16/17",
    ss17 = "SS17",
    ws17_18 = "WS17/18",
    ss18 = "SS18",
    ws18_19 = "WS18/19",
    ss19 = "SS19",
    ws19_20 = "WS19/20",
    ss20 = "SS20",
    ws20_21 = "WS20/21",
    ss21 = "SS21",
    ws21_22 = "WS21/22",
    ss22 = "SS22",
    ws22_23 = "WS22/23",
    ss23 = "SS23",
    ws23_24 = "WS23/24",
    ss24 = "SS24",
    ws24_25 = "WS24/25";

var BPET = "BPET",
    SAMT = "SAMT",
    OSIS = "OSIS",
    IST  = "IST",
    HCT  = "HCT",
    ITSE = "ITSE",
    SSKMA = "SSK-MA",
    SSKSK = "SSK-SK",
    SSKRE = "SSK-RE",
    SSKDT = "SSK-DT",
    SSKKO = "SSK-KO";

var VERTIEFUNG = "Vertiefungsgexbiete",
    SOFTSKILLS = "Softskills",
    IT_SYSTEMS_ENGINEERING = "IT-Systems Engineering";

var data = {
    advancedAlgorithmicProblemSolving: {
        kurz: "Advanced <br /> Algo. Problem Solving",
        kennung: [IST, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 3,
        dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Timo Kötzing", "Dr. Pascal Lenzner"],
        nameLV: "Advanced Algorithmic Problem Solving"
    },
    advancedCompetitiveProgramming: {
        kurz: "Advanced <br /> Competitive Programming",
        kennung: [IST, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 3,
        dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Pascal Lenzner"],
        nameLV: "Advanced Competitive Programming"
    },
    advancedDataProfiling: {
        kurz: "Adv. Data<br />Profiling",
        kennung: [BPET, OSIS],
        lehrform: ["Projekt", "Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann", "Thorsten Papenbrock"],
        nameLV: "Advanced Data Profiling"
    },
    advancedDesignThinking: {
        kurz: "D-School<br />Advanced Track",
        kennung: [SSKDT],
        lehrform: ["Seminar", "Projekt"],
        modul: [SOFTSKILLS],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15],
        cp: 6,
        dozent: ["Dr. Claudia Nicolai", "Prof. Ulrich Weinberg"],
        nameLV: "Advanced Design Thinking (D-School Advanced Track)"
    },
    advancedDesignThinking9CP: {
        kurz: "D-School<br />Advanced Track 9CP",
        kennung: [SSKDT],
        lehrform: ["Seminar", "Projekt"],
        modul: [SOFTSKILLS],
        semester: [ws15_16, ss16, ws16_17],
        cp: 9,
        dozent: ["Dr. Claudia Nicolai", "Prof. Ulrich Weinberg"],
        nameLV: "Advanced Design Thinking (D-School Advanced Track)"
    },
    advancedMDE: {
        kurz: "Advanced MDE",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "M. Sc. Thomas Beyhl"],
        nameLV: "Advanced MDE: Model Management"
    },
    advancedProgrammingCPlusPlus: {
        kurz: "Advanced <br /> Programming in C++",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Willy Scheibel", "Daniel Limberger", "Stefan Buschmann"],
        nameLV: "Advanced Programming in C++"
    },
    advancedRecommendationTechniques: {
        kurz: "Advanced<br />Recommendation",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Dr. Gjergji Kasneci"],
        nameLV: "Advanced Recommendation Techniques"
    },
    advancedSEFES: {
        kurz: "Advanced<br />SEFES",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 3,
        dozent: ["Prof. Dr. Holger Giese", "Sebastian Wätzoldt", "Dr. Dominique Blouin"],
        nameLV: "Advanced Software Engineering for Embedded Systems"
    },
    advancedTopicsInMemoryComputing: {
        kurz: "Advanced<br />In-Memory DB",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Martin Faust", "David Schwalb", "Markus Dreseler", "Martin Boissier"],
        nameLV: "Advanced Topics in In-Memory Computing"
    },
    advancedTopicsInMemoryDatabases: {
        kurz: "Advanced<br />In-Memory DB",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Carsten Meyer", "Martin Boissier"],
        nameLV: "Advanced Topics on In-Memory Database Systems"
    },
    advancedTopicModeling: {
        kurz: "Advanced<br />Topic Modeling",
        kennung: [OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Dr. Ralf Krestel"],
        nameLV: "Advanced Topic Modeling"
    },
    aeProjectSeminarAnalysisComplexNetworks: {
        kurz: "Analysis Complex<br />Networks",
        kennung: [IST, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Thomas Bläsius"],
        nameLV: "AE Project Seminar on Analysis of Complex Networks"
    },
    algorithmenGeovisualisierung: {
        kurz: "Algorithmen der<br />Geovisualisierung",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Stefan Buschmann"],
        nameLV: "Algorithmen und Techniken der Geovisualisierung (ehem.: Geovisualisierungsverfahren)"
    },
    algorithmicGems: {
        kurz: "Algorithmic<br />Gems",
        kennung: [IST, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 3,
        dozent: ["Prof. Dr. Tobias Friedrich"],
        nameLV: "Algorithmic Gems"
    },
    algorithmicHits80s90s: {
        kurz: "Algorithmic<br /> Hits of the 80s and 90s",
        kennung: [IST, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 3,
        dozent: ["Prof. Dr. Tobias Friedrich", "Martin Schirneck"],
        nameLV: "Algorithmic Hits of the 80s and 90s"
    },
    algorithmix: {
        kurz: "Algorithmix<br />WS15/16",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Vorlesung (flipped classroom)", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Timo Kötzing"],
        nameLV: "Algorithmix"
    },
    algorithmix1617: {
        kurz: "Algorithmix",
        kennung: [IST, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Timo Kötzing"],
        nameLV: "Algorithmix"
    },
    automatedAnalysisOfFormalModels: {
        kurz: "Analysis of<br />Formal Models",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13,ws13_14, ss14],
        cp: 3,
        dozent: ["Prof. Dr. Holger Giese", "Leen Lambers", "M.Sc. Johannes Dyck"],
        nameLV: "Automated Analysis of Formal Models"
    },
    bringYourOwnProject: {
        kurz: "ByoP",
        kennung: [SSKKO, SSKSK, SSKMA],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss13, ws13_14],
        cp: 3,
        dozent: ["Dr. Karen Dittmann"],
        nameLV: "Bring your own project: IT-Projekte erfolgreich planen und managen"
    },
    bPMResearchSeminar: {
        kurz: "BPM <br />Research Seminar",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Mathias Weske", "Adriatik Nikaj"],
        nameLV: "BPM Research Seminar"
    },
    businessEtikette: {
        kurz: "Business Etikette",
        kennung: [SSKSK, SSKKO],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15, ws15_16, ss16, ws16_17],
        cp: 3,
        dozent: ["Dr. Timm Krohn", "Imme Vogelsang"],
        nameLV: "Business Etikette-<br />HPI Charm School"
    },
    businessProcessCompliance: {
        kurz: "BPC",
        kennung: [BPET, SAMT],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ws13_14, ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Mathias Weske", "Matthias Kunze"],
        nameLV: "Business Process Compliance"
    },
    businessProcessCompliance2: {
        kurz: "BPC",
        kennung: [BPET, OSIS],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 3,
        dozent: ["Prof. Dr. Mathias Weske", "A. Nikaj"],
        nameLV: "Business Process Compliance"
    },
    currentTrendsInAlgorithmTheory: {
        kurz: "Trends in<br />Algorithm Theory",
        kennung: [IST, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Tobias Friedrich"],
        nameLV: "Current Trends in Algorithm Theory",
    },
    cloudComputing: {
        kurz: "Cloud Computing",
        kennung: [IST, OSIS, ITSE],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws14_15],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze"],
        nameLV: "Industrieseminar Cloud Computing"
    },
    cloudSicherheit: {
        kurz: "Cloud Sicherheit",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss13],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Christian Neuhaus"],
        nameLV: "Algorithmen und Analysemethoden für Sicherheit in Cloud-Infrastrukturen"
    },
    cloudStorages: {
        kurz: "Cloud Storages",
        kennung: [IST, OSIS, ITSE],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ws14_15, ws15_16, ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Hendrik Graupner", "Kennedy Torkura"],
        nameLV: "Securing Cloud Storages"
    },
    cloudUndVirtualisierung: {
        kurz: "Cloud &<br />Virtualisierung",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 3,
        dozent: ["Prof. Dr. Christoph Meinel", "Maxim Schnjakin"],
        nameLV: "Cloud und Virtualisierung"
    },
    constraintbasedprogramming: {
        kurz: "Constraint-based<br />Programming 3LP",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff"],
        nameLV: "Constraint-based Programming"
    },
    constraintbasedprogramming6LP: {
        kurz: "Constraint-based<br />Programming 6LP",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff", "Jens Lincke"],
        nameLV: "Constraint-based Programming"
    },
    compilerbau: {
        kurz: "Compilerbau",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Dr. Henning Bordihn"],
        nameLV: "Compilerbau und Programmtransformation"
    },
    darkWebMonitoring: {
        kurz: "Dark Web",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "David Jaeger", "Hendrik Graupner"],
        nameLV: "Dark Web Monitoring and Analysis of Leak Data"
    },
    dataMining: {
        kurz: "Data<br />Mining",
        kennung: [OSIS, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws13_14, ss15],
        cp: 6,
        dozent: ["Dr. Gjergji Kasneci", "Dr. Ralf Krestel", "Maximilian Jenders"],
        nameLV: "Data Mining and Probabilistic Reasoning"
    },
    dataMining2: {
        kurz: "Data<br />Mining",
        kennung: [OSIS, ITSE],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Dr. Ralf Krestel"],
        nameLV: "Data Mining and Probabilistic Reasoning"
    },
    dataProfilingAndCleansing: {
        kurz: "Data Profiling<br />and Cleansing",
        kennung: [BPET, OSIS],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ss13, ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann" , "Thorsten Papenbrock"],
        nameLV: "Data Profiling and Data Cleansing"
    },
    decisionAnalysisImplementation: {
        kurz: "Decision<br />Analysis and Implementation",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Mathias Weske", "A. Nikaj"],
        nameLV: "Decision Analysis and Implementation"
    },
    decisionManagement: {
        kurz: "Decision<br />Management",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Mathias Weske", "Ekaterina Bazhenova"],
        nameLV: "Decision Management"
    },
    dependableSystems: {
        kurz: "Dependable<br />Systems",
        kennung: [ITSE, OSIS],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13, ss14],
        cp: 6,
        dozent: ["Dr. Peter Tröger"],
        nameLV: "Dependable Systems"
    },
    designingProgrammingInMemoryDatabases: {
        kurz: "Apps for IMDB",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Christian Schwarz", "Dr. Jürgen Müller", "Dipl.-Kfm. Jens Krüger"],
        nameLV: "Designing and Programming Applications for In-Memory Databases"
    },
    designScienceMethodology: {
        kurz: "Design Science<br />Methodology",
        kennung: [BPET, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Mathias Weske", "Sankalita Mandal"],
        nameLV: "Design Science Methodology"
    },
    designThinkingBasics: {
        kurz: "D-School<br />Basic Track",
        kennung: [SSKDT],
        lehrform: ["Seminar", "Projekt"],
        modul: [SOFTSKILLS],
        semester: [ss13,ws13_14, ss14, ws14_15, ss15, ws15_16, ss16, ws16_17],
        cp: 9,
        dozent: ["Dr. Claudia Nicolai", "Prof. Ulrich Weinberg"],
        nameLV: "Design Thinking Basics (D-School Basic Track)"
    },
    developYourOwnDatabase: {
        kurz: "Develop your<br />own Database",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Markus Dreseler", "Jan Kossmann"],
        nameLV: "Develop your own Database"
    },
    distributedBDA: {
        kurz: "Distributed BDA",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann", " Toni Grütze", "Sebastian Kruse"],
        nameLV: "Distributed Big Data Analytics"
    },
    distributedDuplicateDetection: {
        kurz: "Distributed <br />Duplicate Detection",
        kennung: [BPET, OSIS],
        lehrform: ["Projekt", "Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann", "Ahmad Samiei", "John Koumarelas"],
        nameLV: "Distributed Duplicate Detection"
    },
    duplicationDetection: {
        kurz: "Duplication Detection",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann", "Arvid Heise"],
        nameLV: "Large Scale Duplicate Detection"
    },
    dynamicPricing: {
        kurz: "Dynamic Pricing",
        kennung: [ITSE, BPET, OSIS],
        lehrform: ["Vorlesung", "Übung"],
        modul: [IT_SYSTEMS_ENGINEERING,VERTIEFUNG],
        semester: [ss16],
        cp: 3,
        dozent: ["Dr. Matthias Uflacker", "Dr. Rainer Schlosser"],
        nameLV: "Dynamic Pricing on Online Marketplaces: Strategies and Applications"
    },
    eingebetteteBetriebssysteme: {
        kurz: "Embedded<br />Systems",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Vorlesung", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Uwe Hentschel"],
        nameLV: "Eingebettete Betriebssysteme"
    },
    eingebetteteBetriebssystemeWithITSE: {
        kurz: "Embedded<br />Systems (WS15/16)",
        kennung: [IST, OSIS, ITSE],
        lehrform: ["Vorlesung", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Max Plauth", "Daniel Richter"],
        nameLV: "Eingebettete Betriebssysteme"
    },
    endUserProgramming: {
        kurz: "End-user<br />Programming",
        kennung: [OSIS, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Robert Hirschfeld"],
        nameLV: "End-user Programming"
    },
    englisch3: {
        kurz: "Fachenglisch<br />Level 3",
        kennung: [SSKSK, SSKKO],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15, ws15_16, ss16, ws16_17],
        cp: 3,
        dozent: ["David Meier", "Sharon Nemeth"],
        nameLV: "Fachspezifisches Englisch (Level 3)"
    },
    eventprocessing: {
        kurz: "Event Processing<br />6LP",
        kennung: [ITSE, OSIS],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Dr. Anne Baumgraß", "Prof. Dr. Mathias Weske"],
        nameLV: "Event Processing"
    },
    eventprocessing3LP: {
        kurz: "Event Processing<br />3LP",
        kennung: [BPET, OSIS],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 3,
        dozent: ["Dr. Anne Baumgraß", "Prof. Dr. Mathias Weske"],
        nameLV: "Event Processing"
    },
    eventProcessingSystems: {
        kurz: "Event Processing<br /> Systems",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Dr. Anne Baumgraß", "Prof. Dr. Mathias Weske"],
        nameLV: "Event Processing Systems"
    },
    eventProcessingTechnologies: {
        kurz: "Event Processing<br />Technologies",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Jan Mendling"],
        nameLV: "Event Processing Technologies"
    },
    fehlerinjektion: {
        kurz: "Fehlerinjektion",
        kennung: [OSIS, IST, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss15],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Lena Herscheid", "Daniel Richter"],
        nameLV: "Fehlerinjektion"
    },
    fehlertoleranteSysteme: {
        kurz: "Fehlertolerante<br/>Systeme",
        kennung: [OSIS],
        lehrform: ["Vorlesung", "Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Andreas Polze", "Lena Feinbube", "Daniel Richter", "Andreas Grapentin"],
        nameLV: "Fehlertolerante Systeme"
    },
    fuehrungskompetenz: {
        kurz: "Führungs-<br />kompetenz",
        kennung: [SSKMA],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ss13, ss14, ss15, ss16],
        cp: 6,
        dozent: ["Michael Karl Heidemann M.A.", "Eugen Unger"],
        nameLV: "Führungskompetenz"
    },
    fuehrungVerantwortung: {
        kurz: "Führung und <br /> Verantwortung",
        kennung: [SSKMA, SSKKO],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ss16],
        cp: 3,
        dozent: ["Eva Bilstein"],
        nameLV: "Führung und Verantwortung"
    },
    futureinteractivetechnology: {
        kurz: "FIT",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14, ss15, ss16],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "Future Interactive Technology"
    },
    graphenAlgorithmen: {
        kurz: "Graphenalgorithmen",
        kennung: [ITSE, IST],
        lehrform: ["Vorlesung", "Übung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Friedrich", "Dr. Pascal Lenzner", "Dr. Thomas Bläsius"],
        nameLV: "Graphenalgorithmen"
    },
    graphDatenbanken: {
        kurz: "Graphdatenbanken",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss16],
        cp: 3,
        dozent: ["Dr. Leen Lambers"],
        nameLV: "Graphdatenbanken"
    },
    graphMining: {
        kurz: "Graph Mining",
        kennung: [BPET, OSIS],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 3,
        dozent: ["Prof. Dr. Emmanuel Müller", "Dr. Davide Mottin"],
        nameLV: "Graph Mining"
    },
    geoinformationstechnologien: {
        kurz: "Geoinformations-<br />technologien",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ws14_15, ss16],
        cp: 3,
        dozent: ["Dr. Markus Jobst"],
        nameLV: "Geoinformationstechnologien"
    },
    geovisualisierung: {
        kurz: "Geovisualisierung",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Sebastian Pasewaldt", "Sebastian Schmechel", "Dr. Matthias Trapp"],
        nameLV: "Geovisualisierung"
    },
    hciProject: {
        kurz: "HCI<br />Projekt",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Interactive Fabrication and Muscle Interfaces"
    },
    hciProjectSeminar: {
        kurz: "HCI Cameras<br /> and Haptics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Cameras, Haptics & Interactive Fabrication"
    },
    hciProjectSeminar2: {
        kurz: "HCI Projekt<br />Crowd Interaction",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Crowd Interaction, Physical Computing and Digital Fabrication"
    },
    hciProjectSeminarBIVRG: {
        kurz: "HCI Projekt<br />IVR Games",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Building Immersive Virtual Reality Games"
    },
    hciProjectSeminarRC3DP: {
        kurz: "HCI Projekt<br /> Robotics, Code, 3D Printing",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Robotics, Code, and 3D Printing"
    },
    hciProjectSeminarIM: {
        kurz: "HCI Projekt<br /> Interactive Machines",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Interactive Machines"
    },
    hciProjectSeminarBIVM: {
        kurz: "HCI Projekt<br /> Imersive VR",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Building Immersive Virtual Realities"
    },
    hciProjectSeminarVR: {
        kurz: "HCI Projekt<br />VR",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Virtual Reality"
    },
    hciProjectSeminarVRG: {
        kurz: "HCI Projekt<br />VR Gaming",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Virtual Reality Gaming"
    },
    hciProjectSeminarHPFVR: {
        kurz: "HCI Projekt<br />Haptics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar Haptics, Personal Fabrication, and Virtual Reality"
    },
    hciProjectSeminarPISME: {
        kurz: "HCI Projekt<br />3D-Printing",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on 3D-Printing, Interactive Systems, and Mechanical Engineering"
    },
    hciProjectSeminarFH: {
        kurz: "HCI Projekt<br />Fabrication & Haptics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar: Fabrication and Haptics"
    },
    hciResearch: {
        kurz: "HCI Research",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13, ss14],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "Human Computer Interaction Research"
    },
    heuristicOptimization: {
        kurz: "Heuristic<br />Optimization",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ss15, ss16],
        cp: 3,
        dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Timo Kötzing", "Dr. Andrew Sutton"],
        nameLV: "Heuristic Optimization"
    },
    iBMPowerSystemsBlockkurs2016: {
        kurz: "IBM Power Systems <br /> Blockkurs 2016",
        kennung: [BPET, IST, OSIS],
        lehrform: ["Seminar", "Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Bernhard Rabe", "Felix Eberhardt"],
        nameLV: "IBM Power Systems Blockkurs 2016"
    },
    identityManagement: {
        kurz: "Identity<br />Management",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING,VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel","Christian Tietz"],
        nameLV: "Identity Management"
    },
    imageProcessing: {
        kurz: "Image<br /> Processing",
        kennung: [HCT, IST],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Dr. Matthias Trapp", "Amir Semmo", "Sebastian Pasewaldt"],
        nameLV: "Image Processing - Concepts and Techniques"
    },
    incrementalDuplicateDetection: {
        kurz: "Incremental<br />Duplicate Detection",
        kennung: [ITSE, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann", "John Koumarelas", "Ahmad Samiei"],
        nameLV: "Incremental Duplicate Detection"
    },
    indexingStructures: {
        kurz: "Indexing<br /> Structures",
        kennung: [BPET, OSIS],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 3,
        dozent: ["Prof. Dr. Emmanuel Müller"],
        nameLV: "Indexing Structures for Efficient Database Access"
    },
    informationIntegration: {
        kurz: "Information<br /> Integration",
        kennung: [OSIS, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann"],
        nameLV: "Information Integration"
    },
    informationretrieval: {
        kurz: "Information<br /> Retrieval",
        kennung: [OSIS, IST],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Felix Naumann"],
        nameLV: "Information Retrieval"
    },
    informationretrieval6LP: {
        kurz: "Information<br /> Retrieval 6LP",
        kennung: [OSIS, IST],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Dr. Ralf Krestel"],
        nameLV: "Information Retrieval 6LP"
    },
    informationssicherheit: {
        kurz: "Information<br />Security",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Vorlesung", "Übung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13, ss15],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "David Jaeger", "Andrey Sapegin"],
        nameLV: "Informationssicherheit"
    },
    informationvisualization: {
        kurz: "Information<br /> Visualization",
        kennung: [HCT, IST],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Sebastian Kai Belle"],
        nameLV: "Information Visualization"
    },
    inmemorycomputing: {
        kurz: "In-Memory<br />Computing",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dr. Matthieu Schpranow", "Dr. Mariana Neves", "Cindy Fähnrich"],
        nameLV: "In-Memory Computing for Life Sciences"
    },
    inMemoryDatabases: {
        kurz: "In Memory<br />Databases",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Martin Faust", "David Schwalb", "Dipl.-Kfm. Jens Krüger", "Dr. Jürgen Müller", "Christian Schwarz"],
        nameLV: "In-Memory Databases: Algorithms and Data Structures on Modern Hardware"
    },
    inMemoryDatabasesAiH: {
        kurz: "In Memory<br />Databases Healthcare",
        kennung: [ITSE, BPET, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dr. Matthieu Schapranow", "Dr. Mariana Neves", "Cindy Fähnrich"],
        nameLV: "In-Memory Databases: Applications in Healthcare"
    },
    inMemoryDatamanagementLS: {
        kurz: "In-Memory<br />Data Management",
        kennung: [ITSE, BPET, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING,VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dr. Matthieu Schpranow", "Dr. Mariana Neves", "Cindy Fähnrich", "Milena Kraus"],
        nameLV: "In-Memory Data Management for Life Sciences"
    },
    inMemoryDataManagementResearch: {
        kurz: "IMDB Data<br />Management",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws13_14, ws15_16],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Krüger", "Martin Boissier", "Markus Dreseler"],
        nameLV: "In-Memory Data Management Research"
    },
    inMemoryDataStructuresAlgorithms: {
        kurz: "IMDB<br />Algorithms",
        kennung: [ITSE, OSIS, SAMT, BPET],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Martin Faust", "David Schwalb"],
        nameLV: "Data Structures and Algorithms for In-Memory Databases"
    },
    interactiveData: {
        kurz: "Interactive Data",
        kennung: [ITSE, SAMT, HCT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Marcel Taeumel", "Tim Felgentreff", "Jens Lincke"],
        nameLV: "Interactive Representations of Data Structures and Algorithms"
    },
    introductionOfDesignThinking: {
        kurz: "Introduction<br />Design Thinking",
        kennung: [SSKDT],
        lehrform: ["Seminar", "Projekt"],
        modul: [SOFTSKILLS],
        semester: [ss13,ws13_14, ss14, ws14_15, ss15, ws15_16, ss16],
        cp: 3,
        dozent: ["Dr. Claudia Nicolai", "Prof. Ulrich Weinberg"],
        nameLV: "Introduction of Design Thinking"
    },
    introductionVisualization: {
        kurz: "Introduction to<br />Visualization",
        kennung: [IST, HCT],
        lehrform: ["Vorlesung", "Übung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Dr. Matthias Trapp", "Amir Semmo", "Sebastian Pasewaldt"],
        nameLV: "Introduction to Visualization"
    },
    itEntrepreneurship: {
        kurz: "Entrepreneurship",
        kennung: [SSKMA, SSKRE, SSKKO],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ws13_14, ws14_15, ws15_16, ws16_17],
        cp: 6,
        dozent: ["Dr. Rouven Westphal", "Manuel Effenberg"],
        nameLV: "IT-Entrepreneurship"
    },
    itEntrepreneurshipII: {
        kurz: "Entrepreneurship II",
        kennung: [SSKMA, SSKKO, SSKRE],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ss13],
        cp: 3,
        dozent: ["Dr. Rouven Westphal"],
        nameLV: "IT Entrepreneurship II"
    },
    itFallstudien: {
        kurz: "Fallstudien",
        kennung: [SSKMA, SSKRE],
        lehrform: ["Vorlesung"],
        modul: [SOFTSKILLS],
        semester: [ws13_14, ss15],
        cp: 6,
        dozent: ["Prof. Dr.-Ing. Werner Zorn"],
        nameLV: "IT-Fallstudien - Was wir aus gescheiterten IT-Projekten lernen können"
    },
    itRecht: {
        kurz: "IT-Recht",
        kennung: [SSKRE],
        lehrform: ["Vorlesung"],
        modul: [SOFTSKILLS],
        semester: [ws13_14, ws14_15, ws15_16, ws16_17],
        cp: 3,
        dozent: ["Dr. Anselm Brandi-Dohrn", "Monika Menz"],
        nameLV: "IT-Recht"
    },
    komplexitaestheorie: {
        kurz: "Komplexitätstheorie",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Vorlesung", "Übung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Nuhad Shaabani"],
        nameLV: "Komplexitätstheorie"
    },
    komplexitaestheorie16: {
        kurz: "Komplexitätstheorie (2016)",
        kennung: [ITSE, IST],
        lehrform: ["Vorlesung", "Übung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Nuhad Shaabani"],
        nameLV: "Komplexitätstheorie"
    },
    konfliktUndKommunikationsmanagement: {
        kurz: "Kommunikations-<br />management",
        kennung: [SSKKO, SSKMA],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ss13,ws13_14, ss14, ws14_15, ss15, ws15_16, ss16, ws16_17],
        cp: 3,
        dozent: ["Eva Bilstein"],
        nameLV: "Konflikt-<br />und Kommunikationsmanagement"
    },
    kontextorientiertesProgrammieren: {
        kurz: "COP",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws14_15],
        cp: 3,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Marcel Taeumel", "Jens Lincke", "Tim Felgentreff"],
        nameLV: "Kontextorientiertes Programmieren"
    },
    konzepteParallelerProgrammierung: {
        kurz: "ParProg 6LP",
        kennung: [ITSE, OSIS],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Dr. Peter Tröger"],
        nameLV: "Konzepte paralleler Programmierung"
    },
    nlp: {
        kurz: "NLP",
        kennung: [OSIS, BPET],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ss14, ss15, ss16],
        cp: 3,
        dozent: ["Dr. Mariana Neves", "Prof. Dr. Felix Naumann"],
        nameLV: "Natural Language Processing"
    },
    linkeddatapublishing: {
        kurz: "Linked Data<br /> Publishing",
        kennung: [ITSE, BPET, IST],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Harald Sack"],
        nameLV: "Principles of Linked Data Publishing"
    },
    linkedopendata: {
        kurz: "LOD<br />Movies",
        kennung: [ITSE, BPET, IST],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Dr. rer. nat. Harad Sack"],
        nameLV: "A LOD of Movies - Linked Open Data Knowledge Mining"
    },
    liveProgrammingSystems: {
        kurz: "Live<br />Programming Systems",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld"],
        nameLV: "Live Programming Systems"
    },
    machineTranslation: {
        kurz: "Machine Translation",
        kennung: [ITSE, BPET],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ws15_16, ws16_17],
        cp: 3,
        dozent: ["Dr. Mariana Neves"],
        nameLV: "Machine Translation"
    },
    managementEssentials: {
        kurz: "Management Essentials",
        kennung: [SSKMA],
        lehrform: ["Vorlesung"],
        modul: [SOFTSKILLS],
        semester: [ss13, ss14, ws14_15, ss15, ws15_16, ss16, ws16_17],
        cp: 3,
        dozent: ["Prof. Dr. Katharina Hölzle", "Prof. Dr. Eric Kearney"],
        nameLV: "Management Essentials"
    },
    methodikGeoinformationstechnik: {
        kurz: "Methodik<br />GeoInfo",
        kennung: [HCT, IST],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ws13_14],
        cp: 3,
        dozent: ["Dr. techn. Markus Jobst"],
        nameLV: "Methodik der Geoinformationstechnik"
    },
    methodsSoftVis: {
        kurz: "Software<br />Visualization",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING,VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Daniel Limberger", "Stefan Buschman", "Sebastian Hahn", "Willy Scheibel"],
        nameLV: "Methods and Techniques of Software Visualization"
    },
    methodsInfoVis: {
        kurz: "Information<br />Visualization",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING,VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Jan Klimke", "Benjamin Hagedorn", "Willy Scheibel"],
        nameLV: "Methods and Techniques of Information Visualization"
    },
    middleware: {
        kurz: "Komponenten<br />& Middleware",
        kennung: [OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Christian Neuhaus", "Frank Feinbube"],
        nameLV: "Komponentenprogrammierung und Middleware"
    },
    miningMassiveDatasets: {
        kurz: "Mining Massive<br />Datasets",
        kennung: [ITSE, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING,VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann", "Toni Grütze"],
        nameLV: "Mining Massive Datasets"
    },
    modellgetriebeneEntwicklung: {
        kurz: "Modellgetriebene",
        kennung: [ITSE, SAMT],
        lehrform: ["Vorlesung", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ws14_15, ss16],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "Thomas Vogel", "Dr. Dominique Blouin"],
        nameLV: "Modellgetriebene Softwareentwicklung"
    },
    modellgetriebeneValidierungVerifikation: {
        kurz: "Modellgetriebene Validierung",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 3,
        dozent: ["Dr. Leen Lambers"],
        nameLV: "Modellgetriebene Validierung und Verifikation von Software"
    },
    modulsysteme: {
        kurz: "Modulsysteme",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff", "Jens Lincke", "Marcel Taeumel", "Tobias Pape"],
        nameLV: "Modulsysteme"
    },
    networkSecurityPractice: {
        kurz: "Network<br />Security",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14, ws14_15, ws15_16, ws16_17],
        cp: 6,
        dozent: ["Dr. Feng Cheng", "Prof. Dr. Christoph Meinel"],
        nameLV: "Network Security in Practice"
    },
    nonFunctionalProperties: {
        kurz: "Non-functional <br />properties",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Christian Neuhaus"],
        nameLV: "Non-functional properties in Operating Systems and Middleware"
    },
    nonUniformMemoryAccess: {
        kurz: "NUMA",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws14_15],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze"],
        nameLV: "Non-Uniform Memory Access (NUMA) - Herausforderungen paralleler Systeme "
    },
    openHPIAdvancedProgramming: {
        kurz: "openHPI:<br />Programming MOOCs",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel",  "Jan Renz", "Thomas Staubits", "Christian Willems"],
        nameLV: "openHPI: Advanced Web Programming Topics for MOOCs"
    },
    openHPIVirtualization: {
        kurz: "openHPI:<br />Virtualization",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel",  "Jan Renz", "Thomas Staubits", "Christian Willems"],
        nameLV: "openHPI: Concepts for Linux Container Virtualization for web development and deployment"
    },
    parallelProgrammingIMDB: {
        kurz: "Parallel Programming<br />In-Memory Databases",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Martin Faust", "David Schwalb", "Carsten Meyer", "Martin Boissier"],
        nameLV: "Parallel Programming and Algorithms for In-Memory Databases"
    },
    parametrisierteAlgorithmen: {
        kurz: "Parametrisierte<br />Algorithmen",
        kennung: [IST, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Thomas Bläsius"],
        nameLV: "Parametrisierte Algorithmen"
    },
    pearlsComputerScience: {
        kurz: "Pearls of CS",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws13_14],
        cp: 3,
        dozent: ["Prof. Dr. Mathias Weske"],
        nameLV: "Pearls of Computer Science"
    },
    pearlsofBPM: {
        kurz: "Pearls of BPM",
        kennung: [OSIS, BPET],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Mathias Weske", "Ekaterina Bazhenova"],
        nameLV: "Pearls of Business Process Management"
    },
    penTesting: {
        kurz: "Penetration Testing",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Hosnieh Rafiee"],
        nameLV: "Penetration Testing and Securing IPv6 Networks"
    },
    persoenlichkeitUndSelbstmanagement: {
        kurz: "Persönlichkeit &<br />Selbstmanagement",
        kennung: [SSKKO, SSKMA],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15, ws15_16, ss16, ws16_17],
        cp: 3,
        dozent: ["Dr. Michaela Schumacher"],
        nameLV: "Persönlichkeit und Selbstmanagement"
    },
    personalManagementSkills: {
        kurz: "Personal<br />Management",
        kennung: [SSKMA, SSKKO],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ws13_14, ws14_15, ws15_16, ws16_17],
        cp: 3,
        dozent: ["Dr. Rolf Specht"],
        nameLV: "Personal Management Skills"
    },
    personalLeadershipSkills: {
        kurz: "Personal<br />Leadership",
        kennung: [SSKMA, SSKKO],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ss14, ss15, ss16],
        cp: 3,
        dozent: ["Dr. Rolf Specht"],
        nameLV: "Personal Leadership Skills"
    },
    pointCloudAnalytics: {
        kurz: "Point Cloud<br />Analytics",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner"],
        nameLV: "Seminar Point Cloud Analytics"
    },
    practicalApplicationsOfMultimediaRetrieval: {
        kurz: "Multimedia Retrieval",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ws15_16, ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Haojin Yang", "Xiaoyin Che", "Cheng Wang"],
        nameLV: "Practical Applications of Multimedia Retrieval"
    },
    practicalVideoAnalyses: {
        kurz: "Practical Video<br />Analyses",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ss15, ss16],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Haojin Yang "],
        nameLV: "Practical Video Analyses"
    },
    privacyAndSecurityIPv6: {
        kurz: "Privacy&Sec<br />IPv6",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Hosnieh Rafiee"],
        nameLV: "Privacy and Security in IPv6"
    },
    processingVis3DGeodata: {
        kurz: "Proc&Vis<br />of 3D Geodata",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Projekt", "Seminar"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Christoph Oehlke", "Dietmar Funck"],
        nameLV: "Processing and Visualization of 3D Geodata"
    },
    productInnovationAndEngineering: {
        kurz: "ME310 II",
        kennung: [ITSE, BPET, HCT],
        lehrform: ["Projekt", "Seminar"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ss13, ss14, ss15, ss16],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Franziska Häger", "Thomas Kowark", "Dr. Jens Krüger", "Cornelius Illi"],
        nameLV: "Global Team-Based Product Innovation & Engineering II -<br />ME 310"
    },
    productInnovationEngineeringI: {
        kurz: "ME310 I",
        kennung: [ITSE, BPET],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14, ws14_15, ws15_16, ws16_17],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Krüger", "Thomas Kowark", "Franziska Häger", "Keven Richly"],
        nameLV: "Global Team-Based Product Innovation & Engineering I - ME 310"
    },
    productInnovationEngineeringI_HCT: {
        kurz: "ME310 I (mit HCT)",
        kennung: [ITSE, BPET, HCT],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [], // another document listed it with HCT for ws15_16
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Thomas Kowark", "Franziska Häger", "Keven Richly"],
        nameLV: "Global Team-Based Product Innovation & Engineering I - ME 310"
    },
    productInnovationEngineeringIII: {
        kurz: "ME310 Coaching",
        kennung: [ITSE, BPET],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14, ws14_15, ws15_16, ws16_17],
        cp: 3,
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Krüger", "Thomas Kowark", "Franziska Häger"],
        nameLV: "Global Team-Based Product Innovation & Engineering III - ME 310 Coaching Research"
    },
    programmiersprachenKonzepteWerkzeugeUmgebungen: {
        kurz: "Programmiersprachen",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff", "Marcel Taeumel", "Toni Mattis"],
        nameLV: "Programmiersprachen: Konzepte, Werkzeuge, Umgebungen"
    },
    programmierungVerteilterSysteme: {
        kurz: "ParProg 3LP",
        kennung: [SAMT, OSIS, IST],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Felix Eberhardt "],
        nameLV: "Programmierung paralleler und verteilter Systeme"
    },
    programmierungVerteilterSystemeProjektseminar: {
        kurz: "Parallele und<br />Verteilte Systeme PS",
        kennung: [SAMT, OSIS, IST],
        lehrform: ["Projekt", "Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Felix Eberhardt ", "Max Plauth"],
        nameLV: "Projektseminar: Parallele und verteilte Systeme"
    },
    randomisierteAlgorithmen: {
        kurz: "Randomisierte<br />Algorithmen",
        kennung: [ITSE, IST],
        lehrform: ["Vorlesung", "Übung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Dr. Friedrich", "Dr. Timo Kötzing"],
        nameLV: "Randomisierte Algorithmen"
    },
    randomisierteAlgorithmen2: {
        kurz: "Randomisierte<br />Algorithmen 2",
        kennung: [IST, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Friedrich", "Dr. Timo Kötzing"],
        nameLV: "Randomisierte Algorithmen 2"
    },
    recommenderSystems: {
        kurz: "Recommender<br />Systems",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws14_15],
        cp: 3,
        dozent: ["Prof. Dr. Felix Naumann", "Dr. Ralf Krestel"],
        nameLV: "Recommender Systems"
    },
    resourceManagementPower: {
        kurz: "Resource<br />Management Power",
        kennung: [OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws16_17],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Max Plauth", "Felix Eberhardt", "Frank Feinbube"],
        nameLV: "Resource Management on Power"
    },
    reverseengineering: {
        kurz: "Reverse<br />Engineering",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "David Jäger", "Amir Azodi"],
        nameLV: "Vulnerabilities through Reverse Engineering"
    },
    regelungSteuerung: {
        kurz: "GRuS",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ss13, ss15],
        cp: 6,
        dozent: ["Dr.-Ing. Ralf Wollowski"],
        nameLV: "Systemtechnische Grundlagen der Regelungs-<br />und Steuerungstechnik"
    },
    schnittstellenGeoinformationGeokommunikation: {
        kurz: "Geo-Schnittstellen",
        kennung: [HCT, IST],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ss13],
        cp: 3,
        dozent: ["Dr. techn. Markus Jobst", "Sebastian Pasewaldt"],
        nameLV: "Schnittstellen der Geoinformation und Geokommunikation"
    },
    schulCloudKonzepte: {
        kurz: "Schul-Cloud",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel",  "Jan Renz"],
        nameLV: "Einsatz von cloud- und webbasierten Konzepten im schulischen Kontext"
    },
    searchEngineImplementation: {
        kurz: "Search Engine",
        kennung: [OSIS, IST],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss14],
        cp: 3,
        dozent: ["Dr. Ralf Krestel"],
        nameLV: "Search Engine Implementation"
    },
    securityIoT: {
        kurz: "Security for IoT",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss15, ss16],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Konrad-Felix Krentz"],
        nameLV: "Security for the Internet of Things"
    },
    selbstorganisation: {
        kurz: "StubS",
        kennung: [SSKSK],
        lehrform: ["Seminarleitung"],
        modul: [SOFTSKILLS],
        semester: [ws14_15, ws15_16, ws16_17],
        cp: 3,
        dozent: ["Dr. Ralf Wollowski"],
        nameLV: "Betreuung des Studienbegleitenden Seminars für die Erstis"
    },
    selfadaptivesystems: {
        kurz: "Self-Adaptive<br />Systems",
        kennung: [ITSE, SAMT],
        lehrform: ["Vorlesung", "Übung", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14, ss15, ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "Thomas Vogel"],
        nameLV: "Software Engineering for Self-adaptive Systems"
    },
    selfAwarenessAndSelfAdaptiveSystems: {
        kurz: "Self-Adaptive<br />Systems (3LP)",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Holger Giese"],
        nameLV: "Self-Awareness and Self-Adaptive Systems"
    },
    semanticMultimedia: {
        kurz: "Semantic Multimedia",
        kennung: [IST, OSIS, HCT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Dr. rer. nat. Harald Sack", "Jörg Waitelonis", "Nadine Steinmetz", "Magnus Knuth"],
        nameLV: "Semantic Multimedia"
    },
    semanticMultimedia2: {
        kurz: "Semantic Multimedia<br />(BPET)",
        kennung: [IST, OSIS, BPET],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss15, ss16],
        cp: 6,
        dozent: ["Dr. rer. nat. Harald Sack"],
        nameLV: "Semantic Multimedia"
    },
    semanticWebTechnologien: {
        kurz: "Semantic<br />Web",
        kennung: [ITSE, BPET, IST],
        lehrform: ["Vorlesung", "Übung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14, ws14_15, ws15_16],
        cp: 6,
        dozent: ["Dr. rer. nat. Harald Sack"],
        nameLV: "Semantic Web Technologien"
    },
    seminarDesForschungskollegs: {
        kurz: "Seminar des<br />Forschungskollegs",
        kennung: [BPET, HCT, IST, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Prof. Dr. Robert Hirschfeld"],
        nameLV: "Seminar des Forschungskollegs"
    },
    seminarGeovisualisierung: {
        kurz: "Geo Seminar",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ws13_14, ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Amir Semmo"],
        nameLV: "Seminar Geovisualisierung"
    },
    seminarOnSelfSustainingSystems: {
        kurz: "Self-Sustaining Systems",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG, IT_SYSTEMS_ENGINEERING],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Jens Lincke", "Marcel Taeumel"],
        nameLV: "Seminar on Self-Sustaining Systems"
    },
    servicebasedvisualization: {
        kurz: "Service-based<br />Visualization",
        kennung: [HCT, IST],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Benjamin Hagendorn", "Jan Klimke"],
        nameLV: "Service-based Visualization"
    },
    sicherheitInKomplexenITLandschaften: {
        kurz: "SikIL",
        kennung: [ITSE, IST, BPET, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Dr. Michael Menzel"],
        nameLV: "Sicherheit in komplexen IT-Landschaften"
    },
    socialMediaAnalyses: {
        kurz: "Social<br />Media",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Philipp Berger", "Patrick Hennig"],
        nameLV: "Social Media Analyses"
    },
    socialMediaMining: {
        kurz: "Social<br />Media Mining",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws14_15, ws15_16, ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Philipp Berger", "Patrick Hennig"],
        nameLV: "Social Media Mining"
    },
    softwareAdaption: {
        kurz: "Software Adaption",
        kennung: [ITSE, SAMT],
        lehrform: ["Vorlesung", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "Thomas Vogel"],
        nameLV: "Software Adaption"
    },
    softwareAnalytics: {
        kurz: "Software<br />Analytics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14, ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Sebastian Schmechel", "Sebastian Kay Belle", "Jonas Trümper", "Daniel Limberger"],
        nameLV: "Software Analytics"
    },
    softwareAnalytics2: {
        kurz: "Software<br />Analytics 2",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Stefan Buschmann", "Sebastian Hahn", "Daniel Limberger", "Dr. Matthias Trapp", "Willy Scheibel"],
        nameLV: "Software Engineering for Software Analytics"
    },
    softwareAsAService: {
        kurz: "Software as a Service",
        kennung: [ITSE, IST, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 3,
        dozent: ["Prof. Dr. Christoph Meinel", "Eyad Saleh"],
        nameLV: "Software-as-a-Service and Multi-tenancy"
    },
    spatialAnalytics: {
        kurz: "Spatial Analytics",
        kennung: [HCT, IST],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Benjamin Hagedorn"],
        nameLV: "Spatial Analytics"
    },
    softwareDesign: {
        kurz: "Software <br /> Design",
        kennung: [OSIS, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ws15_16, ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld"],
        nameLV: "Software Design"
    },
    softwareEngineeringEmbeddedSystems: {
        kurz: "SE for<br />Embedded Systems",
        kennung: [ITSE, SAMT],
        lehrform: ["Vorlesung", "Übung", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14, ws14_15, ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "Sebastian Wätzoldt", "Joachim Hänsel"],
        nameLV: "Software Engineering for Embedded Systems"
    },
    softwareProfiling: {
        kurz: "Software Profiling",
        kennung: [ITSE, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13],
        cp: 3,
        dozent: ["Dr. Peter Tröger", "Frank Feinbube"],
        nameLV: "Software Profiling"
    },
    softwarevisualisierung: {
        kurz: "Software-<br />visualisierung",
        kennung: [HCT, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Jonas Trümper", "Sebastian Schmechel", "Sebastian Kay Belle"],
        nameLV: "Softwarevisualisierungsverfahren"
    },
    statistischeDatenanalyse: {
        kurz: "Statistische<br />Datenanalyse",
        kennung: [ITSE, BPET],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14, ss16],
        cp: 6,
        dozent: ["Prof. Dr. Hannelore Liero"],
        nameLV: "Statistische Datenanalyse"
    },
    studiumPlus: {
        kurz: "Studium Plus 3LP",
        kennung: [SSKSK],
        lehrform: [""],
        modul: [SOFTSKILLS],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15],
        cp: 3,
        dozent: [""],
        nameLV: "StudiumPlus"
    },
    studiumPlus2: {
        kurz: "Studium Plus 6LP",
        kennung: [SSKSK],
        lehrform: [""],
        modul: [SOFTSKILLS],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15],
        cp: 6,
        dozent: [""],
        nameLV: "StudiumPlus"
    },
    testenVerifizierenAnalysieren: {
        kurz: "Testen, Verfizieren,<br />Analysieren",
        kennung: [OSIS, SAMT],
        lehrform: ["Vorlesung", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ws15_16, ws16_17],
        cp: 6,
        dozent: ["Dr. Leen Lambers"],
        nameLV: "Testen, Verifizieren und Analysieren von Software"
    },
    trendconceptsexercise: {
        kurz: "TuK<br />Übung",
        kennung: [ITSE, SAMT, OSIS, BPET],
        lehrform: ["Seminar", "Projekt"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14, ss15, ss16],
        cp: 6,
        dozent: ["Dr. Matthias Ulfacker", "Martin Boissier", "Christian Schwarz"],
        nameLV: "Trends and Concepts Exercise: Designing and Programming Applications for In-Memory Databases"
    },
    trendsInBetriebssystemen: {
        kurz: "Trends in <br />Betriebssystemen",
        kennung: [IST, SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws14_15, ss15, ws16_17],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze"],
        nameLV: "Trends in Betriebssystemen (Forschungsseminar)"
    },
    trendsInBioinformatics: {
        kurz: "Trends in <br />Bioinformatics",
        kennung: [ITSE, BPET, HCT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws15_16, ws16_17],
        cp: 3,
        dozent: ["Dr. Matthias Uflacker", "Dr. Mariana Neves"],
        nameLV: "Trends in Bioinformatics"
    },
    trendsInBPMN: {
        kurz: "Trends in <br />BPMN",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: [VERTIEFUNG],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Mathias Weske", "Luise Pufahl"],
        nameLV: "Trends in BPM Research"
    },
    trendsInMiddlewareAndDistributedSystems: {
        kurz: "Trends Middleware,<br />Distributed Systems",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws15_16, ss16],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze"],
        nameLV: "Trends in Middleware & Distributed Systems (Forschungsseminar)"
    },
    trendsSoftwareEngineeringSelfAdaptiveSoftware: {
        kurz: "Trends Self-Adaptive <br /> Software",
        kennung: [ ITSE, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss16, ws16_17],
        cp: 3,
        dozent: ["Prof. Dr. Holger Giese,"],
        nameLV: "Trends in Software Engineering for Self-Adaptive Software"
    },
    toc1: {
        kurz: "TuK I",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss13, ss14, ss15, ss16],
        cp: 3,
        dozent: ["Prof. Dr. Hasso Plattner"],
        nameLV: "Trends and Concepts in the Software Industry I: Inner Mechanics of In-Memory Databases"
    },
    toc2: {
        kurz: "TuK II",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws13_14],
        cp: 3,
        dozent: ["Prof. Dr. Hasso Plattner"],
        nameLV: "Trends and Concepts in the Software Industry II: Development of Enterprise Software"
    },
    toc26LP: {
        kurz: "TuK II 6LP",
        kennung: [ITSE, BPET, HCT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ws14_15, ws15_16, ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Hasso Plattner"],
        nameLV: "Trends and Concepts in the Software Industry II: Development of Enterprise Software 6LP"
    },
    unternehmensarchitektur: {
        kurz: "IT-Unternehmens-<br />architektur",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss14],
        cp: 3,
        dozent: ["Dr. Sabine Buckl", "Wolfgang Keller", "Prof. Dr. Robert Hirschfeld"],
        nameLV: "IT-Unternehmensarchitektur"
    },
    ueberzeugendPraesentieren: {
        kurz: "Überzeugend<br />präsentieren",
        kennung: [SSKKO],
        lehrform: ["Seminar"],
        modul: [SOFTSKILLS],
        semester: [ss13, ss14, ws13_14, ws14_15, ss15, ws15_16, ss16, ws16_17],
        cp: 3,
        dozent: ["Dr. Werner Dieball"],
        nameLV: "Überzeugend präsentieren -<br />Noch besser auftreten!"
    },
    unternehmensgruendung: {
        kurz: "Unternehmens-<br />gründung",
        kennung: [SSKKO, SSKMA, SSKRE],
        lehrform: ["Vorlesung"],
        modul: [SOFTSKILLS],
        semester: [ss13, ss14, ss15, ss16],
        cp: 6,
        dozent: ["Prof. Dr. Katharina Hölzle", "Dr. Jens Schmidt-Ehmcke"],
        nameLV: "Unternehmensgründung im IT-Sektor"
    },
    verlaesslichesysteme: {
        kurz: "Verlässliche<br />Systeme",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: [VERTIEFUNG],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Daniel Richter", "Lena Herscheid"],
        nameLV: "Verlässliche konfigurierbare Systeme"
    },
    virtuelleMaschinen: {
        kurz: "Virtuelle<br />Maschinen",
        kennung: [OSIS, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: [VERTIEFUNG],
        semester: [ws13_14, ws14_15, ws16_17],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tobias Pape", "Tim Felgentreff", "Bastian Steinert"],
        nameLV: "Virtuelle Maschinen und Ausführungsumgebungen"
    },
    visualSoftwareAnalytics: {
        kurz: "Visual Software<br />Analytics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar"],
        modul: [IT_SYSTEMS_ENGINEERING, VERTIEFUNG],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Willy Scheibel", "Sebastian Hahn"],
        nameLV: "Visual Software Analytics"
    },
    webbasedDevelopmentEnvironments: {
        kurz: "Webbased Development<br />Environments",
        kennung: [OSIS, IST],
        lehrform: ["Seminar", "Projekt"],
        modul: [VERTIEFUNG],
        semester: [ss16],
        cp: 6,
        dozent: ["Prof. Robert Hirschfeld"],
        nameLV: "Web-based Development Environments"
    },
    "Attention in Deep Learning": {
        "kennung": [
            "OSIS"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Attention Deep <br />Learning ",
        "cp": 4,
        "dozent": [
            "Prof. Dr. Christoph Lippert"
        ],
        "nameLV": "Attention in Deep Learning"
    },
    "Managing and Researching Healthcare Systems": {
        "kennung": [
            "BPET"
        ],
        "lehrform": "Vorlesung / Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Managing Researching <br />Healthcare Systems ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Reinhard Busse",
            "Dr. Wilm Quentin"
        ],
        "nameLV": "Managing and Researching Healthcare Systems"
    },
    "\u00dcberzeugend Pr\u00e4sentieren - Noch besser auftreten (Fortgeschrittene)": {
        "kennung": [
            "SSKKO"
        ],
        "lehrform": "Blockseminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "\u00dcberzeugend <br />Pr\u00e4sentieren - Noch ",
        "cp": 3,
        "dozent": [
            "Dr. Werner Dieball"
        ],
        "nameLV": "\u00dcberzeugend Pr\u00e4sentieren - Noch besser auftreten (Fortgeschrittene)"
    },
    "Live Programming": {
        "kennung": [
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Projektseminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Live Programming ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Robert Hirschfeld",
            " Jens Lincke",
            " Patrick Rein",
            " Stefan Ramson",
            " Tom Beckmann"
        ],
        "nameLV": "Live Programming"
    },
    "Simulating a million-dollar instrument - with deep learning from molecules to data": {
        "kennung": [
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Simulating <br />million-dollar ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Bernhard Renard",
            " Tom Altenburg",
            "Dr. Sven Giese",
            "https://hpi.de/friedrich/moodle/course/view.php?id=152"
        ],
        "nameLV": "Simulating a million-dollar instrument - with deep learning from molecules to data"
    },
    "Secure Identity Lab": {
        "kennung": [
            "ISAE",
            "ITSE",
            "OSIS"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Secure Identity ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Christoph Meinel",
            "M.Sc. Eric Klieme",
            "M.Sc. Alexander M\u00fchle"
        ],
        "nameLV": "Secure Identity Lab"
    },
    "Practical Applications of Deep Learning": {
        "kennung": [
            "ISAE",
            "ITSE",
            "OSIS"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Practical <br />Applications Deep ",
        "cp": 6,
        "dozent": [
            "Dr. Haojin Yang",
            " Christian Bartz",
            " Joseph Bethge",
            " Hendrik R\u00e4tz"
        ],
        "nameLV": "Practical Applications of Deep Learning"
    },
    "Digital Rail Summer School": {
        "kennung": [
            "ITSE",
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Projektseminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Digital Rail Summer <br />School ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Andreas Polze",
            "https://osm.hpi.de/drss/2021/"
        ],
        "nameLV": "Digital Rail Summer School"
    },
    "Dynamic Programming und Reinforcement Learning": {
        "kennung": [
            "ITSE",
            "BPET",
            "OSIS"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Dynamic Programming <br />Reinforcement ",
        "cp": 6,
        "dozent": [
            "Dr. Rainer Schlosser",
            " Alexander Kastius",
            "https://hpi.de/plattner/teaching/summer-term-2021/dynamic-programming-and-reinforcement-learning.html"
        ],
        "nameLV": "Dynamic Programming und Reinforcement Learning"
    },
    "Trends and Concepts in the Software Industry I": {
        "kennung": [
            "ITSE",
            "BPET",
            "OSIS"
        ],
        "lehrform": "V (Block)",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Trends Concepts <br />Software Industry I ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Hasso Plattner",
            "Dr. Michael Perscheid",
            "https://hpi.de/plattner/teaching/summer-term-2021/trends-and-concepts-in-the-software-industry-i.html"
        ],
        "nameLV": "Trends and Concepts in the Software Industry I"
    },
    "Natural Language Processing": {
        "kennung": [
            "BPET",
            "OSIS"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Natural Language <br />Processing ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Gerard de Melo",
            "https://moodle.hpi.de/course/view.php?id=178"
        ],
        "nameLV": "Natural Language Processing"
    },
    "Highly Scalable Systems": {
        "kennung": [
            "ITSE",
            "SAMT"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Highly Scalable <br />Systems ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Holger Giese",
            " Christian Medeiros Adriano",
            " Matthias Barkowsky",
            " Iqra Zafar"
        ],
        "nameLV": "Highly Scalable Systems"
    },
    "Konstruktion von Machine Learning Anwendungen": {
        "kennung": [
            "ITSE",
            "OSIS"
        ],
        "lehrform": "Projektseminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Konstruktion Machine <br />Learning Anwendungen ",
        "cp": 6,
        "dozent": [
            "Dr. Alexander Albrecht",
            "https://hpi.de/naumann/teaching/current-courses/ss-21/building-machine-learning-applications.html"
        ],
        "nameLV": "Konstruktion von Machine Learning Anwendungen"
    },
    "Software Mining and Applications": {
        "kennung": [
            "ISAE",
            "ITSE",
            "OSIS"
        ],
        "lehrform": "Seminar / Projekt",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Software Mining <br />Applications ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. J\u00fcrgen D\u00f6llner",
            " Willy Scheibel",
            " Daniel Atzberger",
            " Daniel Limberger"
        ],
        "nameLV": "Software Mining and Applications"
    },
    "Parallele Programmierung und Heterogenes Rechnen": {
        "kennung": [
            "ITSE",
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Vorlesung / Projekt",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Parallele <br />Programmierung ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Andreas Polze",
            " Sven K\u00f6hler",
            " Lukas Wenzel",
            " Max Plauth",
            "https://osm.hpi.de/parProg/2020/"
        ],
        "nameLV": "Parallele Programmierung und Heterogenes Rechnen"
    },
    "Future Interactive Technologies": {
        "kennung": [
            "ITSE",
            "SAMT"
        ],
        "lehrform": "Vorlesung",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Future Interactive <br />Technologies ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Patrick Baudisch"
        ],
        "nameLV": "Future Interactive Technologies"
    },
    "Academic Writing for Science (Fachspezifisches Englisch III)": {
        "kennung": [
            "SSKKO"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Academic Writing <br />Science ",
        "cp": 3,
        "dozent": [
            "Dr. Sharon Therese Nemeth"
        ],
        "nameLV": "Academic Writing for Science (Fachspezifisches Englisch III)"
    },
    "Machine Learning-based Control of Dynamical Systems": {
        "kennung": [
            "ITSE",
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Projekt / Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Machine <br />Learning-based ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Holger Giese",
            " Christian Medeiros Adriano",
            " Sona Ghahremani",
            " He Xu"
        ],
        "nameLV": "Machine Learning-based Control of Dynamical Systems"
    },
    "Fault Tolerant Algorithms": {
        "kennung": [
            "ISAE",
            "SAMT"
        ],
        "lehrform": "Projektseminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Fault Tolerant <br />Algorithms ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Tobias Friedrich",
            "Dr. Katrin Casel",
            "Dr. Sarel Cohen",
            "https://hpi.de/friedrich/teaching/ss21/faulttol.html"
        ],
        "nameLV": "Fault Tolerant Algorithms"
    },
    "Trends in BPM Research": {
        "kennung": [
            "ITSE",
            "BPET",
            "OSIS"
        ],
        "lehrform": "Vorlesung",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Trends BPM Research ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Mathias Weske",
            " Jan Ladleif"
        ],
        "nameLV": "Trends in BPM Research"
    },
    "Visualization and Analysis of Multidimensional Data": {
        "kennung": [
            "ISAE",
            "ITSE",
            "OSIS"
        ],
        "lehrform": "Seminar / Projekt",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Visualization <br />Analysis ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. J\u00fcrgen D\u00f6llner",
            "Dr. Benjamin Hagedorn",
            "Dr. Rico Richter"
        ],
        "nameLV": "Visualization and Analysis of Multidimensional Data"
    },
    "Develop your own Database": {
        "kennung": [
            "ITSE",
            "BPET",
            "OSIS"
        ],
        "lehrform": "Projekt / Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Develop your Database ",
        "cp": 6,
        "dozent": [
            "Dr. Michael Perscheid",
            " Jan Ko\u00dfmann",
            " Martin Boissier",
            " Thomas Bodner",
            "https://hpi.de/plattner/teaching/summer-term-2021/develop-your-own-database.html"
        ],
        "nameLV": "Develop your own Database"
    },
    "Advanced Competitive Programming": {
        "kennung": [
            "ISAE",
            "ITSE",
            "SAMT"
        ],
        "lehrform": "Projektseminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Advanced Competitive <br />Programming ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Tobias Friedrich",
            "https://hpi.de/friedrich/teaching/ss21/competitive.html"
        ],
        "nameLV": "Advanced Competitive Programming"
    },
    "Software-Design": {
        "kennung": [
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Projektseminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Software-Design ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Robert Hirschfeld",
            " Jens Lincke",
            " Stefan Ramson",
            " Patrick Rein"
        ],
        "nameLV": "Software-Design"
    },
    "Konflikt- und Kommunikationsmanagement": {
        "kennung": [
            "SSKMA",
            "SSKKO"
        ],
        "lehrform": "Blockseminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Konflikt- <br />Kommunikationsmanage ",
        "cp": 3,
        "dozent": [
            " Eva Bilstein"
        ],
        "nameLV": "Konflikt- und Kommunikationsmanagement"
    },
    "Business Process Compliance": {
        "kennung": [
            "ITSE",
            "BPET",
            "OSIS"
        ],
        "lehrform": "Vorlesung",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Business Process <br />Compliance ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Mathias Weske",
            " Maximilian V\u00f6lker"
        ],
        "nameLV": "Business Process Compliance"
    },
    "Business Etikette - HPI-Charm-School": {
        "kennung": [
            "SSKKO"
        ],
        "lehrform": "Blockseminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Business Etikette - <br />HPI-Charm-School ",
        "cp": 3,
        "dozent": [
            " Imme Vogelsang",
            "Dr. Timm Krohn"
        ],
        "nameLV": "Business Etikette - HPI-Charm-School"
    },
    "Statistical Models": {
        "kennung": [
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Statistical Models ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Bernhard Renard",
            "Dr. Katharina Baum"
        ],
        "nameLV": "Statistical Models"
    },
    "Netzwerksicherheit": {
        "kennung": [
            "ISAE",
            "ITSE",
            "OSIS"
        ],
        "lehrform": "Lectures and Exercises",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Netzwerksicherheit ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Christian D\u00f6rr"
        ],
        "nameLV": "Netzwerksicherheit"
    },
    "Sonic Thinking Seminar - Methods of Working with Sound": {
        "kennung": [
            "SSKDT",
            "SSKKO"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Sonic Thinking Seminar <br />- Methods Working with ",
        "cp": 3,
        "dozent": [
            "Dr. Julia von Thienen"
        ],
        "nameLV": "Sonic Thinking Seminar - Methods of Working with Sound"
    },
    "F\u00fchrungskompetenz": {
        "kennung": [
            "SSKMA"
        ],
        "lehrform": "Blockseminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "F\u00fchrungskompetenz ",
        "cp": 6,
        "dozent": [
            " Michael Heidemann",
            " Eugen Unger"
        ],
        "nameLV": "F\u00fchrungskompetenz"
    },
    "D-School Advanced Track": {
        "kennung": [
            "SSKDT"
        ],
        "lehrform": "Projekt / Seminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "D-School Advanced <br />Track ",
        "cp": 9,
        "dozent": [
            "Dr. Claudia Nicolai",
            "https://hpi.de/school-of-design-thinking/studium/advanced-track.html"
        ],
        "nameLV": "D-School Advanced Track"
    },
    "Systems Engineering and Data Processing with C++": {
        "kennung": [
            "ITSE",
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Systems Engineering <br />Data Processing with ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. J\u00fcrgen D\u00f6llner",
            " Willy Scheibel",
            " Jan Ole Vollmer"
        ],
        "nameLV": "Systems Engineering and Data Processing with C++"
    },
    "Computational Statistics": {
        "kennung": [
            "OSIS"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Computational <br />Statistics ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Bernhard Renard",
            "Dr. Sven Giese",
            " Elizabeth Yuu",
            "https://hpi.de/friedrich/moodle/course/view.php?id=151"
        ],
        "nameLV": "Computational Statistics"
    },
    "Management Essentials": {
        "kennung": [
            "SSKMA"
        ],
        "lehrform": "Vorlesung",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Management Essentials ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Eric Kearney"
        ],
        "nameLV": "Management Essentials"
    },
    "Probability and Computing": {
        "kennung": [
            "ISAE",
            "ITSE"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Probability Computing ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Tobias Friedrich",
            "Dr. Andreas G\u00f6bel",
            "https://hpi.de/friedrich/teaching/ss21/probcomp.html"
        ],
        "nameLV": "Probability and Computing"
    },
    "Advanced Techniques for Image and Video Analysis": {
        "kennung": [
            "ISAE",
            "ITSE",
            "OSIS"
        ],
        "lehrform": "Seminar / Projekt",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Advanced Techniques <br />Image Video Analysis ",
        "cp": 6,
        "dozent": [
            "Dr. Matthias Trapp",
            " Daniel-Amadeus Johannes Gl\u00f6ckner",
            " Max Reimann",
            " Sumit Shekhar",
            " Sebastian Pasewaldt"
        ],
        "nameLV": "Advanced Techniques for Image and Video Analysis"
    },
    "Dealing with Uncertainty": {
        "kennung": [
            "SSKMA",
            "SSKKO"
        ],
        "lehrform": "Blockseminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Dealing with <br />Uncertainty ",
        "cp": 3,
        "dozent": [
            " Christoph Burger"
        ],
        "nameLV": "Dealing with Uncertainty"
    },
    "Dissecting the complex - efficient computing in large networks": {
        "kennung": [
            "ISAE",
            "OSIS"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Dissecting complex - <br />efficient computing ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Bernhard Renard",
            "Dr. Katharina Baum",
            "Dr. Athar Khodabakhsh"
        ],
        "nameLV": "Dissecting the complex - efficient computing in large networks"
    },
    "Testing Business Ideas": {
        "kennung": [
            "SSKMA",
            "SSKRE"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Testing Business Ideas ",
        "cp": 3,
        "dozent": [
            "Dr. Frank Pawlitschek",
            " Annalena Lorson"
        ],
        "nameLV": "Testing Business Ideas"
    },
    "Methoden der Forschung": {
        "kennung": [
            "OSIS"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Methoden Forschung ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Felix Naumann",
            "https://hpi.de/naumann/teaching/current-courses/ss-21/methoden-der-forschung.html"
        ],
        "nameLV": "Methoden der Forschung"
    },
    "Knowledge Graphs": {
        "kennung": [
            "OSIS"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Knowledge Graphs ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Ralf Krestel",
            "https://hpi.de/naumann/teaching/current-courses/ss-21/knowledge-graphs.html"
        ],
        "nameLV": "Knowledge Graphs"
    },
    "Sonic Thinking Lecture - Methods of Working with Sound": {
        "kennung": [
            "SSKDT",
            "SSKKO"
        ],
        "lehrform": "Vorlesung",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Sonic Thinking Lecture <br />- Methods Working with ",
        "cp": 3,
        "dozent": [
            "Dr. Julia von Thienen"
        ],
        "nameLV": "Sonic Thinking Lecture - Methods of Working with Sound"
    },
    "Local Hierarchical Classification": {
        "kennung": [
            "ISAE",
            "OSIS"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Local Hierarchical <br />Classification ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Bernhard Renard",
            " Fabio Malcher Miranda"
        ],
        "nameLV": "Local Hierarchical Classification"
    },
    "Global Team-Based Innovation II": {
        "kennung": [
            "SSKMA",
            "ITSE",
            "OSIS",
            "BPET",
            "SSKKO"
        ],
        "lehrform": "Projekt / Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "Softskills",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Global Team-Based <br />Innovation II ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Falk Uebernickel",
            "https://hpi.de/uebernickel/teaching/global-team-based-innovation-gti-design-thinking.html"
        ],
        "nameLV": "Global Team-Based Innovation II"
    },
    "Quantum Programming": {
        "kennung": [
            "ITSE",
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Projekt / Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Quantum Programming ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Holger Giese",
            " Christian Medeiros Adriano",
            " Matthias Barkowsky",
            "Dr. Sven Schneider"
        ],
        "nameLV": "Quantum Programming"
    },
    "21st Century Health Care Businesses: Regulatory, Legal, and Public Policy Aspects": {
        "kennung": [
            "SSKRE"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "21st Century Health <br />Care Businesses: ",
        "cp": 3,
        "dozent": [
            "Guest Professor Ariel D Stern"
        ],
        "nameLV": "21st Century Health Care Businesses: Regulatory, Legal, and Public Policy Aspects"
    },
    "Trends in Betriebssystemen und Middleware (Forschungsseminar)": {
        "kennung": [
            "ISAE",
            "OSIS",
            "SAMT"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Trends <br />Betriebssystemen ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Andreas Polze",
            "https://www.dcl.hpi.uni-potsdam.de/teaching/parProg19/"
        ],
        "nameLV": "Trends in Betriebssystemen und Middleware (Forschungsseminar)"
    },
    "Usable Security and Privacy": {
        "kennung": [
            "ISAE",
            "ITSE"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Usable Security <br />Privacy ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Christoph Meinel",
            "Dr. Anne Kayem"
        ],
        "nameLV": "Usable Security and Privacy"
    },
    "Management & Leadership: \u201eMoments of truth\u201c": {
        "kennung": [
            "SSKMA"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Management & <br />Leadership: \u201eMoments ",
        "cp": 3,
        "dozent": [
            "Dr. Jana Leidenfrost",
            " Bernd Staudinger"
        ],
        "nameLV": "Management & Leadership: \u201eMoments of truth\u201c"
    },
    "Komplexit\u00e4tstheorie": {
        "kennung": [
            "ISAE"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Komplexit\u00e4tstheorie ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Christoph Meinel",
            " Joseph Bethge"
        ],
        "nameLV": "Komplexit\u00e4tstheorie"
    },
    "Introduction to Quantum Computing": {
        "kennung": [
            "ISAE"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Introduction Quantum <br />Computing ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Tobias Friedrich",
            "https://hpi.de/friedrich/teaching/ss21/quantum-comp.html"
        ],
        "nameLV": "Introduction to Quantum Computing"
    },
    "Challenges in BPM Research": {
        "kennung": [
            "ITSE",
            "BPET",
            "OSIS"
        ],
        "lehrform": [
            "Seminar"
        ],
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Challenges BPM <br />Research ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Mathias Weske",
            " Sven Ihde"
        ],
        "nameLV": "Challenges in BPM Research"
    },
    "Exact Exponential Algorithms": {
        "kennung": [
            "ISAE",
            "ITSE"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Exact Exponential <br />Algorithms ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Tobias Friedrich",
            "Dr. Katrin Casel",
            "https://hpi.de/friedrich/teaching/ss21/exactexpalg.html"
        ],
        "nameLV": "Exact Exponential Algorithms"
    },
    "D-School Global Design Thinking Workshop: Human-Centered Design and Strategic Futures": {
        "kennung": [
            "SSKDT",
            "SSKKO"
        ],
        "lehrform": "Seminar / P (Block)",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "D-School Global Design <br />Thinking Workshop: ",
        "cp": 3,
        "dozent": [
            "Dr. Claudia Nicolai"
        ],
        "nameLV": "D-School Global Design Thinking Workshop: Human-Centered Design and Strategic Futures"
    },
    "Advanced Cryptography": {
        "kennung": [
            "ISAE"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Advanced Cryptography ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Anja Lehmann"
        ],
        "nameLV": "Advanced Cryptography"
    },
    "Strategic Technology Foresight": {
        "kennung": [
            "SSKMA",
            "SSKRE"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Strategic Technology <br />Foresight ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Katharina H\u00f6lzle"
        ],
        "nameLV": "Strategic Technology Foresight"
    },
    "Deep Learning for Combinatorial Optimization": {
        "kennung": [
            "ISAE",
            "SAMT"
        ],
        "lehrform": "Projektseminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Deep Learning <br />Combinatorial ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Tobias Friedrich",
            "Dr. Sarel Cohen",
            "https://hpi.de/friedrich/teaching/ss21/combopt-dl.html"
        ],
        "nameLV": "Deep Learning for Combinatorial Optimization"
    },
    "HCI Project Seminar: software systems for VR, personal fabrication, and Haptics": {
        "kennung": [
            "ITSE",
            "SAMT"
        ],
        "lehrform": "Projekt / Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "HCI Project Seminar: <br />software systems VR, ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Patrick Baudisch"
        ],
        "nameLV": "HCI Project Seminar: software systems for VR, personal fabrication, and Haptics"
    },
    "Identity Management for End Users": {
        "kennung": [
            "ISAE"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Identity Management <br />Users ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Anja Lehmann"
        ],
        "nameLV": "Identity Management for End Users"
    },
    "D-School Basic Track": {
        "kennung": [
            "SSKDT"
        ],
        "lehrform": "Projekt / Seminar",
        "modul": [
            "Softskills"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "D-School Basic Track ",
        "cp": 9,
        "dozent": [
            "Dr. Claudia Nicolai",
            "https://hpi.de/school-of-design-thinking/studium/basic-track.html"
        ],
        "nameLV": "D-School Basic Track"
    },
    "Deep Learning": {
        "kennung": [
            "OSIS"
        ],
        "lehrform": "Vorlesung / Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Deep Learning ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Christoph Lippert"
        ],
        "nameLV": "Deep Learning"
    },
    "Table Recognition": {
        "kennung": [
            "OSIS"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Table Recognition ",
        "cp": 6,
        "dozent": [
            "Prof. Dr. Felix Naumann",
            " Gerardo Vitagliano",
            "https://hpi.de/naumann/teaching/current-courses/ss-21/table-recognition.html"
        ],
        "nameLV": "Table Recognition"
    },
    "Distributed Data Management": {
        "kennung": [
            "ITSE",
            "OSIS"
        ],
        "lehrform": "Vorlesung / \u00dcbung",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Distributed Data <br />Management ",
        "cp": 6,
        "dozent": [
            "Dr. Thorsten Papenbrock",
            "https://hpi.de/naumann/teaching/current-courses/ss-21/distributed-data-management.html"
        ],
        "nameLV": "Distributed Data Management"
    },
    "Graph-cut algorithms": {
        "kennung": [
            "ISAE"
        ],
        "lehrform": "Seminar",
        "modul": [
            "Vertiefungsgebiet"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Graph-cut algorithms ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Tobias Friedrich",
            "Dr. Davis Issac",
            "Dr. Nikhil Kumar",
            "https://hpi.de/friedrich/teaching/ss21/graphcut.html"
        ],
        "nameLV": "Graph-cut algorithms"
    },
    "Human-centered Design and Requirements Engineering for Software-Engineers": {
        "kennung": [
            "ITSE"
        ],
        "lehrform": "Vorlesung",
        "modul": [
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Human-centered Design <br />Requirements ",
        "cp": 3,
        "dozent": [
            "Prof. Dr. Falk Uebernickel",
            "Dr. Danielly De Paula",
            " Thomas Haskamp"
        ],
        "nameLV": "Human-centered Design and Requirements Engineering for Software-Engineers"
    },
    "Data-Driven Causal Inference": {
        "kennung": [
            "ITSE",
            "BPET",
            "OSIS"
        ],
        "lehrform": "Projekt / Seminar",
        "modul": [
            "Vertiefungsgebiet",
            "IT-Systems Engineering"
        ],
        "benotet": true,
        "semester": [
            ss21
        ],
        "kurz": "Data-Driven Causal <br />Inference ",
        "cp": 6,
        "dozent": [
            "Dr. Rainer Schlosser",
            " Johannes H\u00fcgle",
            " Christopher Hagedorn",
            "https://hpi.de/plattner/teaching/summer-term-2021/data-driven-causal-inference-research-seminar.html"
        ],
        "nameLV": "Data-Driven Causal Inference"
    }
}
