'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:ChiefComplCtrl
 * @description
 * # ChiefComplCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('ChiefComplCtrl', function ($scope, Data) {

	this.demographics = Data.get().demographics;

	this.chiefComplaint = Data.get().chiefComplaint;

  $scope.ccs = [
  'Ear pain',
  'Red eye and other eye complaints',
  'Sore throat',
  'Sinusitis',
  'Cough and Upper Respiratory Tract Infections',
  'Disuria and Urinary Complaints',
  'Rashes',
  'Fever',
  'Other' ];

  });
