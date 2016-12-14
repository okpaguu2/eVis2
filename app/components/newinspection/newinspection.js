/**
 * Created by USER12 on 12/4/2016.
 */


angular.module('eVis')
    .component("newInspection", {
        templateUrl: "app/components/newinspection/newinspection.html",
        controller: "NewInspectionController",
        bindings: {
            dashContent: "@"
        }
    })
    .component("outstandingPenalty", {
        templateUrl: "app/components/newinspection/outstandingpenalty.html",
        controller: "NewInspectionController",
        bindings: {}
    })
    .component("inspecting", {
        templateUrl: "app/components/newinspection/inspecting.html",
        controller: "NewInspectionController",
        bindings: {}
    })
    .component("identification", {
        templateUrl: "app/components/newinspection/identification.html",
        controller: "NewInspectionController",
        bindings: {}
    })
    .component("lightings", {
        templateUrl: "app/components/newinspection/lightings.html",
        controller: "NewInspectionController",
        bindings: {}
    })
    .component("visibility", {
        templateUrl: "app/components/newinspection/visibility.html",
        controller: "NewInspectionController",
        bindings: {}
    })
    .controller("NewInspectionController", ["$log", "InspectionService", function ($log, inspectionService) {
        $log.log("new inspection starting...");
        var self = this;

        self.title = "New Inspection";
        self.inspections = inspectionService.findInspections();
        self.currentInspection = self.inspections[0];

        inspectionService.findVehicleTypes().then(function (result) {
            self.vehicleTypes = result;
        });
        inspectionService.findLightingQuestions().then(function (result) {
            self.lightingQuestions = result;
        });
        inspectionService.findAnswerOptions().then(function (result) {
            self.answers = result;
        });
        inspectionService.findVisibilityQuestions().then(function (result) {
            self.visibilityQuestions = result;
        });

    }]);
