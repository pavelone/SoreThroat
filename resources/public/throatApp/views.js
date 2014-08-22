angular.module('throatApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/allergies.html',
    "<div class=\"jumbotron\" ng-controller=\"AllergiesCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "    <fs-input as=\"fs-checkbox\" name=\"allergies.allergiesChecks\" label=\"Allergies\" items=\"allergiesCheckList\">{{ item }}</fs-input>\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <div class=\"gridStyle\" ng-grid=\"patient.gridOptions\"></div><p>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-info\" ng-click=\"patient.loadAllergies()\" ng-href=\"#/allergies\">Load Allergies<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg btn-success\" ng-href=\"#/differentialdiag\">Verify<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/chiefcompl.html',
    "<div class=\"jumbotron\" ng-controller=\"ChiefComplCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"chiefComplaint\" label=\"Chief Complaint\" items=\"ccs\">{{ item }}</fs-input>\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/ruleout\">Select<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/currentmeds.html',
    "<div class=\"jumbotron\" ng-controller=\"CurrentMedsCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "    <fs-input as=\"fs-checkbox\" name=\"currentMeds.currentMedicationChecks\" label=\"Current medications\" items=\"currentMedicationCheckList\">{{ item }}</fs-input>\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <div class=\"gridStyle\" ng-grid=\"patient.gridOptions\"></div><p>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-info\" ng-click=\"patient.loadCurrentMeds()\" ng-href=\"#/currentmeds\">Load Medications<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg btn-success\" ng-href=\"#/allergies\">Verify<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/demographics.html',
    "<div class=\"jumbotron\" ng-controller=\"PatientCtrl as patient\">\n" +
    "  \n" +
    "  <div class=\"col-xs-6\">  \n" +
    "  \n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    \n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "      <legend>Patient</legend>    \n" +
    "      <fs-input as=\"text\" name=\"demographics.employeeID\" required=\"\" label=\"Walsmart Employee ID\"></fs-input>\n" +
    "      <fs-input as=\"text\" name=\"demographics.firstName\" required=\"\" label=\"First Name\"></fs-input>\n" +
    "      <fs-input as=\"text\" name=\"demographics.lastName\" required=\"\" label=\"Last Name\"></fs-input>\n" +
    "      <fs-input as=\"fs-radio\" name=\"demographics.sex\" label=\"Sex\" items=\"sex\">{{item}}</fs-input>\n" +
    "      <div class=\"form-group\">\n" +
    "      <div class=\"col-xs-5 col-xs-offset-1\">\n" +
    "        <fs-input as=\"fs-date\" ng-model-onblur ng-change='calcAge()' name=\"demographics.dateOfBirth\" required=\"\" label=\"DOB\"></fs-input>\n" +
    "      </div>\n" +
    "      <div class=\"col-xs-5 col-xs-offset-1\">\n" +
    "        <fs-input as=\"text\" ng-disabled=\"true\" name=\"demographics.age\" label=\"Age\"></fs-input>\n" +
    "      </div>\n" +
    "      </div>\n" +
    "      <fs-input as=\"text\" name=\"demographics.guardian\" required=\"\" label=\"Guardian\"></fs-input>\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-xs-6\">\n" +
    "<fs-form-for model=\"patient\">\n" +
    "  <fieldset class=\"form-horizontal\">\n" +
    "      <legend>Address</legend>    \n" +
    "      <fs-input as=\"text\" name=\"demographics.streetAddress\" required=\"\" label=\"Street Address\"></fs-input>\n" +
    "      <fs-input as=\"text\" name=\"demographics.apartmentNumber\" required=\"\" label=\"Apartment Number\"></fs-input>\n" +
    "      <fs-input as=\"text\" name=\"demographics.city\" required=\"\" label=\"City\"></fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-select\" name=\"demographics.state\" required=\"\" items=\"states\" label=\"State\">{{item}}</fs-input>\n" +
    "\n" +
    "      <fs-input as=\"text\" name=\"demographics.zip\" required=\"\" label=\"Zip\"></fs-input>\n" +
    "\n" +
    "      <legend>Contact</legend>    \n" +
    "      <fs-input as=\"text\" name=\"demographics.phone\" required=\"\" label=\"Phone\"></fs-input>\n" +
    "      <fs-input as=\"email\" name=\"demographics.email\" required=\"\" label=\"Email\"></fs-input>\n" +
    "      \n" +
    "    <fieldset>\n" +
    "  </fs-form-for>\n" +
    "  \n" +
    "  </div>\n" +
    "  <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/chiefcompl\">Verify<span class=\"glyphicon\"></span>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('/differentialdiag.html',
    "<div class=\"jumbotron\" ng-controller=\"DifferentialDiagCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.emergentDiagnoses\" label=\"Emergent Diagnoses\" items=\"emergentDiagnosesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.bacterialPharyngitisCauses\" label=\"Bacterial Pharyngitis Causes\" items=\"bacterialPharyngitisCausesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "\n" +
    "      <div ng-show=\"patient.showOther\" >\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.otherBacterialPathogens\" label=\"Other Bacterial Pathogens\" items=\"otherBacterialPathogensList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.viralCauses\" label=\"Viral causes\" items=\"viralCausesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "\n" +
    "      <div ng-show=\"patient.showOther\" >\n" +
    "        <fs-input as=\"fs-checkbox\" name=\"differentialDiagnosis.otherViralCauses\" label=\"Other Viral Causes\" items=\"otherViralCausesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-click=\"patient.toggleOther()\" ng-href=\"#/differentialdiag\">{{patient.buttonLabel}}<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-href=\"#/physicalexam\">OK<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/education.html',
    "<div class=\"jumbotron\" ng-controller=\"EducationCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "      <legend>Relevant patient education</legend>\n" +
    "      \n" +
    "      <div ng-show=\"diffDiagnosisList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.workingDiagnosis\" label=\"Working Diagnosis\" items=\"diffDiagnosisList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"labTestList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.labTests\" label=\"Lab tests\" items=\"labTestList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"firstLineList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.firstLine\" label=\"First Line\" items=\"firstLineList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"secondLineList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.secondLine\" label=\"Second Line\" items=\"secondLineList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"systemicTherapyList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.systemicTherapy\" label=\"Systemic Therapy\" items=\"systemicTherapyList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"topicalTherapyList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.topicalTherapy\" label=\"Topical Therapy\" items=\"topicalTherapyList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "      <div ng-show=\"corticosteroidsList.length!=0\">\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"education.corticosteroids\" label=\"Corticosteroids\" items=\"corticosteroidsList\">{{ item.item }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "      </div>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "  <p><textarea class=\"form-control\" rows=\"10\" ng-model=\"aftercare.notes\"></textarea></p>\n" +
    "\n" +
    "  <p>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-href=\"#/education\">Finalize documentation<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('/fhandsh.html',
    "<div class=\"jumbotron\" ng-controller=\"FHAndSHCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "    <fs-input as=\"fs-checkbox\" name=\"familyHistory\" label=\"Family History\" items=\"familyHistoryList\">{{ item }}</fs-input>\n" +
    "\t\n" +
    "    </fieldset>\n" +
    "\n" +
    "  <textarea class=\"form-control\" rows=\"3\" ng-model=\"familyHistoryComments\"></textarea>\n" +
    "  <p>\n" +
    "\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/currentmeds\">OK<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/hpi.html',
    "<div class=\"jumbotron\" ng-controller=\"HPICtrl as patient\">\n" +
    "\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-click=\"patient.loadCDA()\" ng-href=\"#/hpi\">Load CDA<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\t\n" +
    "    <!--\n" +
    "    check for recurrent strep\n" +
    "    history of PTA\n" +
    "    HX of rheumatic heart disease\n" +
    "\n" +
    "    Criteria for consideration include seven or more episodes in the past year, five or more episodes per year in the past 2 years, or three or more episodes per year in the past 3 years, with at least one of the following with each episode: fever greater than 100.9°F, cervical adenopathy, tonsillar exudate, or positive strep test \n" +
    "    -->\n" +
    "    <fs-input as=\"fs-multiselect\" name=\"HPI.historyOfPresentIllness\" freetext=\"\" label=\"History of present illness\" items=\"historyOfPresentIllnessList\">{{ item }}</fs-input>\n" +
    "    </fieldset>\n" +
    "\n" +
    "    <fieldset class=\"form-horizontal\" ng-show=\"patient.isRecurrentStrep()\">\n" +
    "    <legend>Recurrent strep</legend>\n" +
    "    <em>with at least one of the following with each episode: fever greater than 100.9°F, cervical adenopathy, tonsillar exudate, or positive strep test </em><p>\n" +
    "\n" +
    "    <fs-input as=\"text\" name=\"HPI.episodesPastYear\" required=\"\" label=\"Episodes in the past year\"></fs-input>\n" +
    "    <fs-input as=\"text\" name=\"HPI.episodes2ndYear\" required=\"\" label=\"Episodes in the year before the past year\"></fs-input>\n" +
    "    <fs-input as=\"text\" name=\"HPI.episodes3rdYear\" required=\"\" label=\"Episodes one more year before\"></fs-input>\n" +
    "\n" +
    "\n" +
    "    </fieldset>\n" +
    "\n" +
    "    \n" +
    "\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p><a class=\"btn btn-lg btn-success\" ng-href=\"#/fhandsh\">OK<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/physicalexam.html',
    "<div class=\"jumbotron\" ng-controller=\"PhysicalExamCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "        <legend>Vital signs</legend>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-xs-6\">\n" +
    "            <fs-input as=\"text\" name=\"vitals.weight\" label=\"Weight\"></fs-input>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-6\">\n" +
    "            lbs {{ patient.vitals.weight/2.20462262 | number:1 }} kg\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <div class=\"col-xs-6\">\n" +
    "            <fs-input as=\"text\" ng-change=\"patient.updateCentorScore()\" name=\"vitals.temperature\" label=\"Tempe rature\"></fs-input>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-6\">\n" +
    "            ℉ / {{ (patient.vitals.temperature - 32)* 5.0/9.0 | number:1 }} ℃\n" +
    "          </div>\n" +
    "        </div>        \n" +
    "\n" +
    "      <legend>Centor score & RST</legend>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <fs-input as=\"fs-checkbox\" ng-change=\"patient.updateRecommendations()\" name=\"centorScore\" label=\"Centor Score\" items=\"centorScoreList\">{{ item }}</fs-input>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <strong>{{\"Score: \"+patient.centorScore.length}}</strong> <em>{{patient.csConclusion}}</em><p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      \n" +
    "      <strong>{{patient.checkRSTNecessity().rstDecision}}</strong> <em>{{patient.checkRSTNecessity().rstReason}}</em><p>\n" +
    "\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <!--fs-input as=\"fs-radio\" name=\"rst\" label=\"RST\" items=\"rstList\" ng-disabled=\"patient.checkRSTNecessity().rstDisabled\"></fs-input-->\n" +
    "          <fs-input as=\"fs-select\" ng-change=\"patient.updateRecommendations()\" ng-disabled=\"patient.checkRSTNecessity().rstDisabled\" name=\"testing.rst\" items=\"rstList\" label=\"RST\">{{item}}</fs-input>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <!--strong>{{\"Recommendations:\"}}</strong-->\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "      <legend>Throat culture</legend>\n" +
    "\n" +
    "      <strong>{{patient.checkCulture().cultureDecision}}</strong> <em>{{patient.checkCulture().cultureReason}}</em><p>\n" +
    "      <p>\n" +
    "      <legend>Treatment recommendations</legend>\n" +
    "\n" +
    "      <strong>{{patient.checkTreatment().treatmentDecision}}</strong> <em>{{patient.checkTreatment().treatmentReason}}</em><p>\n" +
    "\n" +
    "      <legend>Symptoms</legend>\n" +
    "      <fs-input as=\"fs-select\" ng-change=\"patient.loadSymptoms()\" name=\"pe.provisionalDiagnosis\"items=\"diffDiagnosisList\" label=\"Provisional Diagnosis\">{{item}}</fs-input>\n" +
    "      <em>{{patient.pe.diagnosisDescription}}</em>\n" +
    "      <div class=\"form-group\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <fs-input as=\"fs-multiselect\" name=\"pe.symptomsObserved\" freetext=\"\" label=\"Symptoms observed\" items=\"typicalSymptomsList\">{{ item }}</fs-input>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "          <fs-input as=\"fs-multiselect\" name=\"pe.symptomsNotObserved\" freetext=\"\" label=\"Symptoms not observed\" items=\"notTypicalSymptomsList\">{{ item }}</fs-input>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-href=\"#/treatment\">Treatment<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/ruleout.html',
    "<div class=\"jumbotron\" ng-controller=\"RuleOutCtrl as patient\">\n" +
    "\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"emergentSymptoms\" label=\"Emergent symptoms to watch\" items=\"emergentSymptomsList\">{{ item.diag }}</fs-input>\n" +
    "\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"emergentDiagnoses\" label=\"Emergent Diagnoses\" items=\"emergentDiagnosesList\">{{ item.diag }}<a href=\"{{item.edu}}\" target=\"_blank\"><img src=\"../images/information-icon.png\" alt=\"info\" width=\"16\" height=\"16\"></a></fs-input>\n" +
    "\n" +
    "\t    <fs-input as=\"fs-checkbox\" name=\"otherSymptoms\" label=\"Other symptoms to refer\" items=\"otherSymptomsList\">{{ item.diag }}</fs-input>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p>\n" +
    "  <a ng-class=\"patient.classCall911\" ng-href=\"#/ruleout\">Call 911<span class=\"glyphicon\"></span></a>\n" +
    "  <a ng-class=\"patient.classReferToER\" ng-href=\"#/ruleout\">Refer to ER<span class=\"glyphicon\"></span></a>\n" +
    "  <a ng-class=\"patient.classReferToER\" ng-href=\"#/ruleout\">Refer to Urgent Care<span class=\"glyphicon\"></span></a>\n" +
    "  <a ng-class=\"patient.classRuleOut\" ng-href=\"#/hpi\">Rule Out<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "  \n" +
    "</div>\n"
  );


  $templateCache.put('/treatment.html',
    "<div class=\"jumbotron\" ng-controller=\"TreatmentCtrl as patient\">\n" +
    "\n" +
    "  <strong>Assessment: </strong>Temperature: {{patient.vitals.temperature}} ℉, provisional diagnosis: {{patient.pe.provisionalDiagnosis}}, observed symptoms: <span ng-repeat=\"item in patient.pe.symptomsObserved\">{{item}}, </span>not observed symptoms: <span ng-repeat=\"item in patient.pe.symptomsNotObserved\">{{item}}, </span>Centor score: {{patient.centorScore.length}}, RST: {{patient.testing.rst}}, {{patient.recommendations.cultureDecision}}, {{patient.recommendations.cultureReason}}, {{patient.recommendations.treatmentDecision}}, {{patient.recommendations.treatmentReason}}.</em>\n" +
    "  <p></p>\n" +
    "  <fs-form-for model=\"patient\">\n" +
    "    <fieldset class=\"form-horizontal\">\n" +
    "\n" +
    "      <legend>Laboratory tests</legend>\n" +
    "      <fs-input as=\"fs-multiselect\" name=\"treatment.workingDiagnosis\" freetext=\"\" label=\"Working Diagnosis\" items=\"diffDiagnosisList\">{{ item }}</fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.labTests\" label=\"Select laboratory tests\" items=\"labTestList\">{{ item }}</fs-input>\n" +
    "\n" +
    "      <div ng-show=\"patient.isGABHS()\">\n" +
    "      <legend>First Line Treatment</legend>\n" +
    "\n" +
    "      <!--Oral penicillin V is the treatment of choice, owing to its proven efficacy, safety, narrow spectrum, and low cost (Pichichero, 2012). Recommended dosing for children is 2 to 50 mg/kg/d four times a day for 10 days and 500 mg two to three times daily for 10 days for adults (“Antibiotics for Strep Throat [Streptococcal Pharyngitis],” 2011). Amoxicillin is often used in place of penicillin V, especially in children, because it is more palatable (Pichichero, 2012). Amoxicillin dosing is 40 mg/kg/d three times a day for 10 days for children and 500 mg three times a day for 10 days for adults (“Antibiotics for Strep Throat,” 2011). Intramuscular penicillin G and bicillin are also appropriate for those patients who cannot complete a 10-day course of oral antibiotics or who have a personal history of rheumatic heart disease (Pichichero, 2012).\n" +
    "      -->\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.firstLine\" label=\"Select prescription\" items=\"firstLineList\">{{ item }}</fs-input>\n" +
    "\n" +
    "        <div class=\"alert alert-danger\" ng-show=\"patient.isAmoxicillin()\">\n" +
    "        <strong>Warning: drug allergy!</strong>  \n" +
    "        {{patient.allergyWarning}}\n" +
    "        </div>\n" +
    "      \n" +
    "      <legend>Second-Line and Recurrent Treatment</legend>\n" +
    "      <!--Azithromycin and first-generation cephalosporins are also acceptable as therapy in treatment failure with penicillin or amoxicillin or with β-lactam sensitivity (Pichichero, 2012). Common dosing for second-line therapies is as follows:\n" +
    "      Augmentin\n" +
    "      Children—40 mg/kg/d two to three times daily for 10 days\n" +
    "      Adults—500 to 875 mg twice a day for 10 days\n" +
    "           Erythromycin\n" +
    "      Children—40 mg/kg/d two to four times daily for 10 days\n" +
    "      Adults—400 mg four times a day for 10 days\n" +
    "           Azithromycin\n" +
    "      Children—12 mg/kg every day for 5 days or 20 mg/kg every day for 3 days\n" +
    "      Adults—500 mg on day 1 then 250 mg on days 2 to 5\n" +
    "           Cephalexin\n" +
    "      Children—25 to 50 mg/kg/d two to four times daily for 10 days\n" +
    "      Adults—500 mg twice a day for 10 days (“Antibiotics for Strep Throat,” 2011)\n" +
    "\n" +
    "      For patients with recurrent strep, multiple antibiotic allergies or intolerance, or history of PTA, a referral for tonsillectomy may be considered. Criteria for consideration include seven or more episodes in the past year, five or more episodes per year in the past 2 years, or three or more episodes per year in the past 3 years, with at least one of the following with each episode: fever greater than 100.9°F, cervical adenopathy, tonsillar exudate, or positive strep test (“Streptococcal Pharyngitis,” 2012).-->\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.secondLine\" label=\"Select prescription\" items=\"secondLineList\">{{ item }}</fs-input>\n" +
    "\n" +
    "        <div ng-show=\"false\">\n" +
    "        <legend>Referring for tonsillectomy</legend>\n" +
    "        <!--For patients with recurrent strep, multiple antibiotic allergies or intolerance, or history of PTA, a referral for tonsillectomy may be considered. Criteria for consideration include seven or more episodes in the past year, five or more episodes per year in the past 2 years, or three or more episodes per year in the past 3 years, with at least one of the following with each episode: fever greater than 100.9°F, cervical adenopathy, tonsillar exudate, or positive strep test (“Streptococcal Pharyngitis,” 2012).-->\n" +
    "        </div>\n" +
    "\n" +
    "      </div>\n" +
    "\n" +
    "      <legend>Supportive therapy</legend>\n" +
    "      <em>to help reduce fever, body aches, and headaches and decrease inflammation, which helps to relieve pain</em>\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.systemicTherapy\" label=\"Systemic therapy\" items=\"systemicTherapyList\">{{ item }}</fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-multiselect\" name=\"treatment.topicalTherapy\" freetext=\"\" label=\"Topical therapy\" items=\"topicalTherapyList\">{{ item }}</fs-input>\n" +
    "\n" +
    "      <fs-input as=\"fs-checkbox\" name=\"treatment.corticosteroids\" label=\"Corticosteroids\" items=\"corticosteroidsList\">{{ item }}</fs-input>\n" +
    "\n" +
    "    </fieldset>\n" +
    "  </fs-form-for>\n" +
    "\n" +
    "  <p>\n" +
    "  <a class=\"btn btn-lg btn-info\" ng-href=\"#/education\">Aftercare instructions<span class=\"glyphicon\"></span></a>\n" +
    "  <a class=\"btn btn-lg\" ng-href=\"#\">Cancel<span class=\"glyphicon\"></span></a></p>\n" +
    "\n" +
    "</div>\n"
  );

}]);
