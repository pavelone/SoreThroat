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



});
