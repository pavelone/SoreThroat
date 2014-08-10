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



});
