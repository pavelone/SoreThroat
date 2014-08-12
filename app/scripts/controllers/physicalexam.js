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

  this.vitals = Data.get().vitals;
  this.centorScore = Data.get().centorScore;

  this.rstDecision = "";
  this.rstReason = "";

  $scope.centorScoreList = [
  'Tonsillar exudates',
  'Cervical adenopathy',
  'Presence of a fever (T > 38°C, 100.4°F)',
  'Absence of a cough'
  ];

  $scope.rstList = [
    {id: 'none', label: 'None'},
    {id: 'pos', label: 'Positive'},
    {id: 'neg', label: 'Negative'}
  ];

  this.checkRSTNecessity = function() {
    var rstDisabled = false;
    //disable RST if patient takes antibiotics currently
    if ($.inArray("Patient takes antibiotics currently", this.currentMeds.currentMedicationChecks) != -1) {
      rstDisabled = true;
      this.rstDecision = "Do not perform RST";
      this.rstReason = "Patient is taking antibiotics, this may result in a false negative";
    }
    return rstDisabled;
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

});
