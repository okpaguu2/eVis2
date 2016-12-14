/**
 * Created by USER12 on 12/4/2016.
 */
angular.module('eVis')
    .component("vehicleIdentification", {
        templateUrl: "app/components/identification/vehicle_identification.html",
        controller: "VehicleIdentificationController",
        bindings: {
            dashContent: "@"
        }
    })
    .controller("VehicleIdentificationController", ["$log", "InspectionService", function ($log, inspectionService) {
        $log.log("new inspection form starting...");
        var self = this;
        self.title = "Identification";
        self.inspections = inspectionService.findInspections();
    }]);
