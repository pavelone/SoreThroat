'use strict';

/**
 * @ngdoc overview
 * @name throatApp
 * @description
 * # throatApp
 *
 * Main module of the application.
 */
var throatApp = angular
  .module('throatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formstamp',
    'ngGrid'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/demographics.html',
        controller: 'PatientCtrl'
      })
      .when('/chiefcompl', {
        templateUrl: 'views/chiefcompl.html',
        controller: 'ChiefComplCtrl'
      })
      .when('/demographics', {
        templateUrl: 'views/demographics.html',
        controller: 'PatientCtrl'
      })
      .when('/ruleout', {
        templateUrl: 'views/ruleout.html',
        controller: 'RuleOutCtrl'
      })
      .when('/hpi', {
        templateUrl: 'views/hpi.html',
        controller: 'HPICtrl'
      })
      .when('/fhandsh', {
        templateUrl: 'views/fhandsh.html',
        controller: 'FHAndSHCtrl'
      })
      .when('/currentmeds', {
        templateUrl: 'views/currentmeds.html',
        controller: 'CurrentMedsCtrl'
      })
      .when('/allergies', {
        templateUrl: 'views/allergies.html',
        controller: 'AllergiesCtrl'
      })
      .when('/differentialdiag', {
        templateUrl: 'views/differentialdiag.html',
        controller: 'DifferentialDiagCtrl'
      })
      .when('/physicalexam', {
        templateUrl: 'views/physicalexam.html',
        controller: 'PhysicalExamCtrl'
      })
      .when('/treatment', {
        templateUrl: 'views/treatment.html',
        controller: 'TreatmentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

throatApp.factory('Data', function () {

var patient = { demographics:
                  {employeeID: 12345,
                   firstName: "John",
                   lastName: "Dow",
                   //sex: {id: 'M', label: 'Male'},
                   sex: "Male",
                   dateOfBirth: new Date(),
                   //temporary for testing
                   age: 22,
                   guardian: "Someone",
                   streetAddress: "123 Happy Str.",
                   apartmentNumber: "8",
                   city: "Happy City",
                   state: "California",
                   zip: "90123",
                   phone: "123-123-1234",
                   email: "johndow@gmail.com"
                  },
                  chiefComplaint: ["Sore throat"],
                  emergentSymptoms: [],
                  emergentDiagnoses: [],
                  otherSymptoms: [],
                  HPI: { historyOfPresentIllness: [],
                         episodesPastYear: 0,
                         episodes2ndYear: 0,
                         episodes3rdYear: 0 },
                  familyHistory: [],
                  familyHistoryComments: "",
                  currentMeds: {currentMedicationChecks: [],
                  currentMedications: []},
                  allergies: {allergiesChecks: [],
                  allergies: []},
                  differentialDiagnosis: {
                    bacterialPharyngitisCauses: ['GABHS',
                                                 'Mycoplasma pneumonia (5% to 16% of cases of pharyngitis in children older than age 6)',
                                                 'Neisseria gonorrhoeae (ask about sexual history)',
                                                 'non-Group A streptococci (Group C and G)',
                                                 'Corynebacterium diphtheriae (hallmarked by the formation of a tightly adhering gray membrane that bleeds when dislodged)'],
                    otherBacterialPathogens: ['Staphylococcus aureus',
                                              'Haemophilus influenzae',
                                              'Moraxella catarrhalis',
                                              'Bacteroides fragilis',
                                              'Bacteroides oralis',
                                              'Bacteroides melaninogenicus',
                                              'Fusobacterium species',
                                              'Peptostreptococcus species',
                                              'Chlamydia trachomatis'],
                    viralCauses: ['Viral pharyngitis (Rhinovirus, nearly 20% of pharyngitis cases)',
                                 'Laryngitis',
                                 'Mononucleosis',
                                 'Upper Respiratory Infections'],
                    otherViralCauses : [
                                  'Epstein–Barr virus',
                                  'cytomegalovirus',
                                  'herpes simplex virus',
                                  'respiratory syncytial virus',
                                  'HIV',
                                  'parainfluenza',
                                  'influenza',
                                  'enterovirus',
                                  'coronavirus'],
                    other: []
                  },
                    vitals: {
                      weight: 0,
                      temperature: 0
                    },
                  centorScore: [],
                  testing: {rst: null},
                  pe : { provisionalDiagnosis: "",
                         diagnosisDescription: "",
                         symptomsObserved: [],
                         symptomsNotObserved: [] },
                  recommendations : { treatmentDecision: "",
                                       treatmentReason: "",
                                       cultureDecision: "",
                                       cultureReason: "" }
  };

function set(data) {
  patient = data;
}

function get() {
  return patient;
}

return {
set: set,
get: get
};
  
});
 