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
