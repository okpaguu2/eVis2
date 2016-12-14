/**
 * Created by USER12 on 12/4/2016.
 */


angular.module('eVis')
    .component("myInspections", {
        templateUrl: "app/components/myinspections/myinspections.html",
        controller: "MyInspectionController",
        bindings: {
        }
    })
    .controller("MyInspectionController", ["$log", "InspectionService", function ($log, inspectionService) {
        $log.log("my newinspection booting...");
        var self = this;
        self.inspections = inspectionService.findInspections();
    }]);
