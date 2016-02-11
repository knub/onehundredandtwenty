/*
 * NOTE: Please update semesterManager in js/logic.js as well, after updating this file
 *
 * This file must only be edited manually!
 * Remember to update 'Klubsprecher' and 'Studium Plus'!
 */

 /*
 *   NOTES to Conversion from Bachelor to Master
 *   Pflicht is always false, leave out
 *   vertiefung is always empty, logic uses kennung
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
    ws15_16 = "WS15/16";

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

var data = {
    advancedDataProfiling: {
        kurz: "Adv. Data<br />Profiling",
        kennung: [BPET, OSIS],
        lehrform: ["Projekt", "Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann", "Thorsten Papenbrock"],
        nameLV: "Advanced Data Profiling"
    },
    advancedDesignThinking: {
        kurz: "D-School<br />Advanced Track",
        kennung: [SSKDT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Softskills"],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15],
        cp: 6,
        dozent: ["Dr. Claudia Nicolai", "Prof. Ulrich Weinberg"],
        nameLV: "Advanced Design Thinking (D-School Advanced Track)"
    },
    advancedMDE: {
        kurz: "Advanced MDE",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "M. Sc. Thomas Beyhl"],
        nameLV: "Advanced MDE: Model Management"
    },
    advancedRecommendationTechniques: {
        kurz: "Advanced<br />Recommendation",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Dr. Gjergji Kasneci"],
        nameLV: "Advanced Recommendation Techniques"
    },
    advancedSEFES: {
        kurz: "Advanced<br />SEFES",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 3,
        dozent: ["Prof. Dr. Holger Giese", "Sebastian Wätzoldt", "Dr. Dominique Blouin"],
        nameLV: "Advanced Software Engineering for Embedded Systems"
    },
    advancedTopicsInMemoryDatabases: {
        kurz: "Advanced<br />In-Memory DB",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Carsten Meyer", "Martin Boissier"],
        nameLV: "Advanced Topics on In-Memory Database Systems"
    },
    algorithmenGeovisualisierung: {
        kurz: "Algorithmen der<br />Geovisualisierung",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Vertiefungsgebiete", "IT-Systems Engineering"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Stefan Buschmann"],
        nameLV: "Algorithmen und Techniken der Geovisualisierung (ehem.: Geovisualisierungsverfahren)"
    },
    algorithmix: {
        kurz: "Algorithmix",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Vorlesung (flipped classroom)"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Timo Kötzing"],
        nameLV: "Algorithmix"
    },
    automatedAnalysisOfFormalModels: {
        kurz: "Analysis of<br />Formal Models",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13,ws13_14, ss14],
        cp: 3,
        dozent: ["Prof. Dr. Holger Giese", "Leen Lambers", "M.Sc. Johannes Dyck"],
        nameLV: "Automated Analysis of Formal Models"
    },
    bringYourOwnProject: {
        kurz: "ByoP",
        kennung: [SSKKO, SSKSK, SSKMA],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13, ws13_14],
        cp: 3,
        dozent: ["Dr. Karen Dittmann"],
        nameLV: "Bring your own project: IT-Projekte erfolgreich planen und managen"
    },
    businessEtikette: {
        kurz: "Business Etikette",
        kennung: [SSKSK, SSKKO],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
        cp: 3,
        dozent: ["Dr. Timm Krohn", "Imme Vogelsang"],
        nameLV: "Business Etikette-<br />HPI Charm School"
    },
    businessProcessCompliance: {
        kurz: "BPC",
        kennung: [BPET, SAMT],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14, ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Mathias Weske", "Matthias Kunze"],
        nameLV: "Business Process Compliance"
    },
    currentTrendsInAlgorithmTheory: {
        kurz: "Trends in<br />Algorithm Theory",
        kennung: [IST, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Tobias Friedrich"],
        nameLV: "Current Trends in Algorithm Theory",
    },
    cloudComputing: {
        kurz: "Cloud Computing",
        kennung: [IST, OSIS, ITSE],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze"],
        nameLV: "Industrieseminar Cloud Computing"
    },
    cloudSicherheit: {
        kurz: "Cloud Sicherheit",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Christian Neuhaus"],
        nameLV: "Algorithmen und Analysemethoden für Sicherheit in Cloud-Infrastrukturen"
    },
    cloudStorages: {
        kurz: "Cloud Storages",
        kennung: [IST, OSIS, ITSE],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws14_15, ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Hendrik Graupner", "Kennedy Torkura"],
        nameLV: "Securing Cloud Storages"
    },
    cloudUndVirtualisierung: {
        kurz: "Cloud &<br />Virtualisierung",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 3,
        dozent: ["Prof. Dr. Christoph Meinel", "Maxim Schnjakin"],
        nameLV: "Cloud und Virtualisierung"
    },
    constraintbasedprogramming: {
        kurz: "Constraint-based<br />Programming 3LP",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff"],
        nameLV: "Constraint-based Programming"
    },
    constraintbasedprogramming6LP: {
        kurz: "Constraint-based<br />Programming 6LP",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff", "Jens Lincke"],
        nameLV: "Constraint-based Programming"
    },
    compilerbau: {
        kurz: "Compilerbau",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Dr. Henning Bordihn"],
        nameLV: "Compilerbau und Programmtransformation"
    },
    darkWebMonitoring: {
        kurz: "Dark Web",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "David Jaeger", "Hendrik Graupner"],
        nameLV: "Dark Web Monitoring and Analysis of Leak Data"
    },
    dataMining: {
        kurz: "Data<br />Mining",
        kennung: [OSIS, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14, ss15],
        cp: 6,
        dozent: ["Dr. Gjergji Kasneci", "Dr. Ralf Krestel", "Maximilian Jenders"],
        nameLV: "Data Mining and Probabilistic Reasoning"
    },
    dataProfilingAndCleansing: {
        kurz: "Data Profiling<br />and Cleansing",
        kennung: [BPET, OSIS],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13, ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann" , "Thorsten Papenbrock"],
        nameLV: "Data Profiling and Data Cleansing"
    },
    decisionManagement: {
        kurz: "Decision<br />Management",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Mathias Weske", "Ekaterina Bazhenova"],
        nameLV: "Decision Management"
    },
    dependableSystems: {
        kurz: "Dependable<br />Systems",
        kennung: [ITSE, OSIS],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13, ss14],
        cp: 6,
        dozent: ["Dr. Peter Tröger"],
        nameLV: "Dependable Systems"
    },
    designingProgrammingInMemoryDatabases: {
        kurz: "Apps for IMDB",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Christian Schwarz", "Dr. Jürgen Müller", "Dipl.-Kfm. Jens Krüger"],
        nameLV: "Designing and Programming Applications for In-Memory Databases"
    },
    designScienceMethodology: {
        kurz: "Design Science<br />Methodology",
        kennung: [BPET, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Mathias Weske", "Sankalita Mandal"],
        nameLV: "Design Science Methodology"
    },
    designThinkingBasics: {
        kurz: "D-School<br />Basic Track",
        kennung: [SSKDT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Softskills"],
        semester: [ss13,ws13_14, ss14, ws14_15, ss15],
        cp: 9,
        dozent: ["Dr. Claudia Nicolai", "Prof. Ulrich Weinberg"],
        nameLV: "Design Thinking Basics (D-School Basic Track)"
    },
    distributedBDA: {
        kurz: "Distributed BDA",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann", " Toni Grütze", "Sebastian Kruse"],
        nameLV: "Distributed Big Data Analytics"
    },
    duplicationDetection: {
        kurz: "Duplication Detection",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann", "Arvid Heise"],
        nameLV: "Large Scale Duplicate Detection"
    },
    eingebetteteBetriebssysteme: {
        kurz: "Embedded<br />Systems",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Vorlesung", "Projekt"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Uwe Hentschel"],
        nameLV: "Eingebettete Betriebssysteme"
    },
    eingebetteteBetriebssystemeWithITSE: {
        kurz: "Embedded<br />Systems (WS15/16)",
        kennung: [IST, OSIS, ITSE],
        lehrform: ["Vorlesung", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Max Plauth", "Daniel Richter"],
        nameLV: "Eingebettete Betriebssysteme"
    },
    englisch3: {
        kurz: "Fachenglisch<br />Level 3",
        kennung: [SSKSK, SSKKO],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
        cp: 3,
        dozent: ["David Meier", "Sharon Nemeth"],
        nameLV: "Fachspezifisches Englisch (Level 3)"
    },
    eventprocessing: {
        kurz: "Event Processing<br />6LP",
        kennung: [ITSE, OSIS],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Dr. Anne Baumgraß", "Prof. Dr. Mathias Weske"],
        nameLV: "Event Processing"
    },
    eventprocessing3LP: {
        kurz: "Event Processing<br />3LP",
        kennung: [BPET, OSIS],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 3,
        dozent: ["Dr. Anne Baumgraß", "Prof. Dr. Mathias Weske"],
        nameLV: "Event Processing"
    },
    eventProcessingSystems: {
        kurz: "Event Processing<br /> Systems",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Dr. Anne Baumgraß", "Prof. Dr. Mathias Weske"],
        nameLV: "Event Processing Systems"
    },
    eventProcessingTechnologies: {
        kurz: "Event Processing<br />Technologies",
        kennung: [BPET, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Jan Mendling"],
        nameLV: "Event Processing Technologies"
    },
    fehlerinjektion: {
        kurz: "Fehlerinjektion",
        kennung: [OSIS, IST, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss15],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Lena Herscheid", "Daniel Richter"],
        nameLV: "Fehlerinjektion"
    },
    fuehrungskompetenz: {
        kurz: "Führungs-<br />kompetenz",
        kennung: [SSKMA],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13, ss14, ss15],
        cp: 6,
        dozent: ["Michael Karl Heidemann M.A.", "Eugen Unger"],
        nameLV: "Führungskompetenz"
    },
    futureinteractivetechnology: {
        kurz: "FIT",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Vorlesung"],
        modul: ["IT Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14, ss15],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "Future Interactive Technology"
    },
    geoinformationstechnologien: {
        kurz: "Geoinformations-<br />technologien",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 3,
        dozent: ["Dr. Markus Jobst"],
        nameLV: "Geoinformationstechnologien"
    },
    geovisualisierung: {
        kurz: "Geovisualisierung",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete", "IT-Systems Engineering"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Sebastian Pasewaldt", "Sebastian Schmechel", "Dr. Matthias Trapp"],
        nameLV: "Geovisualisierung"
    },
    hciProject: {
        kurz: "HCI<br />Projekt",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Interactive Fabrication and Muscle Interfaces"
    },
    hciProjectSeminar: {
        kurz: "HCI Cameras<br /> and Haptics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Cameras, Haptics & Interactive Fabrication"
    },
    hciProjectSeminar2: {
        kurz: "HCI Projekt<br />Crowd Interaction",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Crowd Interaction, Physical Computing and Digital Fabrication"
    },
    hciProjectSeminarBIVRG: {
        kurz: "HCI Projekt<br />IVR Games",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Building Immersive Virtual Reality Games"
    },
    hciProjectSeminarVRG: {
        kurz: "HCI Projekt<br />VR Gaming",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on Virtual Reality Gaming"
    },
    hciProjectSeminarHPFVR: {
        kurz: "HCI Projekt<br />Haptics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar Haptics, Personal Fabrication, and Virtual Reality"
    },
    hciProjectSeminarPISME: {
        kurz: "HCI Projekt<br />3D-Printing",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar on 3D-Printing, Interactive Systems, and Mechanical Engineering"
    },
    hciProjectSeminarFH: {
        kurz: "HCI Projekt<br />Fabrication & Haptics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "HCI Project Seminar: Fabrication and Haptics"
    },
    hciResearch: {
        kurz: "HCI Research",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13, ss14],
        cp: 6,
        dozent: ["Prof. Dr. Patrick Baudisch"],
        nameLV: "Human Computer Interaction Research"
    },
    heuristicOptimization: {
        kurz: "Heuristic<br />Optimization",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 3,
        dozent: ["Prof. Dr. Tobias Friedrich", "Dr. Timo Kötzing", "Dr. Andrew Sutton"],
        nameLV: "Heuristic Optimization"
    },
    informationIntegration: {
        kurz: "Information<br /> Integration",
        kennung: [OSIS, SAMT],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Felix Naumann"],
        nameLV: "Information Integration"
    },
    informationretrieval: {
        kurz: "Information<br /> Retrieval",
        kennung: [OSIS, IST],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Felix Naumann"],
        nameLV: "Information Retrieval"
    },
    informationretrieval6LP: {
        kurz: "Information<br /> Retrieval 6LP",
        kennung: [OSIS, IST],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Dr. Ralf Krestel"],
        nameLV: "Information Retrieval 6LP"
    },
    informationssicherheit: {
        kurz: "Information<br />Security",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13, ss15],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "David Jaeger", "Andrey Sapegin"],
        nameLV: "Informationssicherheit"
    },
    informationvisualization: {
        kurz: "Information<br /> Visualization",
        kennung: [HCT, IST],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Sebastian Kai Belle"],
        nameLV: "Information Visualization"
    },
    inmemorycomputing: {
        kurz: "In-Memory<br />Computing",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dr. Matthieu Schpranow", "Dr. Mariana Neves", "Cindy Fähnrich"],
        nameLV: "In-Memory Computing for Life Sciences"
    },
    inMemoryDatabases: {
        kurz: "In Memory<br />Databases",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Martin Faust", "David Schwalb", "Dipl.-Kfm. Jens Krüger", "Dr. Jürgen Müller", "Christian Schwarz"],
        nameLV: "In-Memory Databases: Algorithms and Data Structures on Modern Hardware"
    },
    inMemoryDatabasesAiH: {
        kurz: "In Memory<br />Databases Healthcare",
        kennung: [ITSE, BPET, OSIS],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dr. Matthieu Schapranow", "Dr. Mariana Neves", "Cindy Fähnrich"],
        nameLV: "In-Memory Databases: Applications in Healthcare"
    },
    inMemoryDataManagementResearch: {
        kurz: "IMDB Data<br />Management",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14, ws15_16],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Krüger", "Martin Boissier", "Markus Dreseler"],
        nameLV: "In-Memory Data Management Research"
    },
    inMemoryDataStructuresAlgorithms: {
        kurz: "IMDB<br />Algorithms",
        kennung: [ITSE, OSIS, SAMT, BPET],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Martin Faust", "David Schwalb"],
        nameLV: "Data Structures and Algorithms for In-Memory Databases"
    },
    interactiveData: {
        kurz: "Interactive Data",
        kennung: [ITSE, SAMT, HCT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Marcel Taeumel", "Tim Felgentreff", "Jens Lincke"],
        nameLV: "Interactive Representations of Data Structures and Algorithms"
    },
    introductionOfDesignThinking: {
        kurz: "Introduction<br />Design Thinking",
        kennung: [SSKDT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Softskills"],
        semester: [ss13,ws13_14, ss14, ws14_15, ss15],
        cp: 3,
        dozent: ["Dr. Claudia Nicolai", "Prof. Ulrich Weinberg"],
        nameLV: "Introduction of Design Thinking"
    },
    introductionVisualization: {
        kurz: "Introduction to<br />Visualization",
        kennung: [IST, HCT],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Dr. Matthias Trapp", "Amir Semmo", "Sebastian Pasewaldt"],
        nameLV: "Interactive Representations of Data Structures and Algorithms"
    },
    itEntrepreneurship: {
        kurz: "Entrepreneurship",
        kennung: [SSKMA, SSKRE, SSKKO],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ws13_14, ws14_15, ws15_16],
        cp: 6,
        dozent: ["Dr. Rouven Westphal", "Manuel Effenberg"],
        nameLV: "IT-Entrepreneurship"
    },
    itEntrepreneurshipII: {
        kurz: "Entrepreneurship II",
        kennung: [SSKMA, SSKKO, SSKRE],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13],
        cp: 3,
        dozent: ["Dr. Rouven Westphal"],
        nameLV: "IT Entrepreneurship II"
    },
    itFallstudien: {
        kurz: "Fallstudien",
        kennung: [SSKMA, SSKRE],
        lehrform: ["Vorlesung"],
        modul: ["Softskills"],
        semester: [ws13_14, ss15],
        cp: 6,
        dozent: ["Prof. Dr.-Ing. Werner Zorn"],
        nameLV: "IT-Fallstudien - Was wir aus gescheiterten IT-Projekten lernen können"
    },
    itRecht: {
        kurz: "IT-Recht",
        kennung: [SSKRE],
        lehrform: ["Vorlesung"],
        modul: ["Softskills"],
        semester: [ws13_14, ws14_15, ws15_16],
        cp: 3,
        dozent: ["Dr. Anselm Brandi-Dohrn", "Monika Menz"],
        nameLV: "IT-Recht"
    },
    komplexitaestheorie: {
        kurz: "Komplexitätstheorie",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Nuhad Shaabani"],
        nameLV: "Komplexitätstheorie"
    },
    konfliktUndKommunikationsmanagement: {
        kurz: "Kommunikations-<br />management",
        kennung: [SSKKO, SSKMA],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13,ws13_14, ss14, ws14_15, ss15, ws15_16],
        cp: 3,
        dozent: ["Dr. Michaela Schumacher", "Eva Bilstein"],
        nameLV: "Konflikt-<br />und Kommunikationsmanagement"
    },
    kontextorientiertesProgrammieren: {
        kurz: "COP",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 3,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Marcel Taeumel", "Jens Lincke", "Tim Felgentreff"],
        nameLV: "Kontextorientiertes Programmieren"
    },
    konzepteParallelerProgrammierung: {
        kurz: "ParProg 6LP",
        kennung: [ITSE, OSIS],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Dr. Peter Tröger"],
        nameLV: "Konzepte paralleler Programmierung"
    },
    nlp: {
        kurz: "NLP",
        kennung: [OSIS, BPET],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14, ss15],
        cp: 3,
        dozent: ["Dr. Mariana Neves", "Prof. Dr. Felix Naumann"],
        nameLV: "Natural Language Processing"
    },
    linkeddatapublishing: {
        kurz: "Linked Data<br /> Publishing",
        kennung: [ITSE, BPET, IST],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Harald Sack"],
        nameLV: "Principles of Linked Data Publishing"
    },
    linkedopendata: {
        kurz: "LOD<br />Movies",
        kennung: [ITSE, BPET, IST],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Dr. rer. nat. Harad Sack"],
        nameLV: "A LOD of Movies - Linked Open Data Knowledge Mining"
    },
    machineTranslation: {
        kurz: "Machine Translation",
        kennung: [ITSE, BPET],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Dr. Mariana Neves"],
        nameLV: "Machine Translation"
    },
    managementEssentials: {
        kurz: "Management Essentials",
        kennung: [SSKMA],
        lehrform: ["Vorlesung"],
        modul: ["Softskills"],
        semester: [ss13, ss14, ws14_15, ss15, ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Katharina Hölzle", "Prof. Dr. Eric Kearney"],
        nameLV: "Management Essentials"
    },
    methodikGeoinformationstechnik: {
        kurz: "Methodik<br />GeoInfo",
        kennung: [HCT, IST],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 3,
        dozent: ["Dr. techn. Markus Jobst"],
        nameLV: "Methodik der Geoinformationstechnik"
    },
    middleware: {
        kurz: "Komponenten<br />& Middleware",
        kennung: [OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Christian Neuhaus", "Frank Feinbube"],
        nameLV: "Komponentenprogrammierung und Middleware"
    },
    modellgetriebeneEntwicklung: {
        kurz: "Modellgetriebene",
        kennung: [ITSE, SAMT],
        lehrform: ["Vorlesung", "Projekt"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "Thomas Vogel"],
        nameLV: "Modellgetriebene Softwareentwicklung"
    },
    modulsysteme: {
        kurz: "Modulsysteme",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff", "Jens Lincke", "Marcel Taeumel", "Tobias Pape"],
        nameLV: "Modulsysteme"
    },
    networkSecurityPractice: {
        kurz: "Network<br />Security",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14, ws14_15, ws15_16],
        cp: 6,
        dozent: ["Dr. Feng Cheng", "Prof. Dr. Christoph Meinel"],
        nameLV: "Network Security in Practice"
    },
    nonUniformMemoryAccess: {
        kurz: "NUMA",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze"],
        nameLV: "Non-Uniform Memory Access (NUMA) - Herausforderungen paralleler Systeme "
    },
    openHPIVirtualization: {
        kurz: "openHPI:<br />Virtualization",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel",  "Jan Renz", "Thomas Staubits", "Christian Willems"],
        nameLV: "openHPI: Concepts for Linux Container Virtualization for web development and deployment"
    },
    parallelProgrammingIMDB: {
        kurz: "Parallel Programming<br />In-Memory Databases",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Martin Faust", "David Schwalb", "Carsten Meyer", "Martin Boissier"],
        nameLV: "Parallel Programming and Algorithms for In-Memory Databases"
    },
    pearlsComputerScience: {
        kurz: "Pearls of CS",
        kennung: [BPET, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 3,
        dozent: ["Prof. Dr. Mathias Weske"],
        nameLV: "Pearls of Computer Science"
    },
    pearlsofBPM: {
        kurz: "Pearls of BPM",
        kennung: [OSIS, BPET],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Mathias Weske", "Ekaterina Bazhenova"],
        nameLV: "Pearls of Business Process Management"
    },
    penTesting: {
        kurz: "Penetration Testing",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Hosnieh Rafiee"],
        nameLV: "Penetration Testing and Securing IPv6 Networks"
    },
    persoenlichkeitUndSelbstmanagement: {
        kurz: "Persönlichkeit &<br />Selbstmanagement",
        kennung: [SSKKO, SSKMA],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
        cp: 3,
        dozent: ["Dr. Michaela Schumacher"],
        nameLV: "Persönlichkeit und Selbstmanagement"
    },
    personalManagementSkills: {
        kurz: "Personal<br />Management",
        kennung: [SSKMA, SSKKO],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ws13_14, ws14_15, ws15_16],
        cp: 3,
        dozent: ["Dr. Rolf Specht"],
        nameLV: "Personal Management Skills"
    },
    personalLeadershipSkills: {
        kurz: "Personal<br />Leadership",
        kennung: [SSKMA, SSKKO],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss14, ss15],
        cp: 3,
        dozent: ["Dr. Rolf Specht"],
        nameLV: "Personal Leadership Skills"
    },
    pointCloudAnalytics: {
        kurz: "Point Cloud<br />Analytics",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner"],
        nameLV: "Seminar Point Cloud Analytics"
    },
    practicalApplicationsOfMultimediaRetrieval: {
        kurz: "Multimedia Retrieval",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete", "IT-Systems Engineering"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Haojin Yang "],
        nameLV: "Practical Applications of Multimedia Retrieval"
    },
    practicalVideoAnalyses: {
        kurz: "Practical Video<br />Analyses",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete", "IT-Systems Engineering"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Haojin Yang "],
        nameLV: "Practical Video Analyses"
    },
    privacyAndSecurityIPv6: {
        kurz: "Privacy&Sec<br />IPv6",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Vertiefungsgebiete", "IT-Systems Engineering"],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Hosnieh Rafiee"],
        nameLV: "Privacy and Security in IPv6"
    },
    productInnovationAndEngineering: {
        kurz: "ME310 II",
        kennung: [ITSE, BPET, HCT],
        lehrform: ["Projekt", "Seminar"],
        modul: ["Vertiefungsgebiete", "IT-Systems Engineering"],
        semester: [ss13, ss14, ss15],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Franziska Häger", "Thomas Kowark", "Dr. Jens Krüger", "Cornelius Illi"],
        nameLV: "Global Team-Based Product Innovation & Engineering II -<br />ME 310"
    },
    productInnovationEngineeringI: {
        kurz: "ME310 I",
        kennung: [ITSE, BPET],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14, ws14_15, ws15_16],
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Krüger", "Thomas Kowark", "Franziska Häger", "Keven Richly"],
        nameLV: "Global Team-Based Product Innovation & Engineering I - ME 310"
    },
    productInnovationEngineeringI_HCT: {
        kurz: "ME310 I (mit HCT)",
        kennung: [ITSE, BPET, HCT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [], // another document listed it with HCT for ws15_16
        cp: 6,
        dozent: ["Dr. Matthias Uflacker", "Thomas Kowark", "Franziska Häger", "Keven Richly"],
        nameLV: "Global Team-Based Product Innovation & Engineering I - ME 310"
    },
    productInnovationEngineeringIII: {
        kurz: "ME310 Coaching",
        kennung: [ITSE, BPET],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14, ws14_15, ws15_16],
        cp: 3,
        dozent: ["Dr. Matthias Uflacker", "Dipl.-Kfm. Jens Krüger", "Thomas Kowark", "Franziska Häger"],
        nameLV: "Global Team-Based Product Innovation & Engineering III - ME 310 Coaching Research"
    },
    programmiersprachenKonzepteWerkzeugeUmgebungen: {
        kurz: "Programmiersprachen",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tim Felgentreff", "Marcel Taeumel", "Toni Mattis"],
        nameLV: "Programmiersprachen: Konzepte, Werkzeuge, Umgebungen"
    },
    programmierungVerteilterSysteme: {
        kurz: "ParProg 3LP",
        kennung: [SAMT, OSIS, IST],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Felix Eberhardt "],
        nameLV: "Programmierung paralleler und verteilter Systeme"
    },
    programmierungVerteilterSystemeProjektseminar: {
        kurz: "Parallele und<br />Verteilte Systeme PS",
        kennung: [SAMT, OSIS, IST],
        lehrform: ["Projekt", "Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Frank Feinbube", "Felix Eberhardt ", "Max Plauth"],
        nameLV: "Projektseminar: Parallele und verteilte Systeme"
    },
    recommenderSystems: {
        kurz: "Recommender<br />Systems",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws14_15],
        cp: 3,
        dozent: ["Prof. Dr. Felix Naumann", "Dr. Ralf Krestel"],
        nameLV: "Recommender Systems"
    },
    reverseengineering: {
        kurz: "Reverse<br />Engineering",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "David Jäger", "Amir Azodi"],
        nameLV: "Vulnerabilities through Reverse Engineering"
    },
    regelungSteuerung: {
        kurz: "GRuS",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete", "IT-Systems Engineering"],
        semester: [ss13, ss15],
        cp: 6,
        dozent: ["Dr.-Ing. Ralf Wollowski"],
        nameLV: "Systemtechnische Grundlagen der Regelungs-<br />und Steuerungstechnik"
    },
    schnittstellenGeoinformationGeokommunikation: {
        kurz: "Geo-Schnittstellen",
        kennung: [HCT, IST],
        lehrform: ["Vorlesung"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        cp: 3,
        dozent: ["Dr. techn. Markus Jobst", "Sebastian Pasewaldt"],
        nameLV: "Schnittstellen der Geoinformation und Geokommunikation"
    },
    searchEngineImplementation: {
        kurz: "Search Engine",
        kennung: [OSIS, IST],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        cp: 3,
        dozent: ["Dr. Ralf Krestel"],
        nameLV: "Search Engine Implementation"
    },
    securityIoT: {
        kurz: "Security for IoT",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Konrad-Felix Krentz"],
        nameLV: "Security for the Internet of Things "
    },
    selbstorganisation: {
        kurz: "StubS",
        kennung: [SSKSK],
        lehrform: ["Seminarleitung"],
        modul: ["Softskills"],
        semester: [ws14_15, ws15_16],
        cp: 3,
        dozent: ["Dr. Ralf Wollowski"],
        nameLV: "Betreuung des Studienbegleitenden Seminars für die Erstis"
    },
    selfadaptivesystems: {
        kurz: "Self-Adaptive<br />Systems",
        kennung: [ITSE, SAMT],
        lehrform: ["Vorlesung", "Übung", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14, ss15],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "Thomas Vogel"],
        nameLV: "Software Engineering for Self-adaptive Systems"
    },
    selfAwarenessAndSelfAdaptiveSystems: {
        kurz: "Self-Adaptive<br />Systems (3LP)",
        kennung: [ITSE, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Holger Giese"],
        nameLV: "Self-Awareness and Self-Adaptive Systems"
    },
    semanticMultimedia: {
        kurz: "Semantic Multimedia",
        kennung: [IST, OSIS, HCT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Dr. rer. nat. Harald Sack", "Jörg Waitelonis", "Nadine Steinmetz", "Magnus Knuth"],
        nameLV: "Semantic Multimedia"
    },
    semanticMultimedia2: {
        kurz: "Semantic Multimedia<br />(BPET)",
        kennung: [IST, OSIS, BPET],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Dr. rer. nat. Harald Sack"],
        nameLV: "Semantic Multimedia"
    },
    semanticWebTechnologien: {
        kurz: "Semantic<br />Web",
        kennung: [ITSE, BPET, IST],
        lehrform: ["Vorlesung", "Übung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14, ws14_15, ws15_16],
        cp: 6,
        dozent: ["Dr. rer. nat. Harald Sack"],
        nameLV: "Semantic Web Technologien"
    },
    seminarDesForschungskollegs: {
        kurz: "Seminar des<br />Forschungskollegs",
        kennung: [BPET, HCT, IST, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15, ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Prof. Dr. Robert Hirschfeld"],
        nameLV: "Seminar des Forschungskollegs"
    },
    seminarGeovisualisierung: {
        kurz: "Geo Seminar",
        kennung: [ITSE, HCT, IST],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Vertiefungsgebiete", "IT-Systems Engineering"],
        semester: [ws13_14, ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Amir Semmo"],
        nameLV: "Seminar Geovisualisierung"
    },
    seminarOnSelfSustainingSystems: {
        kurz: "Self-Sustaining Systems",
        kennung: [ITSE, OSIS, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Vertiefungsgebiete", "IT-Systems Engineering"],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Jens Lincke", "Marcel Taeumel"],
        nameLV: "Seminar on Self-Sustaining Systems"
    },
    servicebasedvisualization: {
        kurz: "Service-based<br />Visualization",
        kennung: [HCT, IST],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Benjamin Hagendorn", "Jan Klimke"],
        nameLV: "Service-based Visualization"
    },
    sicherheitInKomplexenITLandschaften: {
        kurz: "SikIL",
        kennung: [ITSE, IST, BPET, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Dr. Michael Menzel"],
        nameLV: "Sicherheit in komplexen IT-Landschaften"
    },
    socialMediaAnalyses: {
        kurz: "Social<br />Media",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Philipp Berger", "Patrick Hennig"],
        nameLV: "Social Media Analyses"
    },
    socialMediaMining: {
        kurz: "Social<br />Media Mining",
        kennung: [ITSE, IST, OSIS],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws14_15, ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Christoph Meinel", "Philipp Berger", "Patrick Hennig"],
        nameLV: "Social Media Mining"
    },
    softwareAdaption: {
        kurz: "Software Adaption",
        kennung: [ITSE, SAMT],
        lehrform: ["Vorlesung", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "Thomas Vogel"],
        nameLV: "Software Adaption"
    },
    softwareAnalytics: {
        kurz: "Software<br />Analytics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14, ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Sebastian Schmechel", "Sebastian Kay Belle", "Jonas Trümper", "Daniel Limberger"],
        nameLV: "Software Analytics"
    },
    softwareAnalytics2: {
        kurz: "Software<br />Analytics 2",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Stefan Buschmann", "Sebastian Hahn", "Daniel Limberger", "Dr. Matthias Trapp", "Willy Scheibel"],
        nameLV: "Software Engineering for Software Analytics"
    },
    softwareAsAService: {
        kurz: "Software as a Service",
        kennung: [ITSE, IST, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 3,
        dozent: ["Prof. Dr. Christoph Meinel", "Eyad Saleh"],
        nameLV: "Software-as-a-Service and Multi-tenancy"
    },
    spatialAnalytics: {
        kurz: "Spatial Analytics",
        kennung: [HCT, IST],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Rico Richter", "Benjamin Hagedorn"],
        nameLV: "Spatial Analytics"
    },
    softwareDesign: {
        kurz: "Software <br /> Design",
        kennung: [OSIS, SAMT],
        lehrform: ["Seminar", "Projekt"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld"],
        nameLV: "Software Design"
    },
    softwareEngineeringEmbeddedSystems: {
        kurz: "SE for<br />Embedded Systems",
        kennung: [ITSE, SAMT],
        lehrform: ["Vorlesung", "Übung", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14, ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Holger Giese", "Sebastian Wätzoldt", "Joachim Hänsel"],
        nameLV: "Software Engineering for Embedded Systems"
    },
    softwareProfiling: {
        kurz: "Software Profiling",
        kennung: [ITSE, OSIS],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13],
        cp: 3,
        dozent: ["Dr. Peter Tröger", "Frank Feinbube"],
        nameLV: "Software Profiling"
    },
    softwarevisualisierung: {
        kurz: "Software-<br />visualisierung",
        kennung: [HCT, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss13],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Jonas Trümper", "Sebastian Schmechel", "Sebastian Kay Belle"],
        nameLV: "Softwarevisualisierungsverfahren"
    },
    statistischeDatenanalyse: {
        kurz: "Statistische<br />Datenanalyse",
        kennung: [ITSE, BPET],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 6,
        dozent: ["Prof. Dr. Hannelore Liero"],
        nameLV: "Statistische Datenanalyse"
    },
    studiumPlus: {
        kurz: "Studium Plus 3LP",
        kennung: [SSKSK],
        lehrform: [""],
        modul: ["Softskills"],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15],
        cp: 3,
        dozent: [""],
        nameLV: "StudiumPlus"
    },
    studiumPlus2: {
        kurz: "Studium Plus 6LP",
        kennung: [SSKSK],
        lehrform: [""],
        modul: ["Softskills"],
        semester: [ss13, ws13_14, ss14, ws14_15, ss15],
        cp: 6,
        dozent: [""],
        nameLV: "StudiumPlus"
    },
    testenVerifizierenAnalysieren: {
        kurz: "Testen, Verfizieren,<br />Analysieren",
        kennung: [OSIS, SAMT],
        lehrform: ["Vorlesung", "Projekt"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 6,
        dozent: ["Dr. Leen Lambers"],
        nameLV: "Testen, Verifizieren und Analysieren von Software"
    },
    trendconceptsexercise: {
        kurz: "TuK<br />Übung",
        kennung: [ITSE, SAMT, OSIS, BPET],
        lehrform: ["Seminar", "Projekt"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss14, ss15],
        cp: 6,
        dozent: ["Dr. Matthias Ulfacker", "Martin Boissier", "Christian Schwarz"],
        nameLV: "Trends and Concepts Exercise: Designing and Programming Applications for In-Memory Databases"
    },
    trendsInBetriebssystemen: {
        kurz: "Trends in <br />Betriebssystemen",
        kennung: [IST, SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws14_15, ss15],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze"],
        nameLV: "Trends in Betriebssystemen (Forschungsseminar)"
    },
    trendsInBioinformatics: {
        kurz: "Trends in <br />Bioinformatics",
        kennung: [ITSE, BPET, HCT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Dr. Matthias Uflacker"],
        nameLV: "Trends in Bioinformatics"
    },
    trendsInMiddlewareAndDistributedSystems: {
        kurz: "Trends Middleware,<br />Distributed Systems",
        kennung: [IST, OSIS, SAMT],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws15_16],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze"],
        nameLV: "Trends in Middleware & Distributed Systems (Forschungsseminar)"
    },
    toc1: {
        kurz: "TuK I",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss13, ss14, ss15],
        cp: 3,
        dozent: ["Prof. Dr. Hasso Plattner"],
        nameLV: "Trends and Concepts in the Software Industry I: Inner Mechanics of In-Memory Databases"
    },
    toc2: {
        kurz: "TuK II",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws13_14],
        cp: 3,
        dozent: ["Prof. Dr. Hasso Plattner"],
        nameLV: "Trends and Concepts in the Software Industry II: Development of Enterprise Software"
    },
    toc26LP: {
        kurz: "TuK II 6LP",
        kennung: [ITSE, BPET, HCT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ws14_15, ws15_16],
        cp: 6,
        dozent: ["Prof. Dr. Hasso Plattner"],
        nameLV: "Trends and Concepts in the Software Industry II: Development of Enterprise Software 6LP"
    },
    unternehmensarchitektur: {
        kurz: "IT-Unternehmens-<br />architektur",
        kennung: [ITSE, BPET, OSIS, SAMT],
        lehrform: ["Vorlesung"],
        modul: ["IT Engineering", "Vertiefungsgebiete"],
        semester: [ss14],
        cp: 3,
        dozent: ["Dr. Sabine Buckl", "Wolfgang Keller", "Prof. Dr. Robert Hirschfeld"],
        nameLV: "IT-Unternehmensarchitektur"
    },
    ueberzeugendPraesentieren: {
        kurz: "Überzeugend<br />präsentieren",
        kennung: [SSKKO],
        lehrform: ["Seminar"],
        modul: ["Softskills"],
        semester: [ss13, ss14, ws13_14, ws14_15, ss15, ws15_16],
        cp: 3,
        dozent: ["Dr. Werner Dieball"],
        nameLV: "Überzeugend präsentieren -<br />Noch besser auftreten!"
    },
    unternehmensgruendung: {
        kurz: "Unternehmens-<br />gründung",
        kennung: [SSKKO, SSKMA, SSKRE],
        lehrform: ["Vorlesung"],
        modul: ["Softskills"],
        semester: [ss13, ss14, ss15],
        cp: 6,
        dozent: ["Prof. Dr. Katharina Hölzle", "Dr. Jens Schmidt-Ehmcke"],
        nameLV: "Unternehmensgründung im IT-Sektor"
    },
    verlaesslichesysteme: {
        kurz: "Verlässliche<br />Systeme",
        kennung: [SAMT, OSIS],
        lehrform: ["Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ss14],
        cp: 3,
        dozent: ["Prof. Dr. Andreas Polze", "Daniel Richter", "Lena Herscheid"],
        nameLV: "Verlässliche konfigurierbare Systeme"
    },
    virtuelleMaschinen: {
        kurz: "Virtuelle<br />Maschinen",
        kennung: [OSIS, SAMT],
        lehrform: ["Projekt", "Seminar"],
        modul: ["Vertiefungsgebiete"],
        semester: [ws13_14, ws14_15],
        cp: 6,
        dozent: ["Prof. Dr. Robert Hirschfeld", "Tobias Pape", "Tim Felgentreff", "Bastian Steinert"],
        nameLV: "Virtuelle Maschinen und Ausführungsumgebungen"
    },
    visualSoftwareAnalytics: {
        kurz: "Visual Software<br />Analytics",
        kennung: [ITSE, HCT, SAMT],
        lehrform: ["Seminar"],
        modul: ["IT-Systems Engineering", "Vertiefungsgebiete"],
        semester: [ss15],
        cp: 6,
        dozent: ["Prof. Dr. Jürgen Döllner", "Willy Scheibel", "Sebastian Hahn"],
        nameLV: "Visual Software Analytics"
    }
}
