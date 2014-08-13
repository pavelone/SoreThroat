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

  $scope.diffDiagnosisList = [
    {item:'Bacterial Pharyngitis (GABHS)', edu:'http://google.com'},
    {item:'Viral Pharyngitis', edu:'http://google.com'},
    {item:'Laryngitis', edu:'http://google.com'},
    {item:'Mononucleosis', edu:'http://google.com'},
    {item:'Upper Respiratory Infections', edu:'http://google.com'}];

  $scope.labTestList = [
    {item:'Throat culture', edu:'http://google.com'},
    {item:'Monospot test (for Mononucleosis)', edu:'http://google.com'}];

  if (this.demographics.age < 15) {
  	  //children
	  $scope.firstLineList = [
	  {item:'Oral penicillin V 2 to 50 mg/kg/d four times a day for 10 days', edu:'http://google.com'},
	  {item:'Amoxicillin dosing is 40 mg/kg/d three times a day for 10 days', edu:'http://google.com'},
	  {item:'Intramuscular penicillin G', edu:'http://google.com'},
	  {item:'Bicillin', edu:'http://google.com'}];

	  $scope.secondLineList = [
	  {item:'Augmentin 40 mg/kg/d two to three times daily for 10 days', edu:'http://google.com'},
	  {item:'Erythromycin 40 mg/kg/d two to four times daily for 10 days', edu:'http://google.com'},
	  {item:'Azithromycin 12 mg/kg every day for 5 days or 20 mg/kg every day for 3 days', edu:'http://google.com'},
	  {item:'Cephalexin 25 to 50 mg/kg/d two to four times daily for 10 days', edu:'http://google.com'}];

	  $scope.systemicTherapyList = [
	  {item:'Ibuprofen 10 mg/kg ', edu:'http://google.com'},
	  {item:'Acetaminophen 10-15 mg/kg PO q4-6h prn', edu:'http://google.com'},
	  {item:'Avoid aspirin and salicylates', edu:'http://google.com'}];

	} else {
	  //adults
	  $scope.firstLineList = [
	  {item:'Oral penicillin V 500 mg two to three times daily for 10 days', edu:'http://google.com'},
	  {item:'Amoxicillin 500 mg three times a day for 10 days', edu:'http://google.com'},
	  {item:'Intramuscular penicillin G', edu:'http://google.com'},
	  {item:'Bicillin', edu:'http://google.com'}];

	  $scope.secondLineList = [
	  {item:'Augmentin 500 to 875 mg twice a day for 10 days', edu:'http://google.com'},
	  {item:'Erythromycin 400 mg four times a day for 10 days', edu:'http://google.com'},
	  {item:'Azithromycin 500 mg on day 1 then 250 mg on days 2 to 5', edu:'http://google.com'},
	  {item:'Cephalexin 500 mg twice a day for 10 days', edu:'http://google.com'}];

	  $scope.systemicTherapyList = [
	  {item:'Ibuprofen 400 mg', edu:'http://google.com'},
	  {item:'Acetaminophen 1,000 mg', edu:'http://google.com'}];
	}

	$scope.topicalTherapyList = [
	  {item:'Lozenges', edu:'http://google.com'},
	  {item:'Sprays', edu:'http://google.com'},
	  {item:'Gargles', edu:'http://google.com'},
	  {item:'Gargling with salt water', edu:'http://google.com'},
	  {item:'Lozenges with analgesics', edu:'http://google.com'},
	  {item:'Lozenges with ambroxol', edu:'http://google.com'},
	  {item:'Lozenges with lidocaine', edu:'http://google.com'},
	  {item:'Lozenges with menthol', edu:'http://google.com'},
	  {item:'Lozenges with benzocaine', edu:'http://google.com'},
	  {item:'Throat sprays', edu:'http://google.com'}
    ];

    $scope.corticosteroidsList = [
	  {item:'dexamethasone at 0.6 mg/kg (max dose 10 mg in children) for severe cases of pain or difficulty swallowing', edu:'http://google.com'},
	  {item:'Dexamethasone 10 mg IM for severe cases of pain or difficulty swallowing', edu:'http://google.com'},
	  {item:'β-methasone 8 mg IM for severe cases of pain or difficulty swallowing', edu:'http://google.com'},
	  {item:'Prednisone 60 mg oral for severe cases of pain or difficulty swallowing', edu:'http://google.com'}
    ];

    $scope.diffDiagnosisList = $scope.diffDiagnosisList.filter(isPrescribed, this.treatment.workingDiagnosis);
    $scope.labTestList = $scope.labTestList.filter(isPrescribed, this.treatment.labTests);
    $scope.firstLineList = $scope.firstLineList.filter(isPrescribed, this.treatment.firstLine);
    $scope.secondLineList = $scope.secondLineList.filter(isPrescribed, this.treatment.secondLine);
    $scope.systemicTherapyList = $scope.systemicTherapyList.filter(isPrescribed, this.treatment.systemicTherapy);
    $scope.topicalTherapyList = $scope.topicalTherapyList.filter(isPrescribed, this.treatment.topicalTherapy);
    $scope.corticosteroidsList = $scope.corticosteroidsList.filter(isPrescribed, this.treatment.corticosteroids);

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

  function isPrescribed (element){
  	return ($.inArray(element.item, this) != -1);
  }

});
