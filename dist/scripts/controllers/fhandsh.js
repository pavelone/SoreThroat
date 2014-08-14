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

  this.familyHistory = Data.get().familyHistory;
  this.familyHistoryComments = Data.get().familyHistoryComments;
  
  $scope.familyHistoryList = [
  'lives with children',
  'family members or close contacts who were recently diagnosed with GABHS'
  ];

});
