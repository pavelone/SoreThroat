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
