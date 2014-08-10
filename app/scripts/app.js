'use strict';

/**
 * @ngdoc overview
 * @name throatApp
 * @description
 * # throatApp
 *
 * Main module of the application.
 */
var throatApp = angular
  .module('throatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'formstamp'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/demographics.html',
        controller: 'PatientCtrl'
      })
      .when('/chiefcompl', {
        templateUrl: 'views/chiefcompl.html',
        controller: 'ChiefComplCtrl'
      })
      .when('/demographics', {
        templateUrl: 'views/demographics.html',
        controller: 'PatientCtrl'
      })
      .when('/ruleout', {
        templateUrl: 'views/ruleout.html',
        controller: 'RuleOutCtrl'
      })
      .when('/hpi', {
        templateUrl: 'views/hpi.html',
        controller: 'HPICtrl'
      })
      .when('/fhandsh', {
        templateUrl: 'views/fhandsh.html',
        controller: 'FHAndSHCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

throatApp.factory('Data', function () {

var patient = { demographics:
                  {employeeID: 12345,
                   firstName: "John",
                   lastName: "Dow",
                   //sex: { id: "M", label: "Male" },
                   sex: "M",
                   dateOfBirth: new Date(),
                   age: 0,
                   guardian: "Someone",
                   streetAddress: "123 Happy Str.",
                   apartmentNumber: "8",
                   city: "Happy City",
                   state: "California",
                   zip: "90123",
                   phone: "123-123-1234",
                   email: "pavel.s.smirnov@gmail.com"
                  },
                  chiefComplaint: ["Sore throat"],
                  emergentSymptoms: [],
                  emergentDiagnoses: [],
                  otherSymptoms: [],
                  HPI: { historyOfPresentIllness: [],
                         episodesPastYear: 0,
                         episodes2ndYear: 0,
                         episodes3rdYear: 0 }

};

function set(data) {
  patient = data;
}

function get() {
  return patient;
}

return {
set: set,
get: get
};

});
 