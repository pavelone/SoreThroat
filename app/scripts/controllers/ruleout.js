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
  'labored breathing',
  'inability to swallow or obvious drooling',
  'swelling of the face or neck',
  'inability to open the mouth',
  'severe pain',
  'asymmetrical swelling of the soft palate',
  'unilateral swelling of the pharynx or tonsils',
  'deviation of the uvula',
  'none of the above'
  ];

  $scope.emergentDiagnosesList = [
  'Epiglottitis',
  'Peritonsillar abscess',
  'Retropharyngeal abscess',
  'none of the above'
  ];

  $scope.emergentDiagnosesEducation = [
  'http://www.nlm.nih.gov/medlineplus/ency/article/000605.htm',
  'http://www.nlm.nih.gov/medlineplus/ency/article/000986.htm',
  'http://www.nlm.nih.gov/medlineplus/ency/article/000984.htm',
  ''
  ];

  $scope.otherSymptomsList = [
  'dehydrated patient',
  'septic patient',
  'none of the above'
  ];

  this.classRuleOut = "btn btn-lg btn-info";
  this.classReferToER = "btn btn-lg btn-info";
  this.classCall911 = "btn btn-lg btn-info";
  
  $scope.thisPatient = this;

  function countGoodAndBad(whereArr, countValues) {
    switch (whereArr.length) {
      case 0: break;
      case 1: if (whereArr[0] == "none of the above") {
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
