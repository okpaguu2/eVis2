/**
 * Created by USER12 on 12/4/2016.
 */
angular.module('eVis')
    .component("emergencyContacts", {
        templateUrl: "app/components/emergencycontacts/emergencycontacts.html",
        controller: "EmergencyContactController",
        bindings: {
            dashContent: "@"
        }

    })
    .controller("EmergencyContactController", ["$log", "InspectionService", function ($log, inspectionService) {
        $log.log("contact page starting...");
        var self = this;
        self.title = "Emergency";
        self.inspections = inspectionService.findInspections();
    }]);
