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
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.pageName = function () {
      switch ($location.path()) {
      case '/':
      case '/demographics':
        return "Demographics";
        break;
      case '/chiefcompl':
        return "Chief Complaint";
        break;
      case '/ruleout':
        return "Rule Out Clinical Emergencies";
        break;
      case '/hpi':
        return "History of Present Illness";
        break;
      case '/fhandsh':
        return "Family History and Social History";
        break;
      case '/currentmeds':
        return "Current Medications";
        break;
      case '/allergies':
        return "Allergies";
        break;
      case '/differentialdiag':
        return "Differential Diagnosis";
        break;
      case '/physicalexam':
        return "Physical Examination";
        break;
      case '/treatment':
        return "Treatment";
        break;
      case '/education':
        return "Aftercare Instructions";
        break;
      default:
        return "What a page!!!";
      }
    }  
}

throatApp.factory('Data', function () {

var patient = { demographics:
                  {employeeID: 12345,
                   firstName: "John",
                   lastName: "Dow",
                   //sex: {id: 'M', label: 'Male'},
                   sex: "Male",
                   dateOfBirth: new Date("July 21, 1983 01:15:00"),
                   //temporary for testing
                   age: 31,
                   guardian: "Someone",
                   streetAddress: "123 Happy Str.",
                   apartmentNumber: "8",
                   city: "Happy City",
                   state: "California",
                   zip: "90123",
                   phone: "123-123-1234",
                   email: "johndow@gmail.com"
                  },
                  chiefComplaint: [],
                  emergentSymptoms: [],
                  emergentDiagnoses: [],
                  otherSymptoms: [],
                  HPI: { historyOfPresentIllness: [],
                         episodesPastYear: 0,
                         episodes2ndYear: 0,
                         episodes3rdYear: 0 },
                  familyHistory: [],
                  //not saved, maybe need to fix
                  familyHistoryComments: "",
                  currentMeds: {currentMedicationChecks: [],
                  currentMedications: []},
                  allergies: {allergiesChecks: [],
                  allergies: []},
                  differentialDiagnosis: {
                    bacterialPharyngitisCauses: [{diag: 'GABHS', edu: 'http://www.niaid.nih.gov/topics/strep/Pages/Default.aspx'},
                                                {diag: 'Mycoplasma pneumonia (5% to 16% of cases of pharyngitis in children older than age 6)', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/000082.htm'},
                                                {diag: 'Neisseria gonorrhoeae (ask about sexual history)', edu: 'http://www.nlm.nih.gov/medlineplus/gonorrhea.html'},
                                                {diag: 'non-Group A streptococci (Group C and G)', edu: 'http://google.com'},
                                                {diag: 'Corynebacterium diphtheriae (hallmarked by the formation of a tightly adhering gray membrane that bleeds when dislodged)', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/001608.htm'}],
                    otherBacterialPathogens: [{diag: 'Staphylococcus aureus', edu: 'http://google.com'},
                                              {diag: 'Haemophilus influenzae', edu: 'http://google.com'},
                                              {diag: 'Moraxella catarrhalis', edu: 'http://google.com'},
                                              {diag: 'Bacteroides fragilis', edu: 'http://google.com'},
                                              {diag: 'Bacteroides oralis', edu: 'http://google.com'},
                                              {diag: 'Bacteroides melaninogenicus', edu: 'http://google.com'},
                                              {diag: 'Fusobacterium species', edu: 'http://google.com'},
                                              {diag: 'Peptostreptococcus species', edu: 'http://google.com'},
                                              {diag: 'Chlamydia trachomatis', edu: 'http://google.com'}],
                    viralCauses: [{diag: 'Viral pharyngitis (Rhinovirus, nearly 20% of pharyngitis cases or Adenovirus)', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/001392.htm'},
                                  {diag: 'Laryngitis', edu: 'http://google.com'},
                                  {diag: 'Mononucleosis', edu: 'http://www.nlm.nih.gov/medlineplus/infectiousmononucleosis.html'},
                                  {diag: 'Upper Respiratory Infections', edu: 'http://google.com'}],
                    otherViralCauses : [
                                  {diag: 'Epstein–Barr virus', edu: 'http://google.com'},
                                  {diag: 'cytomegalovirus', edu: 'http://google.com'},
                                  {diag: 'herpes simplex virus', edu: 'http://google.com'},
                                  {diag: 'respiratory syncytial virus', edu: 'http://google.com'},
                                  {diag: 'HIV', edu: 'http://google.com'},
                                  {diag: 'parainfluenza', edu: 'http://google.com'},
                                  {diag: 'influenza', edu: 'http://google.com'},
                                  {diag: 'enterovirus', edu: 'http://google.com'},
                                  {diag: 'coronavirus', edu: 'http://google.com'}],
                    other: []
                  },
                    vitals: {
                      weight: 0,
                      temperature: 0
                    },
                  centorScore: [],
                  testing: {rst: null},
                  //temporary for testing
                  pe : { provisionalDiagnosis: "",
                         diagnosisDescription: "",
                         symptomsObserved: [],
                         symptomsNotObserved: [] },
                  recommendations : { treatmentDecision: "",
                                       treatmentReason: "",
                                       cultureDecision: "",
                                       cultureReason: "" },
                  treatment : { workingDiagnosis : [],
                                labTests: [],
                                firstLine: [],
                                secondLine: [],
                                systemicTherapy: [],
                                topicalTherapy: [],
                                corticosteroids: []},
                  aftercare: { notes: "",
                               workingDiagnosis : [],
                               labTests: [],
                               firstLine: [],
                               secondLine: [],
                               systemicTherapy: [],
                               topicalTherapy: [],
                               corticosteroids: [] }
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
 