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
  this.workingDiagnosis = Data.get().workingDiagnosis;

  $scope.diffDiagnosisList = [
    'Bacterial Pharyngitis (GABHS)',
    'Viral Pharyngitis',
    'Laryngitis',
    'Mononucleosis',
    'Upper Respiratory Infections'];

  if (this.demographics.age < 15) {
  	  //children
	  $scope.firstLineList = [
	  'Oral penicillin V 2 to 50 mg/kg/d four times a day for 10 days',
	  'Amoxicillin dosing is 40 mg/kg/d three times a day for 10 days',
	  'Intramuscular penicillin G',
	  'bicillin'];

	  $scope.secondLineList = [
	  'Augmentin 40 mg/kg/d two to three times daily for 10 days',
	  'Erythromycin 40 mg/kg/d two to four times daily for 10 days',
	  'Azithromycin 12 mg/kg every day for 5 days or 20 mg/kg every day for 3 days',
	  'Cephalexin 25 to 50 mg/kg/d two to four times daily for 10 days'];
	} else {
	  //adults
	  $scope.firstLineList = [
	  'Oral penicillin V 500 mg two to three times daily for 10 days',
	  '500 mg three times a day for 10 days',
	  'Intramuscular penicillin G',
	  'bicillin'];

	  $scope.secondLineList = [
	  'Augmentin 500 to 875 mg twice a day for 10 days',
	  'Erythromycin 400 mg four times a day for 10 days',
	  'Azithromycin 500 mg on day 1 then 250 mg on days 2 to 5',
	  'Cephalexin 500 mg twice a day for 10 days'];
	}

	this.isGABHS = function() {
		return ($.inArray("Bacterial Pharyngitis (GABHS)", this.workingDiagnosis) != -1);
	}
});
