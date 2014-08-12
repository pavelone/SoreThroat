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
