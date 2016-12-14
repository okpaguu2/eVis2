/**
 * Created by USER12 on 12/4/2016.
 */
angular.module('eVis')
    .component("myContacts", {
        templateUrl: "app/components/mycontacts/mycontacts.html",
        controller: "MyContactController",
        bindings: {
            dashContent: "@"
        }

    })
    .controller("MyContactController", ["$log", "InspectionService", function ($log, inspectionService) {
        $log.log("contact page starting...");
        var self = this;
        self.title = "Contacts";
        self.inspections = inspectionService.findInspections();
    }]);
