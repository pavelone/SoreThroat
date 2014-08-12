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
  this.rst = {id: "none", label: "None"};
  this.centorScore = Data.get().centorScore;

  this.checkRSTNecessity = { rstDecision: "", rstReason: "", rstDisabled: false};
  this.culture = { cultureDecision: "", cultureReason: ""};

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
    var checkRSTDisabled = false;
    var checkRSTDecision = "";
    var checkRSTReason = "";

    //disable RST if patient takes antibiotics currently
    if ($.inArray("Patient takes antibiotics currently", this.currentMeds.currentMedicationChecks) != -1) {
      checkRSTDisabled = true;
      checkRSTDecision = "Do not perform RST. ";
      checkRSTReason = "Patient is taking antibiotics, this may result in a false negative. ";
    }
    if (this.demographics.age < 15) {
      checkRSTDecision = "Perform RST. ";
      checkRSTReason = "It should be used as a first-line diagnostic test in all pediatric patients. ";
    }
    if ((this.demographics.age >= 15) && (this.centorScore.length > 1)){
      checkRSTDecision = "Perform RST. ";
      checkRSTReason = "A score of 2 or more is suggestive of a GABHS infection and should have an RST performed. ";
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

    if ((this.rst.id == 'neg') && (this.demographics.age < 15)) {
      cultDecision = "Perform a throat culture.";
      cultReason = "Pediatric patient.";
    }
    if ((this.rst.id == 'neg') && (this.demographics.age > 15) 
      && (this.centorScore.length >= 2)) {      
      cultDecision = "Perform a throat culture.";
      cultReason = "Adult patient with Centor Score > 2. ";
    }
    if ((this.rst.id == 'neg') && (this.demographics.age > 15) 
      && ($.inArray("lives with children", this.familyHistory) != -1)) {
      if (cultDecision == "") {
        cultDecision = "Perform a throat culture.";
      }
      cultReason += "Patient lives with children. ";
    }
    if ((this.rst.id == 'neg') && (this.demographics.age > 15) 
      && ($.inArray("History of Rheumatic Heart Disease", this.HPI.historyOfPresentIllness) != -1)){
      if (cultDecision == "") {
        cultDecision = "Perform a throat culture.";
      }
      cultReason += "Patient has a personal history of rheumatic heart disease. ";
    }

    if ((cultDecision == "") && (this.rst.id != 'none')) {
      cultReason = "No indication to perform a throat culture per documentation. ";
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


    if (this.rst.id == 'pos') {
      txDecision = "Treat the patient for GABHS. ";
      txReason = "Positive RST result. ";
    }
    


    return { treatmentDecision: txDecision, treatmentReason: txReason};
  }

});
