/**
 * Created by USER12 on 12/4/2016.
 */
angular.module('eVis')
    .component("myNotifications", {
        templateUrl: "app/components/mynotifications/mynotifications.html",
        controller: "MyNotificationController",
        bindings: {
            dashContent: "@"
        }

    })
    .controller("MyNotificationController", ["$log", "InspectionService", function ($log, inspectionService) {
        $log.log("notification page starting...");
        var self = this;
        self.title = "Notifications";
        self.inspections = inspectionService.findInspections();
    }]);
