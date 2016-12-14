var eVisApp = angular.module('eVis', ['ionic','eVis.Main', 'eVis.Inspection', 'eVis.Tickets', 'eVis.Contacts', 'eVis.routes',
    'eVis.services', 'eVis.directives'])

    .run(function () {

        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {}
    })


    .config(function ($ionicConfigProvider, $httpProvider) {

        $ionicConfigProvider.scrolling.jsScrolling(false);
        $ionicConfigProvider.views.swipeBackEnabled(false);
        $ionicConfigProvider.views.transition('none');


        $httpProvider.defaults.timeout = typeof Constants.TimeoutKeys.HTTP_CONNECT_TIMEOUT;
        $httpProvider.defaults.headers.common = {
            "X-EF-DEVICE_ID": /*"58340507169805616357220011"*/  JSON.parse(storage.getItem(Constants.DBKeys.DEVICE_ID)),
            "X-EF-API_KEY": Constants.IntroConstants.API_KEY /*storage.getItem("API_KEY")*/,
            "X-EF-AUTH_TOKEN": storage.getItem(Constants.DBKeys.AUTH_TOKEN),
            "Content-Type": "application/json"
        };


    });



