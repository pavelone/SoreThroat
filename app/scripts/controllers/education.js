'use strict';

/**
 * @ngdoc function
 * @name throatApp.controller:EducationCtrl
 * @description
 * # EducationCtrl
 * Controller of the throatApp
 */
angular.module('throatApp')
  .controller('EducationCtrl', function ($scope, Data) {

  this.demographics = Data.get().demographics;
  this.chiefComplaint = Data.get().chiefComplaint[0];
  this.currentMeds =  Data.get().currentMeds;
  this.vitals = Data.get().vitals;
  this.testing = Data.get().testing;
  this.centorScore = Data.get().centorScore;
  this.pe = Data.get().pe;
  this.recommendations = Data.get().recommendations;
  this.treatment = Data.get().treatment;
  $scope.aftercare = Data.get().aftercare;
  

  if (($.inArray("Bacterial Pharyngitis (GABHS)", this.treatment.workingDiagnosis) != -1)){
    $scope.aftercare.notes =  "Aftercare instructions for Bacterial Pharyngitis (GABHS)\n\n";

    $scope.aftercare.notes += "There are several strategies you should utilize in order to prevent the further spread of infections, including using tissues to sneeze or cough, washing hands frequently while the infection is active, and not sharing glasses, utensils, or toothbrushes\n\n";
    $scope.aftercare.notes += "Increase fluids and rest while they are feeling badly. \n\n";

	$scope.aftercare.notes += "You are considered contagious until you have been on antibiotics for 24 hours. \n\n";
	$scope.aftercare.notes += "Toothbrushes should either be sterilized or replaced after you are no longer contagious to decrease risk of reinfection. \n\n";
	$scope.aftercare.notes += "You should see clinical improvement within 3 to 5 days after starting antibiotics or spontaneous resolution by day 5. If you fail to improve despite antibiotic use, get back to the clinic, your primary care provider or urgent care.";
  }
  else {
    $scope.aftercare.notes =  "Aftercare instructions for "+this.treatment.workingDiagnosis[0]+"\n\n";

    $scope.aftercare.notes += "There are several strategies you should utilize in order to prevent the further spread of infections, including using tissues to sneeze or cough, washing hands frequently while the infection is active, and not sharing glasses, utensils, or toothbrushes\n\n";
    $scope.aftercare.notes += "Increase fluids and rest while they are feeling badly. \n\n";

  	$scope.aftercare.notes += "You should see clinical improvement within 3 to 5 days or spontaneous resolution by day 5. If you fail to improve, get back to the clinic, your primary care provider or urgent care.\n\n";
  }

});
