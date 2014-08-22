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
        templateUrl: '/demographics.html',
        controller: 'PatientCtrl'
      })
      .when('/chiefcompl', {
        templateUrl: '/chiefcompl.html',
        controller: 'ChiefComplCtrl'
      })
      .when('/demographics', {
        templateUrl: '/demographics.html',
        controller: 'PatientCtrl'
      })
      .when('/ruleout', {
        templateUrl: '/ruleout.html',
        controller: 'RuleOutCtrl'
      })
      .when('/hpi', {
        templateUrl: '/hpi.html',
        controller: 'HPICtrl'
      })
      .when('/fhandsh', {
        templateUrl: '/fhandsh.html',
        controller: 'FHAndSHCtrl'
      })
      .when('/currentmeds', {
        templateUrl: '/currentmeds.html',
        controller: 'CurrentMedsCtrl'
      })
      .when('/allergies', {
        templateUrl: '/allergies.html',
        controller: 'AllergiesCtrl'
      })
      .when('/differentialdiag', {
        templateUrl: '/differentialdiag.html',
        controller: 'DifferentialDiagCtrl'
      })
      .when('/physicalexam', {
        templateUrl: '/physicalexam.html',
        controller: 'PhysicalExamCtrl'
      })
      .when('/treatment', {
        templateUrl: '/treatment.html',
        controller: 'TreatmentCtrl'
      })
      .when('/education', {
        templateUrl: '/education.html',
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
 
'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:AllergiesCtrl
 * @description
 * # AllergiesCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('AllergiesCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];

  this.allergies = Data.get().allergies;
  $scope.allergies = this.allergies.allergies;

  var dateToday = new Date;

  var dateYesterday = new Date();
  dateYesterday.setDate(dateYesterday.getDate() - 1);

  $scope.allergiesCheckList = [
  'No known allergies',
  'Patient has multiple antibiotic allergies or intolerance'
  ];

this.gridOptions = { 
	data: 'allergies',
	enableRowSelection: true,
	columnDefs: [{field: 'substance', displayName: 'Substance', enableCellEdit: true}, 
		 {field:'criticality', displayName:'Criticality', enableCellEdit: true},
		 {field:'reaction', displayName:'Reaction', enableCellEdit: true},
		 {field:'timestamp', displayName:'Timestamp', enableCellEdit: true}]
};

//TODO: move it somewhere to access from both meds and allergies
function dateToShow(d) {

	var month = d.getMonth()+1;
  	var day = d.getDate();

  	return d.getFullYear() + '/' +
    	(month<10 ? '0' : '') + month + '/' +
    	(day<10 ? '0' : '') + day;
}

function timeToShow(t) {
	return ("0" + t.getHours()).slice(-2)   + ":" + 
		("0" + t.getMinutes()).slice(-2) + ":" + 
		("0" + t.getSeconds()).slice(-2);
}

this.loadAllergies = function() {
  $scope.allergies = [{substance: "Amoxicillin", criticality: "medium", reaction: "rash",
	timestamp: dateToShow(dateToday)+" "+timeToShow(dateToday), comments: "source: patient"}];

	this.allergies.allergies = $scope.allergies;
	this.allergies.allergiesChecks = [];
}

});

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:ChiefComplCtrl
 * @description
 * # ChiefComplCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('ChiefComplCtrl', function ($scope, Data) {

	this.demographics = Data.get().demographics;

	this.chiefComplaint = Data.get().chiefComplaint;

  $scope.ccs = [
  'Ear pain',
  'Red eye and other eye complaints',
  'Sore throat',
  'Sinusitis',
  'Cough and Upper Respiratory Tract Infections',
  'Disuria and Urinary Complaints',
  'Rashes',
  'Fever',
  'Other' ];

  });

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:CurrentMedsCtrl
 * @description
 * # CurrentMedsCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('CurrentMedsCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];

  this.currentMeds = Data.get().currentMeds;
  $scope.currentMedications = this.currentMeds.currentMedications;

  var dateToday = new Date;

  var dateYesterday = new Date();
  dateYesterday.setDate(dateYesterday.getDate() - 1);

  $scope.currentMedicationCheckList = [
  'No known current medicaitons',
  'Patient takes antibiotics currently'
  ];

this.gridOptions = { 
	data: 'currentMedications',
	enableRowSelection: true,
	columnDefs: [{field: 'medication', displayName: 'Medication', enableCellEdit: true}, 
		 {field:'route', displayName:'Route', enableCellEdit: true},
		 {field:'dosage', displayName:'Dosage', enableCellEdit: true},
		 {field:'frequency', displayName:'Frequency', enableCellEdit: true},
		 {field:'lastgiven', displayName:'Last Given', enableCellEdit: true},
		 {field:'timestamp', displayName:'Timestamp', enableCellEdit: true}]
};

function dateToShow(d) {

	var month = d.getMonth()+1;
  	var day = d.getDate();

  	return d.getFullYear() + '/' +
    	(month<10 ? '0' : '') + month + '/' +
    	(day<10 ? '0' : '') + day;
}

function timeToShow(t) {
	return ("0" + t.getHours()).slice(-2)   + ":" + 
		("0" + t.getMinutes()).slice(-2) + ":" + 
		("0" + t.getSeconds()).slice(-2);
}

this.loadCurrentMeds = function() {
  $scope.currentMedications = [{medication: "Advil (Ibuprofen)", route: "Oral", dosage: "200mg",
	frequency: "once", lastgiven: dateToShow(dateToday),
	timestamp: dateToShow(dateToday)+" "+timeToShow(dateToday), comments: "source: patient"},
	   {medication: "Fortamet (Ibuprofen)", route: "Oral", dosage: "1000mg",
	frequency: "qhs (every day at bedtime)", lastgiven: dateToShow(dateYesterday),
	timestamp: dateToShow(dateToday)+" "+timeToShow(dateToday), comments: "with evening meal"}];

	this.currentMeds.currentMedications = $scope.currentMedications;
	//this.currentMeds.currentMedicationChecks = ["Patient takes antibiotics currently"];
}

});

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:PatientCtrl
 * @description
 * # PatientCtrl
 * Controller of the throatApp
 */


angular.module('throatApp')
  .controller('PatientCtrl', function ($scope, Data) {

	this.demographics = Data.get().demographics;
	this.chiefComplaint = Data.get().chiefComplaint;
	this.allergies = Data.get().allergies;
	this.vitals = Data.get().vitals;

	$scope.sex = ['Male','Female'];

  	//$scope.sex = ['Male','Female'];

	  $scope.states = [
	    'California',
	    'Nevada',
	    'Arizona',
	    'Colorado',
	    'Texas'];

	$scope.calcAge = function() {

	    var today = new Date();
	    var birthDate = new Date(Data.get().demographics.dateOfBirth);

		Data.get().demographics.age = Math.round((today - birthDate)/(1000*60*60*24*365));
	}
  
  });

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:DifferentialDiagCtrl
 * @description
 * # DifferentialDiagCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('DifferentialDiagCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];

  this.emergentDiagnoses = Data.get().emergentDiagnoses;
  this.differentialDiagnosis = Data.get().differentialDiagnosis;

  this.showOther = false;
  this.buttonLabel = "Show Other";

  $scope.emergentDiagnosesList = [
  {diag: 'Epiglottitis', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/000605.htm'},
  {diag: 'Peritonsillar abscess', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/000986.htm'},
  {diag: 'Retropharyngeal abscess', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/000984.htm'},
  {diag: 'none of the above', edu: 'http://google.com'}
  ];

  $scope.bacterialPharyngitisCausesList = [
  {diag: 'GABHS', edu: 'http://www.niaid.nih.gov/topics/strep/Pages/Default.aspx'},
  {diag: 'Mycoplasma pneumonia (5% to 16% of cases of pharyngitis in children older than age 6)', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/000082.htm'},
  {diag: 'Neisseria gonorrhoeae (ask about sexual history)', edu: 'http://www.nlm.nih.gov/medlineplus/gonorrhea.html'},
  {diag: 'non-Group A streptococci (Group C and G)', edu: 'http://google.com'},
  {diag: 'Corynebacterium diphtheriae (hallmarked by the formation of a tightly adhering gray membrane that bleeds when dislodged)', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/001608.htm'},
  {diag: 'none of the above', edu: 'http://google.com'}
  ];

  $scope.otherBacterialPathogensList = [
  {diag: 'Staphylococcus aureus', edu: 'http://google.com'},
  {diag: 'Haemophilus influenzae', edu: 'http://google.com'},
  {diag: 'Moraxella catarrhalis', edu: 'http://google.com'},
  {diag: 'Bacteroides fragilis', edu: 'http://google.com'},
  {diag: 'Bacteroides oralis', edu: 'http://google.com'},
  {diag: 'Bacteroides melaninogenicus', edu: 'http://google.com'},
  {diag: 'Fusobacterium species', edu: 'http://google.com'},
  {diag: 'Peptostreptococcus species', edu: 'http://google.com'},
  {diag: 'Chlamydia trachomatis', edu: 'http://google.com'},
  {diag: 'none of the above', edu: 'http://google.com'}
  ];

  $scope.viralCausesList = [
  {diag: 'Viral pharyngitis (Rhinovirus, nearly 20% of pharyngitis cases or Adenovirus)', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/001392.htm'},
  {diag: 'Laryngitis', edu: 'http://google.com'},
  {diag: 'Mononucleosis', edu: 'http://www.nlm.nih.gov/medlineplus/infectiousmononucleosis.html'},
  {diag: 'Upper Respiratory Infections', edu: 'http://google.com'},
  {diag: 'none of the above', edu: 'http://google.com'}
  ];

  $scope.otherViralCausesList = [
  {diag: 'Epstein–Barr virus', edu: 'http://google.com'},
  {diag: 'cytomegalovirus', edu: 'http://google.com'},
  {diag: 'herpes simplex virus', edu: 'http://google.com'},
  {diag: 'respiratory syncytial virus', edu: 'http://google.com'},
  {diag: 'HIV', edu: 'http://google.com'},
  {diag: 'parainfluenza', edu: 'http://google.com'},
  {diag: 'influenza', edu: 'http://google.com'},
  {diag: 'enterovirus', edu: 'http://google.com'},
  {diag: 'coronavirus', edu: 'http://google.com'},
  {diag: 'none of the above', edu: 'http://google.com'}
  ];


  this.toggleOther = function() {
    this.showOther = !this.showOther;
    if (this.showOther){
      this.buttonLabel = "Hide Other";
    } else {
      this.buttonLabel = "Show Other";
    }
  }

});

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('EducationCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];
  this.currentMeds =  Data.get().currentMeds;
  this.vitals = Data.get().vitals;
  this.testing = Data.get().testing;
  this.centorScore = Data.get().centorScore;
  this.pe = Data.get().pe;
  this.recommendations = Data.get().recommendations;
  this.treatment = Data.get().treatment;
  $scope.aftercare = Data.get().aftercare;

  $scope.diffDiagnosisList = [
    {item:'Bacterial Pharyngitis (GABHS)', edu:'http://google.com'},
    {item:'Viral Pharyngitis', edu:'http://google.com'},
    {item:'Laryngitis', edu:'http://google.com'},
    {item:'Mononucleosis', edu:'http://google.com'},
    {item:'Upper Respiratory Infections', edu:'http://google.com'}];

  $scope.labTestList = [
    {item:'Throat culture', edu:'http://google.com'},
    {item:'Monospot test (for Mononucleosis)', edu:'http://google.com'}];

  if (this.demographics.age < 15) {
  	  //children
	  $scope.firstLineList = [
	  {item:'Oral penicillin V 2 to 50 mg/kg/d four times a day for 10 days', edu:'http://google.com'},
	  {item:'Amoxicillin dosing is 40 mg/kg/d three times a day for 10 days', edu:'http://google.com'},
	  {item:'Intramuscular penicillin G', edu:'http://google.com'},
	  {item:'Bicillin', edu:'http://google.com'}];

	  $scope.secondLineList = [
	  {item:'Augmentin 40 mg/kg/d two to three times daily for 10 days', edu:'http://google.com'},
	  {item:'Erythromycin 40 mg/kg/d two to four times daily for 10 days', edu:'http://google.com'},
	  {item:'Azithromycin 12 mg/kg every day for 5 days or 20 mg/kg every day for 3 days', edu:'http://google.com'},
	  {item:'Cephalexin 25 to 50 mg/kg/d two to four times daily for 10 days', edu:'http://google.com'}];

	  $scope.systemicTherapyList = [
	  {item:'Ibuprofen 10 mg/kg ', edu:'http://google.com'},
	  {item:'Acetaminophen 10-15 mg/kg PO q4-6h prn', edu:'http://google.com'},
	  {item:'Avoid aspirin and salicylates', edu:'http://google.com'}];

	} else {
	  //adults
	  $scope.firstLineList = [
	  {item:'Oral penicillin V 500 mg two to three times daily for 10 days', edu:'http://google.com'},
	  {item:'Amoxicillin 500 mg three times a day for 10 days', edu:'http://google.com'},
	  {item:'Intramuscular penicillin G', edu:'http://google.com'},
	  {item:'Bicillin', edu:'http://google.com'}];

	  $scope.secondLineList = [
	  {item:'Augmentin 500 to 875 mg twice a day for 10 days', edu:'http://google.com'},
	  {item:'Erythromycin 400 mg four times a day for 10 days', edu:'http://google.com'},
	  {item:'Azithromycin 500 mg on day 1 then 250 mg on days 2 to 5', edu:'http://google.com'},
	  {item:'Cephalexin 500 mg twice a day for 10 days', edu:'http://google.com'}];

	  $scope.systemicTherapyList = [
	  {item:'Ibuprofen 400 mg', edu:'http://google.com'},
	  {item:'Acetaminophen 1,000 mg', edu:'http://google.com'}];
	}

	$scope.topicalTherapyList = [
	  {item:'Lozenges', edu:'http://google.com'},
	  {item:'Sprays', edu:'http://google.com'},
	  {item:'Gargles', edu:'http://google.com'},
	  {item:'Gargling with salt water', edu:'http://google.com'},
	  {item:'Lozenges with analgesics', edu:'http://google.com'},
	  {item:'Lozenges with ambroxol', edu:'http://google.com'},
	  {item:'Lozenges with lidocaine', edu:'http://google.com'},
	  {item:'Lozenges with menthol', edu:'http://google.com'},
	  {item:'Lozenges with benzocaine', edu:'http://google.com'},
	  {item:'Throat sprays', edu:'http://google.com'}
    ];

    $scope.corticosteroidsList = [
	  {item:'dexamethasone at 0.6 mg/kg (max dose 10 mg in children) for severe cases of pain or difficulty swallowing', edu:'http://google.com'},
	  {item:'Dexamethasone 10 mg IM for severe cases of pain or difficulty swallowing', edu:'http://google.com'},
	  {item:'β-methasone 8 mg IM for severe cases of pain or difficulty swallowing', edu:'http://google.com'},
	  {item:'Prednisone 60 mg oral for severe cases of pain or difficulty swallowing', edu:'http://google.com'}
    ];

    $scope.diffDiagnosisList = $scope.diffDiagnosisList.filter(isPrescribed, this.treatment.workingDiagnosis);
    $scope.labTestList = $scope.labTestList.filter(isPrescribed, this.treatment.labTests);
    $scope.firstLineList = $scope.firstLineList.filter(isPrescribed, this.treatment.firstLine);
    $scope.secondLineList = $scope.secondLineList.filter(isPrescribed, this.treatment.secondLine);
    $scope.systemicTherapyList = $scope.systemicTherapyList.filter(isPrescribed, this.treatment.systemicTherapy);
    $scope.topicalTherapyList = $scope.topicalTherapyList.filter(isPrescribed, this.treatment.topicalTherapy);
    $scope.corticosteroidsList = $scope.corticosteroidsList.filter(isPrescribed, this.treatment.corticosteroids);

  if (($.inArray("Bacterial Pharyngitis (GABHS)", this.treatment.workingDiagnosis) != -1)){
    $scope.aftercare.notes =  "Aftercare instructions for Bacterial Pharyngitis (GABHS)\n\n";

    $scope.aftercare.notes += "There are several strategies you should utilize in order to prevent the further spread of infections, including using tissues to sneeze or cough, washing hands frequently while the infection is active, and not sharing glasses, utensils, or toothbrushes\n\n";
    $scope.aftercare.notes += "Increase fluids and rest while they are feeling badly. \n\n";

	$scope.aftercare.notes += "You are considered contagious until you have been on antibiotics for 24 hours. \n\n";
	$scope.aftercare.notes += "Toothbrushes should either be sterilized or replaced after you are no longer contagious to decrease risk of reinfection. \n\n";
	$scope.aftercare.notes += "You should see clinical improvement within 3 to 5 days after starting antibiotics or spontaneous resolution by day 5. If you fail to improve despite antibiotic use, get back to the clinic, your primary care provider or urgent care.";
  }
  else {
    $scope.aftercare.notes =  "Aftercare instructions for "+this.treatment.workingDiagnosis[0]+"\n\n";

    $scope.aftercare.notes += "There are several strategies you should utilize in order to prevent the further spread of infections, including using tissues to sneeze or cough, washing hands frequently while the infection is active, and not sharing glasses, utensils, or toothbrushes\n\n";
    $scope.aftercare.notes += "Increase fluids and rest while they are feeling badly. \n\n";

  	$scope.aftercare.notes += "You should see clinical improvement within 3 to 5 days or spontaneous resolution by day 5. If you fail to improve, get back to the clinic, your primary care provider or urgent care.\n\n";
  }

  function isPrescribed (element){
  	return ($.inArray(element.item, this) != -1);
  }

});

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:FHAndSHCtrl
 * @description
 * # FHAndSHCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('FHAndSHCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];

  this.familyHistory = Data.get().familyHistory;
  this.familyHistoryComments = Data.get().familyHistoryComments;
  
  $scope.familyHistoryList = [
  'lives with children',
  'family members or close contacts who were recently diagnosed with GABHS'
  ];

});

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:HPICtrl
 * @description
 * # HPICtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('HPICtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];
  
  this.emergentSymptoms = Data.get().emergentSymptoms;
  this.emergentDiagnoses = Data.get().emergentDiagnoses;
  this.otherSymptoms = Data.get().otherSymptoms;

  this.HPI = Data.get().HPI;

  
//Question: how should I handle single checkboxes with Formstamp

  
  //this.historyOfPresentIllness =  ['Recurrent strep'];

  $scope.historyOfPresentIllnessList = [
  'History of Rheumatic Heart Disease',
  'History of Peritonsillar Abscess',
  'Recurrent strep'
  ];

  this.isRecurrentStrep = function() {
    if ( $.inArray( "Recurrent strep", this.HPI.historyOfPresentIllness ) == -1 ) {
      return false;
    }
    else {
      return true;
    }
  }

  this.loadCDA = function() {
    this.HPI.historyOfPresentIllness = ["Recurrent strep"];
    this.HPI.episodesPastYear = 2;
    this.HPI.episodes2ndYear = 1;
    this.HPI.episodes3rdYear = 1;
  }

});

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:PhysicalExamCtrl
 * @description
 * # PhysicalExamCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('PhysicalExamCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];
  this.currentMeds =  Data.get().currentMeds;
  this.familyHistory = Data.get().familyHistory;
  this.HPI = Data.get().HPI;

  this.vitals = Data.get().vitals;
  this.testing = Data.get().testing;
  this.centorScore = Data.get().centorScore;
  this.pe = Data.get().pe;
  this.recommendations = Data.get().recommendations;

  $scope.centorScoreList = [
  'Tonsillar exudates',
  'Cervical adenopathy',
  'Presence of a fever (T > 38°C, 100.4°F)',
  'Absence of a cough'
  ];

  $scope.diffDiagnosisList = [
    'Bacterial Pharyngitis (GABHS)',
    'Viral Pharyngitis',
    'Laryngitis',
    'Mononucleosis',
    'Upper Respiratory Infections'];

  $scope.typicalSymptomsList = [];
  $scope.notTypicalSymptomsList = [];  

  $scope.rstList = ['Positive', 'Negative', 'Do not perform'];

  this.checkRSTNecessity = function() {
    var checkRSTDisabled = false;
    var checkRSTDecision = "";
    var checkRSTReason = "";

    //disable RST if patient takes antibiotics currently
    if ($.inArray("Patient takes antibiotics currently", this.currentMeds.currentMedicationChecks) != -1) {
      this.testing.rst = "Do not perform";
      checkRSTDisabled = true;
      checkRSTDecision = "Do not perform RST. ";
      checkRSTReason = "Patient is taking antibiotics, this may result in a false negative. ";
    } else {
      if (this.demographics.age < 15) {
        checkRSTDecision = "Perform RST. ";
        checkRSTReason = "It should be used as a first-line diagnostic test in all pediatric patients. ";
      }
      if ((this.demographics.age >= 15) && (this.centorScore.length > 1)){
        checkRSTDecision = "Perform RST. ";
        checkRSTReason = "A score of 2 or more is suggestive of a GABHS infection and should have an RST performed. ";
      }
    }

    return { rstDecision: checkRSTDecision, rstReason: checkRSTReason, rstDisabled: checkRSTDisabled};
  }

  this.updateCentorScore = function() {
    if (this.vitals.temperature > 100.4)
      if ($.inArray("Presence of a fever (T > 38°C, 100.4°F)", this.centorScore) == -1) {
        this.centorScore.push("Presence of a fever (T > 38°C, 100.4°F)");
      }
    if (this.vitals.temperature <= 100.4)
      if ($.inArray("Presence of a fever (T > 38°C, 100.4°F)", this.centorScore) != -1) {
        var index = $.inArray("Presence of a fever (T > 38°C, 100.4°F)", this.centorScore);
        this.centorScore.splice(index, 1);
      }
  }

  this.checkCulture = function() {
    var cultDecision = "";
    var cultReason = "";

    if ((this.testing.rst == 'Negative') && (this.demographics.age < 15)) {
      cultDecision = "Perform a throat culture.";
      cultReason = "Pediatric patient.";
    }
    if ((this.testing.rst == 'Negative') && (this.demographics.age > 15) 
      && (this.centorScore.length >= 2)) {      
      cultDecision = "Perform a throat culture.";
      cultReason = "Adult patient with Centor Score > 2. ";
    }
    if ((this.testing.rst == 'Negative') && (this.demographics.age > 15) 
      && ($.inArray("lives with children", this.familyHistory) != -1)) {
      if (cultDecision == "") {
        cultDecision = "Perform a throat culture.";
      }
      cultReason += "Patient lives with children. ";
    }
    if ((this.testing.rst == 'Negative') && (this.demographics.age > 15) 
      && ($.inArray("History of Rheumatic Heart Disease", this.HPI.historyOfPresentIllness) != -1)){
      if (cultDecision == "") {
        cultDecision = "Perform a throat culture.";
      }
      cultReason += "Patient has a personal history of rheumatic heart disease. ";
    }

    if ((cultDecision == "") && (this.testing.rst != null)) {
      cultReason = "Per documentation no indication to perform a throat culture. ";
    }

    return { cultureDecision: cultDecision, cultureReason: cultReason};
  }

  this.checkTreatment = function() {
    var txDecision = "";
    var txReason = "";

    //empirical treatment - do we need this?
    if ($.inArray("family members or close contacts who were recently diagnosed with GABHS", this.familyHistory) != -1) {
      txDecision = "You can empirically treat a symptomatic patient for GABHS. ";
      txReason = "Patient family members or close contacts were recently diagnosed with GABHS. ";
    }
    if (this.centorScore.length == 4) {
      if (txDecision == "") {
        txDecision = "You can empirically treat a symptomatic patient for GABHS. ";
      }
      txReason += "High clinical probability of GABHS (all four Centor criteria). ";
    }
    if ($.inArray("History of Rheumatic Heart Disease", this.HPI.historyOfPresentIllness) != -1) {
      if (txDecision == "") {
        txDecision = "You can empirically treat a symptomatic patient for GABHS. ";
      }
      txReason += "Patient has a personal history of rheumatic heart disease. ";
    }

    if (this.testing.rst == 'Positive') {
      txDecision = "Treat the patient for GABHS. ";
      txReason = "Positive RST result. ";
    }

    if ((txDecision == "") && (this.testing.rst != null)) {
      txReason = "Per documentation no indication to perform GABHS treatment. ";
    }
    
    return { treatmentDecision: txDecision, treatmentReason: txReason};
  }

  this.loadSymptoms = function() {
    switch (this.pe.provisionalDiagnosis) {
      case 'Bacterial Pharyngitis (GABHS)':
        $scope.typicalSymptomsList = ["sore throat",
                                      "abrupt onset of fever",
                                      "headache",
                                      "abdominal pain",
                                      "nausea",
                                      "vomiting",
                                      "enlarged tender anterior cervical lymph nodes",
                                      "erythematous uvula with tonsillar exudate",
                                      "skin rash (scarlatiniform rash)"];
        $scope.notTypicalSymptomsList = ["cough",
                                        "significant rhinorrhea"];  
        this.pe.diagnosisDescription = "GABHS accounts for 15% to 30% of all cases of pharyngitis in children between the ages of 5 and 15 and up to 30% in adults. The incidence peaks in the winter and early spring because of favorable transmission conditions";
        break;
      case 'Viral Pharyngitis':
        $scope.typicalSymptomsList = ["sore throat"];
        $scope.notTypicalSymptomsList = [];  
        this.pe.diagnosisDescription = "Rhinovirus is responsible for nearly 20% of pharyngitis cases.";
        break;
      case 'Laryngitis':
        $scope.typicalSymptomsList = ["hoarseness"];
        $scope.notTypicalSymptomsList = [];  
        this.pe.diagnosisDescription = "Laryngitis is caused by swelling and inflammation of the larynx (voice box). It is most common in individuals aged 18 to 40 years.";
        break;
      case 'Mononucleosis':
        $scope.typicalSymptomsList = ["sore throat",
                                      "fever",
                                      "swollen lymph nodes",
                                      "fatigue",
                                      "general malaise"];
        $scope.notTypicalSymptomsList = [];  
        this.pe.diagnosisDescription = "Mononucleosis (“mono”) is a viral infection most commonly caused by the Epstein–Barr virus and affects all age groups, although it is more prevalent in those aged 15 to 17 years";
        break;
      case 'Upper Respiratory Infections':
        $scope.typicalSymptomsList = ["fever",
                                      "increased nasal drainage",
                                      "cough",
                                      "sore throat",
                                      "swelling"];
        $scope.notTypicalSymptomsList = [];  
        this.pe.diagnosisDescription = "";
        break;
      default:
        $scope.typicalSymptomsList = [];
        $scope.notTypicalSymptomsList = [];  
        this.pe.diagnosisDescription = "";
        break;
    }
  }

  this.updateRecommendations = function() {
    this.recommendations.cultureDecision = this.checkCulture().cultureDecision;
    this.recommendations.cultureReason = this.checkCulture().cultureReason
    this.recommendations.treatmentDecision = this.checkTreatment().treatmentDecision;
    this.recommendations.treatmentReason = this.checkTreatment().treatmentReason;
    console.log(this.recommendations);
  }

  
});

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:RuleOutCtrl
 * @description
 * # RuleOutCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('RuleOutCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];
  
  this.emergentSymptoms = Data.get().emergentSymptoms;
  this.emergentDiagnoses = Data.get().emergentDiagnoses;
  this.otherSymptoms = Data.get().otherSymptoms;
  
  $scope.emergentSymptomsList = [
  {diag: 'labored breathing'},
  {diag: 'inability to swallow or obvious drooling'},
  {diag: 'swelling of the face or neck'},
  {diag: 'inability to open the mouth'},
  {diag: 'severe pain'},
  {diag: 'asymmetrical swelling of the soft palate'},
  {diag: 'unilateral swelling of the pharynx or tonsils'},
  {diag: 'deviation of the uvula'},
  {diag: 'none of the above'}
  ];

  $scope.emergentDiagnosesList = [
  {diag: 'Epiglottitis', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/000605.htm'},
  {diag: 'Peritonsillar abscess', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/000986.htm'},
  {diag: 'Retropharyngeal abscess', edu: 'http://www.nlm.nih.gov/medlineplus/ency/article/000984.htm'},
  {diag: 'none of the above', edu: 'http://google.com'}
  ];

  $scope.otherSymptomsList = [
  {diag: 'dehydrated patient'},
  {diag: 'septic patient'},
  {diag: 'none of the above'}
  ];

  this.classRuleOut = "btn btn-lg btn-info";
  this.classReferToER = "btn btn-lg btn-info";
  this.classCall911 = "btn btn-lg btn-info";
  
  $scope.thisPatient = this;

  function countGoodAndBad(whereArr, countValues) {
    switch (whereArr.length) {
      case 0: break;
      case 1: if (whereArr[0].diag == "none of the above") {
        countValues['good']++;
      } else {
        countValues['bad']++;
      }
      break;
      default: countValues['bad']++;
    }
  }

  $scope.canRuleOut = function() {
    var countValues = {'good':0, 'bad':0}; 
    
    countGoodAndBad($scope.thisPatient.emergentSymptoms, countValues);
    countGoodAndBad($scope.thisPatient.emergentDiagnoses, countValues);
    countGoodAndBad($scope.thisPatient.otherSymptoms, countValues);

    if (countValues['bad'] > 0){
      return 'refer';
    } else if (countValues['good'] == 3) {
      return 'ruleout';
    } else {
      return 'none';
    }
  }

  function ruleOut () {
  switch($scope.canRuleOut()) {
    case 'none':
        $scope.thisPatient.classRuleOut = "btn btn-lg btn-info";
        $scope.thisPatient.classReferToER = "btn btn-lg btn-info";
        $scope.thisPatient.classCall911 = "btn btn-lg btn-info";
        break;
    case 'ruleout':
        $scope.thisPatient.classRuleOut = "btn btn-lg btn-success";
        $scope.thisPatient.classReferToER = "btn btn-lg btn-info";
        $scope.thisPatient.classCall911 = "btn btn-lg btn-info";
        break;
    default:
        $scope.thisPatient.classRuleOut = "btn btn-lg btn-info";
        $scope.thisPatient.classReferToER = "btn btn-lg btn-warning";
        $scope.thisPatient.classCall911 = "btn btn-lg btn-danger";
  }
 }

  $scope.$watch($scope.canRuleOut, ruleOut);
  

  });

'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:TreatmentCtrl
 * @description
 * # TreatmentCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('TreatmentCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];
  this.currentMeds =  Data.get().currentMeds;
  this.vitals = Data.get().vitals;
  this.testing = Data.get().testing;
  this.centorScore = Data.get().centorScore;
  this.pe = Data.get().pe;
  this.recommendations = Data.get().recommendations;
  this.treatment = Data.get().treatment;

  $scope.diffDiagnosisList = [
    'Bacterial Pharyngitis (GABHS)',
    'Viral Pharyngitis',
    'Laryngitis',
    'Mononucleosis',
    'Upper Respiratory Infections'];

  $scope.labTestList = [
    'Throat culture',
    'Monospot test (for Mononucleosis)'];

  if (this.demographics.age < 15) {
  	  //children
	  $scope.firstLineList = [
	  'Oral penicillin V 2 to 50 mg/kg/d four times a day for 10 days',
	  'Amoxicillin dosing is 40 mg/kg/d three times a day for 10 days',
	  'Intramuscular penicillin G',
	  'Bicillin'];

	  $scope.secondLineList = [
	  'Augmentin 40 mg/kg/d two to three times daily for 10 days',
	  'Erythromycin 40 mg/kg/d two to four times daily for 10 days',
	  'Azithromycin 12 mg/kg every day for 5 days or 20 mg/kg every day for 3 days',
	  'Cephalexin 25 to 50 mg/kg/d two to four times daily for 10 days'];

	  $scope.systemicTherapyList = [
	  'Ibuprofen 10 mg/kg ',
	  'Acetaminophen 10-15 mg/kg PO q4-6h prn',
	  'Avoid aspirin and salicylates'];

	  this.allergyWarning = "Amoxicillin dosing is 40 mg/kg/d three times a day for 10 days; Amoxicillin 40 mg/kg/d contains Amoxicillin Trihydrate, which is closely related to the ingredient Amoxicillin. This patient's profile indicates Amoxicillin as an allergen. Amoxicillin 40 mg/kg/d poses the risk of causing an ingredient-based allergic reaction in this patient.";

	} else {
	  //adults
	  $scope.firstLineList = [
	  'Oral penicillin V 500 mg two to three times daily for 10 days',
	  'Amoxicillin 500 mg three times a day for 10 days',
	  'Intramuscular penicillin G',
	  'Bicillin'];

	  $scope.secondLineList = [
	  'Augmentin 500 to 875 mg twice a day for 10 days',
	  'Erythromycin 400 mg four times a day for 10 days',
	  'Azithromycin 500 mg on day 1 then 250 mg on days 2 to 5',
	  'Cephalexin 500 mg twice a day for 10 days'];

	  $scope.systemicTherapyList = [
	  'Ibuprofen 400 mg',
	  'Acetaminophen 1,000 mg'];

	  this.allergyWarning = "Amoxicillin 500 mg three times a day for 10 days; Amoxicillin 500 mg contains Amoxicillin Trihydrate, which is closely related to the ingredient Amoxicillin. This patient's profile indicates Amoxicillin as an allergen. Amoxicillin 500 mg poses the risk of causing an ingredient-based allergic reaction in this patient.";
	}

	$scope.topicalTherapyList = [
	  'Lozenges', 'Sprays', 'Gargles', 'Gargling with salt water',
	  'Lozenges with analgesics', 'Lozenges with ambroxol', 'Lozenges with lidocaine',
	  'Lozenges with menthol', 'Lozenges with benzocaine', 'Throat sprays'
    ];

    $scope.corticosteroidsList = [
	  'dexamethasone at 0.6 mg/kg (max dose 10 mg in children) for severe cases of pain or difficulty swallowing',
	  'Dexamethasone 10 mg IM for severe cases of pain or difficulty swallowing',
	  'β-methasone 8 mg IM for severe cases of pain or difficulty swallowing',
	  'Prednisone 60 mg oral for severe cases of pain or difficulty swallowing'
    ];

	this.isGABHS = function() {
		return ($.inArray("Bacterial Pharyngitis (GABHS)", this.treatment.workingDiagnosis) != -1);
	}

	this.isAmoxicillin = function() {
		return ($.inArray("Amoxicillin dosing is 40 mg/kg/d three times a day for 10 days", this.treatment.firstLine) != -1)
		|| ($.inArray("Amoxicillin 500 mg three times a day for 10 days", this.treatment.firstLine) != -1);
	}
});

angular.module('throatApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/allergies.html',
    "<div class=\"jumbotron\" ng-controller=\"AllergiesCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "    <fs-input as=\"fs-checkbox\" name=\"allergies.allergiesChecks\" label=\"Allergies\" items=\"allergiesCheckList\">{{ item }}</fs-input>\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <div class=\"gridStyle\" ng-grid=\"patient.gridOptions\"></div><p>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-info\" ng-click=\"patient.loadAllergies()\" ng-href=\"#/allergies\">Load Allergies<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg btn-success\" ng-href=\"#/differentialdiag\">Verify<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/chiefcompl.html',
    "<div class=\"jumbotron\" ng-controller=\"ChiefComplCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"chiefComplaint\" label=\"Chief Complaint\" items=\"ccs\">{{ item }}</fs-input>\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/ruleout\">Select<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/currentmeds.html',
    "<div class=\"jumbotron\" ng-controller=\"CurrentMedsCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "    <fs-input as=\"fs-checkbox\" name=\"currentMeds.currentMedicationChecks\" label=\"Current medications\" items=\"currentMedicationCheckList\">{{ item }}</fs-input>\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <div class=\"gridStyle\" ng-grid=\"patient.gridOptions\"></div><p>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-info\" ng-click=\"patient.loadCurrentMeds()\" ng-href=\"#/currentmeds\">Load Medications<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg btn-success\" ng-href=\"#/allergies\">Verify<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/demographics.html',
    "<div class=\"jumbotron\" ng-controller=\"PatientCtrl as patient\">\n" +
    "  \n" +
    "  <div class=\"col-xs-6\">  \n" +
    "  \n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    \n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "      <legend>Patient</legend>    \n" +
    "      <fs-input as=\"text\" name=\"demographics.employeeID\" required=\"\" label=\"Walsmart Employee ID\"></fs-input>\n" +
    "      <fs-input as=\"text\" name=\"demographics.firstName\" required=\"\" label=\"First Name\"></fs-input>\n" +
    "      <fs-input as=\"text\" name=\"demographics.lastName\" required=\"\" label=\"Last Name\"></fs-input>\n" +
    "      <fs-input as=\"fs-radio\" name=\"demographics.sex\" label=\"Sex\" items=\"sex\">{{item}}</fs-input>\n" +
    "      <div class=\"form-group\">\n" +
    "      <div class=\"col-xs-5 col-xs-offset-1\">\n" +
    "        <fs-input as=\"fs-date\" ng-model-onblur ng-change='calcAge()' name=\"demographics.dateOfBirth\" required=\"\" label=\"DOB\"></fs-input>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-5 col-xs-offset-1\">\n" +
    "        <fs-input as=\"text\" ng-disabled=\"true\" name=\"demographics.age\" label=\"Age\"></fs-input>\n" +
    "      </div>\n" +
    "      </div>\n" +
    "      <fs-input as=\"text\" name=\"demographics.guardian\" required=\"\" label=\"Guardian\"></fs-input>\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-xs-6\">\n" +
    "<fs-form-for model=\"patient\">\n" +
    "  <fieldset class=\"form-horizontal\">\n" +
    "      <legend>Address</legend>    \n" +
    "      <fs-input as=\"text\" name=\"demographics.streetAddress\" required=\"\" label=\"Street Address\"></fs-input>\n" +
    "      <fs-input as=\"text\" name=\"demographics.apartmentNumber\" required=\"\" label=\"Apartment Number\"></fs-input>\n" +
    "      <fs-input as=\"text\" name=\"demographics.city\" required=\"\" label=\"City\"></fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-select\" name=\"demographics.state\" required=\"\" items=\"states\" label=\"State\">{{item}}</fs-input>\n" +
    "\n" +
    "      <fs-input as=\"text\" name=\"demographics.zip\" required=\"\" label=\"Zip\"></fs-input>\n" +
    "\n" +
    "      <legend>Contact</legend>    \n" +
    "      <fs-input as=\"text\" name=\"demographics.phone\" required=\"\" label=\"Phone\"></fs-input>\n" +
    "      <fs-input as=\"email\" name=\"demographics.email\" required=\"\" label=\"Email\"></fs-input>\n" +
    "      \n" +
    "    <fieldset>\n" +
    "  </fs-form-for>\n" +
    "  \n" +
    "  </div>\n" +
    "  <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/chiefcompl\">Verify<span class=\"glyphicon\"></span>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('/differentialdiag.html',
    "<div class=\"jumbotron\" ng-controller=\"DifferentialDiagCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.emergentDiagnoses\" label=\"Emergent Diagnoses\" items=\"emergentDiagnosesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.bacterialPharyngitisCauses\" label=\"Bacterial Pharyngitis Causes\" items=\"bacterialPharyngitisCausesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "\n" +
    "      <div ng-show=\"patient.showOther\" >\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.otherBacterialPathogens\" label=\"Other Bacterial Pathogens\" items=\"otherBacterialPathogensList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.viralCauses\" label=\"Viral causes\" items=\"viralCausesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "\n" +
    "      <div ng-show=\"patient.showOther\" >\n" +
    "        <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.otherViralCauses\" label=\"Other Viral Causes\" items=\"otherViralCausesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-click=\"patient.toggleOther()\" ng-href=\"#/differentialdiag\">{{patient.buttonLabel}}<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-href=\"#/physicalexam\">OK<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/education.html',
    "<div class=\"jumbotron\" ng-controller=\"EducationCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "      <legend>Relevant patient education</legend>\n" +
    "      \n" +
    "      <div ng-show=\"diffDiagnosisList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.workingDiagnosis\" label=\"Working Diagnosis\" items=\"diffDiagnosisList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"labTestList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.labTests\" label=\"Lab tests\" items=\"labTestList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"firstLineList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.firstLine\" label=\"First Line\" items=\"firstLineList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"secondLineList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.secondLine\" label=\"Second Line\" items=\"secondLineList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"systemicTherapyList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.systemicTherapy\" label=\"Systemic Therapy\" items=\"systemicTherapyList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"topicalTherapyList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.topicalTherapy\" label=\"Topical Therapy\" items=\"topicalTherapyList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"corticosteroidsList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.corticosteroids\" label=\"Corticosteroids\" items=\"corticosteroidsList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "  <p><textarea class=\"form-control\" rows=\"10\" ng-model=\"aftercare.notes\"></textarea></p>\n" +
    "\n" +
    "  <p>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-href=\"#/education\">Finalize documentation<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('/fhandsh.html',
    "<div class=\"jumbotron\" ng-controller=\"FHAndSHCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "    <fs-input as=\"fs-checkbox\" name=\"familyHistory\" label=\"Family History\" items=\"familyHistoryList\">{{ item }}</fs-input>\n" +
    "\t\n" +
    "    </fieldset>\n" +
    "\n" +
    "  <textarea class=\"form-control\" rows=\"3\" ng-model=\"familyHistoryComments\"></textarea>\n" +
    "  <p>\n" +
    "\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/currentmeds\">OK<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/hpi.html',
    "<div class=\"jumbotron\" ng-controller=\"HPICtrl as patient\">\n" +
    "\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-click=\"patient.loadCDA()\" ng-href=\"#/hpi\">Load CDA<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\t\n" +
    "    <!--\n" +
    "    check for recurrent strep\n" +
    "    history of PTA\n" +
    "    HX of rheumatic heart disease\n" +
    "\n" +
    "    Criteria for consideration include seven or more episodes in the past year, five or more episodes per year in the past 2 years, or three or more episodes per year in the past 3 years, with at least one of the following with each episode: fever greater than 100.9°F, cervical adenopathy, tonsillar exudate, or positive strep test \n" +
    "    -->\n" +
    "    <fs-input as=\"fs-multiselect\" name=\"HPI.historyOfPresentIllness\" freetext=\"\" label=\"History of present illness\" items=\"historyOfPresentIllnessList\">{{ item }}</fs-input>\n" +
    "    </fieldset>\n" +
    "\n" +
    "    <fieldset class=\"form-horizontal\" ng-show=\"patient.isRecurrentStrep()\">\n" +
    "    <legend>Recurrent strep</legend>\n" +
    "    <em>with at least one of the following with each episode: fever greater than 100.9°F, cervical adenopathy, tonsillar exudate, or positive strep test </em><p>\n" +
    "\n" +
    "    <fs-input as=\"text\" name=\"HPI.episodesPastYear\" required=\"\" label=\"Episodes in the past year\"></fs-input>\n" +
    "    <fs-input as=\"text\" name=\"HPI.episodes2ndYear\" required=\"\" label=\"Episodes in the year before the past year\"></fs-input>\n" +
    "    <fs-input as=\"text\" name=\"HPI.episodes3rdYear\" required=\"\" label=\"Episodes one more year before\"></fs-input>\n" +
    "\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/fhandsh\">OK<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/physicalexam.html',
    "<div class=\"jumbotron\" ng-controller=\"PhysicalExamCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "        <legend>Vital signs</legend>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-xs-6\">\n" +
    "            <fs-input as=\"text\" name=\"vitals.weight\" label=\"Weight\"></fs-input>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-6\">\n" +
    "            lbs {{ patient.vitals.weight/2.20462262 | number:1 }} kg\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-xs-6\">\n" +
    "            <fs-input as=\"text\" ng-change=\"patient.updateCentorScore()\" name=\"vitals.temperature\" label=\"Tempe rature\"></fs-input>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-6\">\n" +
    "            ℉ / {{ (patient.vitals.temperature - 32)* 5.0/9.0 | number:1 }} ℃\n" +
    "          </div>\n" +
    "        </div>        \n" +
    "\n" +
    "      <legend>Centor score & RST</legend>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <fs-input as=\"fs-checkbox\" ng-change=\"patient.updateRecommendations()\" name=\"centorScore\" label=\"Centor Score\" items=\"centorScoreList\">{{ item }}</fs-input>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <strong>{{\"Score: \"+patient.centorScore.length}}</strong> <em>{{patient.csConclusion}}</em><p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      \n" +
    "      <strong>{{patient.checkRSTNecessity().rstDecision}}</strong> <em>{{patient.checkRSTNecessity().rstReason}}</em><p>\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <!--fs-input as=\"fs-radio\" name=\"rst\" label=\"RST\" items=\"rstList\" ng-disabled=\"patient.checkRSTNecessity().rstDisabled\"></fs-input-->\n" +
    "          <fs-input as=\"fs-select\" ng-change=\"patient.updateRecommendations()\" ng-disabled=\"patient.checkRSTNecessity().rstDisabled\" name=\"testing.rst\" items=\"rstList\" label=\"RST\">{{item}}</fs-input>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <!--strong>{{\"Recommendations:\"}}</strong-->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <legend>Throat culture</legend>\n" +
    "\n" +
    "      <strong>{{patient.checkCulture().cultureDecision}}</strong> <em>{{patient.checkCulture().cultureReason}}</em><p>\n" +
    "      <p>\n" +
    "      <legend>Treatment recommendations</legend>\n" +
    "\n" +
    "      <strong>{{patient.checkTreatment().treatmentDecision}}</strong> <em>{{patient.checkTreatment().treatmentReason}}</em><p>\n" +
    "\n" +
    "      <legend>Symptoms</legend>\n" +
    "      <fs-input as=\"fs-select\" ng-change=\"patient.loadSymptoms()\" name=\"pe.provisionalDiagnosis\"items=\"diffDiagnosisList\" label=\"Provisional Diagnosis\">{{item}}</fs-input>\n" +
    "      <em>{{patient.pe.diagnosisDescription}}</em>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <fs-input as=\"fs-multiselect\" name=\"pe.symptomsObserved\" freetext=\"\" label=\"Symptoms observed\" items=\"typicalSymptomsList\">{{ item }}</fs-input>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <fs-input as=\"fs-multiselect\" name=\"pe.symptomsNotObserved\" freetext=\"\" label=\"Symptoms not observed\" items=\"notTypicalSymptomsList\">{{ item }}</fs-input>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-href=\"#/treatment\">Treatment<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/ruleout.html',
    "<div class=\"jumbotron\" ng-controller=\"RuleOutCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"emergentSymptoms\" label=\"Emergent symptoms to watch\" items=\"emergentSymptomsList\">{{ item.diag }}</fs-input>\n" +
    "\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"emergentDiagnoses\" label=\"Emergent Diagnoses\" items=\"emergentDiagnosesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"otherSymptoms\" label=\"Other symptoms to refer\" items=\"otherSymptomsList\">{{ item.diag }}</fs-input>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p>\n" +
    "  <a ng-class=\"patient.classCall911\" ng-href=\"#/ruleout\">Call 911<span class=\"glyphicon\"></span></a>\n" +
    "  <a ng-class=\"patient.classReferToER\" ng-href=\"#/ruleout\">Refer to ER<span class=\"glyphicon\"></span></a>\n" +
    "  <a ng-class=\"patient.classReferToER\" ng-href=\"#/ruleout\">Refer to Urgent Care<span class=\"glyphicon\"></span></a>\n" +
    "  <a ng-class=\"patient.classRuleOut\" ng-href=\"#/hpi\">Rule Out<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/treatment.html',
    "<div class=\"jumbotron\" ng-controller=\"TreatmentCtrl as patient\">\n" +
    "\n" +
    "  <strong>Assessment: </strong>Temperature: {{patient.vitals.temperature}} ℉, provisional diagnosis: {{patient.pe.provisionalDiagnosis}}, observed symptoms: <span ng-repeat=\"item in patient.pe.symptomsObserved\">{{item}}, </span>not observed symptoms: <span ng-repeat=\"item in patient.pe.symptomsNotObserved\">{{item}}, </span>Centor score: {{patient.centorScore.length}}, RST: {{patient.testing.rst}}, {{patient.recommendations.cultureDecision}}, {{patient.recommendations.cultureReason}}, {{patient.recommendations.treatmentDecision}}, {{patient.recommendations.treatmentReason}}.</em>\n" +
    "  <p></p>\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "      <legend>Laboratory tests</legend>\n" +
    "      <fs-input as=\"fs-multiselect\" name=\"treatment.workingDiagnosis\" freetext=\"\" label=\"Working Diagnosis\" items=\"diffDiagnosisList\">{{ item }}</fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.labTests\" label=\"Select laboratory tests\" items=\"labTestList\">{{ item }}</fs-input>\n" +
    "\n" +
    "      <div ng-show=\"patient.isGABHS()\">\n" +
    "      <legend>First Line Treatment</legend>\n" +
    "\n" +
    "      <!--Oral penicillin V is the treatment of choice, owing to its proven efficacy, safety, narrow spectrum, and low cost (Pichichero, 2012). Recommended dosing for children is 2 to 50 mg/kg/d four times a day for 10 days and 500 mg two to three times daily for 10 days for adults (“Antibiotics for Strep Throat [Streptococcal Pharyngitis],” 2011). Amoxicillin is often used in place of penicillin V, especially in children, because it is more palatable (Pichichero, 2012). Amoxicillin dosing is 40 mg/kg/d three times a day for 10 days for children and 500 mg three times a day for 10 days for adults (“Antibiotics for Strep Throat,” 2011). Intramuscular penicillin G and bicillin are also appropriate for those patients who cannot complete a 10-day course of oral antibiotics or who have a personal history of rheumatic heart disease (Pichichero, 2012).\n" +
    "      -->\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.firstLine\" label=\"Select prescription\" items=\"firstLineList\">{{ item }}</fs-input>\n" +
    "\n" +
    "        <div class=\"alert alert-danger\" ng-show=\"patient.isAmoxicillin()\">\n" +
    "        <strong>Warning: drug allergy!</strong>  \n" +
    "        {{patient.allergyWarning}}\n" +
    "        </div>\n" +
    "      \n" +
    "      <legend>Second-Line and Recurrent Treatment</legend>\n" +
    "      <!--Azithromycin and first-generation cephalosporins are also acceptable as therapy in treatment failure with penicillin or amoxicillin or with β-lactam sensitivity (Pichichero, 2012). Common dosing for second-line therapies is as follows:\n" +
    "      Augmentin\n" +
    "      Children—40 mg/kg/d two to three times daily for 10 days\n" +
    "      Adults—500 to 875 mg twice a day for 10 days\n" +
    "           Erythromycin\n" +
    "      Children—40 mg/kg/d two to four times daily for 10 days\n" +
    "      Adults—400 mg four times a day for 10 days\n" +
    "           Azithromycin\n" +
    "      Children—12 mg/kg every day for 5 days or 20 mg/kg every day for 3 days\n" +
    "      Adults—500 mg on day 1 then 250 mg on days 2 to 5\n" +
    "           Cephalexin\n" +
    "      Children—25 to 50 mg/kg/d two to four times daily for 10 days\n" +
    "      Adults—500 mg twice a day for 10 days (“Antibiotics for Strep Throat,” 2011)\n" +
    "\n" +
    "      For patients with recurrent strep, multiple antibiotic allergies or intolerance, or history of PTA, a referral for tonsillectomy may be considered. Criteria for consideration include seven or more episodes in the past year, five or more episodes per year in the past 2 years, or three or more episodes per year in the past 3 years, with at least one of the following with each episode: fever greater than 100.9°F, cervical adenopathy, tonsillar exudate, or positive strep test (“Streptococcal Pharyngitis,” 2012).-->\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.secondLine\" label=\"Select prescription\" items=\"secondLineList\">{{ item }}</fs-input>\n" +
    "\n" +
    "        <div ng-show=\"false\">\n" +
    "        <legend>Referring for tonsillectomy</legend>\n" +
    "        <!--For patients with recurrent strep, multiple antibiotic allergies or intolerance, or history of PTA, a referral for tonsillectomy may be considered. Criteria for consideration include seven or more episodes in the past year, five or more episodes per year in the past 2 years, or three or more episodes per year in the past 3 years, with at least one of the following with each episode: fever greater than 100.9°F, cervical adenopathy, tonsillar exudate, or positive strep test (“Streptococcal Pharyngitis,” 2012).-->\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <legend>Supportive therapy</legend>\n" +
    "      <em>to help reduce fever, body aches, and headaches and decrease inflammation, which helps to relieve pain</em>\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.systemicTherapy\" label=\"Systemic therapy\" items=\"systemicTherapyList\">{{ item }}</fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-multiselect\" name=\"treatment.topicalTherapy\" freetext=\"\" label=\"Topical therapy\" items=\"topicalTherapyList\">{{ item }}</fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.corticosteroids\" label=\"Corticosteroids\" items=\"corticosteroidsList\">{{ item }}</fs-input>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-href=\"#/education\">Aftercare instructions<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "</div>\n"
  );

}]);
