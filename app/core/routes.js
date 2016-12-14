angular.module('eVis.routes', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'app/views/sidemenu_main.html',
                abstract: true
            })
            .state('inspections_side', {
                url: '/inspections_side',
                templateUrl: 'app/views/sidemenu_inspections.html',
                abstract: true
            })

            .state('tickets', {
                url: '/tickets',
                templateUrl: 'app/views/sidemenu_tickets.html',
                abstract: true
            })

            /**
             * My newinspection
             */

            .state('inspections_side.myinspections', {
                url: '/myinspections',
                template: '<my-inspections></my-inspections>',
                views: {
                    'menuContent': {
                        templateUrl: 'app/components/myinspections/myinspections.html',
                        controller: 'eVisMainCtrl'
                    }
                }
            })


            .state('newinspection', {
                url: '/newinspection',
                template: '<new-inspection></new-inspection>'
            })

            .state('vehicleidentification', {
                url: '/vehicleidentification',
                template: '<vehicle-identification></vehicle-identification>'
            })

            .state('outstandingpenalty', {
                url: '/outstandingpenalty',
                template: '<outstanding-penalty></outstanding-penalty>'
            })

            .state('inspecting', {
                url: '/inspecting',
                template: '<inspecting></inspecting>'
            })

            .state("identification", {
                url: "/identification",
                template: "<identification></identification>"
            })

            .state("lightings", {
                url: "/lightings",
                template: "<lightings></lightings>"
            })

            .state("visibility", {
                url: "/visibility",
                template: "<visibility></visibility>"
            })

            .state("ticketsissued", {
                url: "/tickets-issued",
                template: "<tickets-issued></tickets-issued>"
            })

            .state("myprofile", {
                url: "/myprofile",
                template: "<my-profile></my-profile>"
            })
            .state("mycontacts", {
                url: "/mycontacts",
                template: "<my-contacts></my-contacts>"
            })
            .state("emergencycontacts", {
                url: "/emergencycontacts",
                template: "<emergency-contacts></emergency-contacts>"
            })

            .state("mynotifications", {
                url: "/mynotifications",
                template: "<my-notifications></my-notifications>"
            })




            //Dashboard
            .state('dashboard', {
                url: '/dashboard',
                template: '<dashboard dash-content="This is what to display"></dashboard>'
            })


            .state('reset', {
                url: '/login/reset/',
                views: {
                    'menuContent': {
                        templateUrl: 'app/login/reset.html',
                        controller: 'eVisGuestCtrl'
                    }
                }
            })


            .state('changePassword', {
                url: '/login/changePassword/',
                views: {
                    'menuContent': {
                        templateUrl: 'app/login/changePassword.html',
                        controller: 'eVisGuestCtrl'
                    }
                }
            })


            .state('profile', {
                url: '/profile',
                views: {
                    'menuContent': {
                        templateUrl: 'app/login/profile.html',
                        controller: 'eVisMainCtrl'
                    }
                }
            })


            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'eVisMainCtrl'
            })


            .state('enterpin', {
                url: '/enterpin',
                templateUrl: 'app/login/enterpin.html',
                controller: 'eVisMainCtrl'
            })


            .state('intro', {
                url: '/intro',
                templateUrl: 'app/intro/getstarted.html',
                controller: 'eVisMainCtrl'
            })

        $urlRouterProvider.otherwise('/intro')

    })

