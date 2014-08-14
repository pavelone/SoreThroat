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
