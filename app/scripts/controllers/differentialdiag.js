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
  'Epiglottitis',
  'Peritonsillar abscess',
  'Retropharyngeal abscess',
  'none of the above'
  ];

  $scope.bacterialPharyngitisCausesList = [
  'GABHS',
  'Mycoplasma pneumonia (5% to 16% of cases of pharyngitis in children older than age 6)',
  'Neisseria gonorrhoeae (ask about sexual history)',
  'non-Group A streptococci (Group C and G)',
  'Corynebacterium diphtheriae (hallmarked by the formation of a tightly adhering gray membrane that bleeds when dislodged)',
  'none of the above'
  ];

  $scope.otherBacterialPathogensList = [
  'Staphylococcus aureus',
  'Haemophilus influenzae',
  'Moraxella catarrhalis',
  'Bacteroides fragilis',
  'Bacteroides oralis',
  'Bacteroides melaninogenicus',
  'Fusobacterium species',
  'Peptostreptococcus species',
  'Chlamydia trachomatis',
  'none of the above'
  ];

  $scope.viralCausesList = [
  'Viral pharyngitis (Rhinovirus, nearly 20% of pharyngitis cases or Adenovirus)',
  'Laryngitis',
  'Mononucleosis',
  'Upper Respiratory Infections',
  'none of the above'
  ];

  $scope.otherViralCausesList = [
  'Epstein–Barr virus',
  'cytomegalovirus',
  'herpes simplex virus',
  'respiratory syncytial virus',
  'HIV',
  'parainfluenza',
  'influenza',
  'enterovirus',
  'coronavirus',
  'none of the above'
  ];

  $scope.emergentDiagnosesEducation = [
  'http://www.nlm.nih.gov/medlineplus/ency/article/000605.htm',
  'http://www.nlm.nih.gov/medlineplus/ency/article/000986.htm',
  'http://www.nlm.nih.gov/medlineplus/ency/article/000984.htm',
  ''
  ];

  $scope.bacterialPharyngitisCausesEducation = [
  'http://www.niaid.nih.gov/topics/strep/Pages/Default.aspx',
  'http://www.nlm.nih.gov/medlineplus/ency/article/000082.htm',
  'http://www.nlm.nih.gov/medlineplus/gonorrhea.html',
  'http://google.com',
  'http://www.nlm.nih.gov/medlineplus/ency/article/001608.htm',
  'http://google.com'
  ];

  $scope.viralCausesEducation = [
  'http://www.nlm.nih.gov/medlineplus/ency/article/001392.htm',
  'http://google.com',
  'http://www.nlm.nih.gov/medlineplus/infectiousmononucleosis.html',
  'http://google.com',
  'http://google.com'
  ];

  $scope.otherBacterialPathogenEducation = [
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com'
  ];

  $scope.otherViralCausesEducation = [
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com',
  'http://google.com'
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
