/**
 * Created by USER12 on 12/2/2016.
 */
angular.module('eVis')
    .component("dashboard", {
        templateUrl: "app/components/dashboard/dashboard.html",
        controller: "DashboardController",
        bindings: {
            dashContent: "@"
        }
    })
    .controller("DashboardController", ["$log", function ($log) {
        $log.log("stuff gets done in here...: ", this.dashContent);
    }]);
