/**
 * Created by USER12 on 12/6/2016.
 */

angular.module("eVis")
    .component("appHeader", {
        template: '<header><a href="#" class="call-link" title="call"></a><h4>{{$ctrl.pageTitle}}</h4><a href="#" class="config-link" title="config"></a></header>',
        bindings: {
            pageTitle: "@"
        },
        controller: function () {
            var self = this;
            console.log("self: ", self);
        }
    });