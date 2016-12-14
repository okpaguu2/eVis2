/**
 * Created by USER12 on 12/4/2016.
 */
angular.module('eVis')
    .component("myProfile", {
        templateUrl: "app/components/myprofile/myprofile.html",
        controller: "MyProfileController",
        bindings: {
            dashContent: "@"
        }

    })
    .controller("MyProfileController", ["$log", "InspectionService", function ($log, inspectionService) {
        $log.log("profile page starting...");
        var self = this;
        self.title = "Notifications";
        self.inspections = inspectionService.findInspections();
    }]);
