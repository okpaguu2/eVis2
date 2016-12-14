(function () {

    'use strict'

    angular.module('eVis.services', [])
        .factory('eVisService', function ($http, $ionicPopup, $q, $filter) {

            var promise;

            var eVisService = {
                getDataFromDB: function (key) {
                    if (storage.getItem(key) != undefined) {
                        return JSON.parse(storage.getItem(key));
                    } else {
                        return undefined;
                    }
                },

                saveDataToDB: function (key, value) {
                    if (value != undefined) {
                        storage.setItem(key, JSON.stringify(value));
                    }
                },

                showToast: function (message) {

                    Materialize.toast(message, 4000);

                },

                showAlert: function (title, message) {
                    $ionicPopup.alert({
                        title: title,
                        template: message
                    }).then(function (res) {
                        console.log('ok button clicked');
                    });
                },

                findObjectInArray: function (searchInArray, paramName, paramValue) {

                    return $filter('filter')(searchInArray, {paramName: paramValue});
                },

                parseArrayValuesToNumber: function (array) {
                    var newArray = [];
                    $.each(array, function (index, element) {
                        newArray.push([parseFloat(element)]);
                    })
                    return newArray;
                }

            }
            return eVisService;
        })

})();

