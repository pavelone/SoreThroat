'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:FHAndSHCtrl
 * @description
 * # FHAndSHCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('FHAndSHCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];
  

});
