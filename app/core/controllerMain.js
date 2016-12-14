
    angular.module('eVis.Main', [])
        .controller('eVisMainCtrl', function ($rootScope, $state, $http, $scope, $stateParams, $filter, $ionicSideMenuDelegate,
                                              $ionicHistory, $ionicLoading, eVisService) {


                $scope.gotoSignOut = function () {

                    eVisService.saveDataToDB(Constants.DBKeys.AUTHENTICATED, false);
                    $state.go('authentication');

                }

                $scope.gotoLogin = function (username, password) {
                    if ($("#login_form").valid()) {

                        var loginRequest = {"username": username, "password": password};

                        $ionicLoading.show({
                            template: '<ion-spinner></ion-spinner><br/>Signing In. Please wait...'
                        });

                        $http.post(Constants.Urls.loginUrl, loginRequest).then(function (response) {

                            $ionicLoading.hide();

                            if (response != undefined && response.data.responseCode == Constants.ResponseCodes.SUCCESS) {

                                $state.go('dashboard_main');

                            } else if (response.data.responseCode == Constants.ResponseCodes.AUTHENTICATION_ERROR) {

                                eVisService.showToast(Constants.Messages.InvalidCredentials);

                            } else if (response.data.responseCode == Constants.ResponseCodes.FAILED_VERIFICATION) {

                                $state.go("tabs.verifyOTPGuest", {action_type: Constants.SMSKeys.SIGN_UP});

                            } else {
                                eVisService.showToast(response.data.responseMessage);
                            }

                        }, function (error) {

                            $ionicLoading.hide();
                            eVisService.showToast(Constants.Messages.NetworkError);
                        });


                    } else {

                        eVisService.showToast(Constants.Messages.EmptyFields);


                    }


                }

                $scope.goTo = function (page) {

                    $state.go(page);

                }

                $scope.goBack = function () {
                    $ionicHistory.goBack();
                }

                $scope.gotoHome = function () {

                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner>'
                    });

                    $timeout(function () {
                        $ionicLoading.hide();
                        $state.go('dashboard_main');
                    }, 2000);
                }


            }
        )




