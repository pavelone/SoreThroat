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
