'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:AllergiesCtrl
 * @description
 * # AllergiesCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('AllergiesCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];

  this.allergies = Data.get().allergies;
  $scope.allergies = this.allergies.allergies;

  var dateToday = new Date;

  var dateYesterday = new Date();
  dateYesterday.setDate(dateYesterday.getDate() - 1);

  $scope.allergiesCheckList = [
  'No known allergies',
  'Patient has multiple antibiotic allergies or intolerance'
  ];

this.gridOptions = { 
	data: 'allergies',
	enableRowSelection: true,
	columnDefs: [{field: 'substance', displayName: 'Substance', enableCellEdit: true}, 
		 {field:'criticality', displayName:'Criticality', enableCellEdit: true},
		 {field:'reaction', displayName:'Reaction', enableCellEdit: true},
		 {field:'timestamp', displayName:'Timestamp', enableCellEdit: true}]
};

//TODO: move it somewhere to access from both meds and allergies
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

this.loadAllergies = function() {
  $scope.allergies = [{substance: "Amoxicillin", criticality: "medium", reaction: "rash",
	timestamp: dateToShow(dateToday)+" "+timeToShow(dateToday), comments: "source: patient"}];

	this.allergies.allergies = $scope.allergies;
	this.allergies.allergiesChecks = [];
}

});
