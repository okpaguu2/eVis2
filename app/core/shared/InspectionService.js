/**
 * Created by USER12 on 12/4/2016.
 */

angular.module("eVis")
    .factory("InspectionService", ["$log", "$q", function ($log, $q) {
        $log.log("initing InspectionService...");
        var inspections = [
            {firstname: "Adebimpe", lastname: "Ayoola", phoneNo: "08048341200", regNo: "WV 519 AAA", car: "Mazda 6"},
            {
                firstname: "Chukwukadibia",
                lastname: "Chinaka",
                phoneNo: "08036341262",
                regNo: "WV 313 AAA",
                car: "Lexus RX 330"
            },
            {firstname: "Iyke", lastname: "Blessed", phoneNo: "09036310000", regNo: "FST 696 AAA", car: "Elantra"},
            {firstname: "Ishola", lastname: "Mujib", phoneNo: "08141376868", regNo: "WV 676 OKT", car: "Honda Accord"}
        ];
        var vehicleTypes = [
            {code: "car", label: "Car"},
            {code: "bus", label: "Bus"},
            {code: "truck", label: "Truck"},
            {code: "trailer", label: "Trailer"}
        ];

        var lightingQuestions = [
            {id: 1, question: "Main and Dipped Beam Headlamps and Front Fog Lights"},
            {id: 2, question: "Front And Rear Position Lamps, Stop Lamps and Direction Indicators"},
            {id: 3, question: "Hazard Warning Lamps, Rear Fog Lights, Reserving Lamps"},
            {id: 4, question: "Side Marker Lamps and Outline Marker Lamps"},
            {id: 5, question: "Control Panel Lights"},
            {id: 6, question: "Reflector and Reflector Plates"},
            {id: 7, question: "Electrical Wiring"}
        ];

        var answers = [
            {code: "good", label: "Good Condition"},
            {code: "bad", label: "Bad Condition"},
            {code: "fair", label: "Fair (Should be changed soon)"}
        ];

        var visibilityQuestions = [
            {id: 1, question: "Sun Visors"},
            {id: 2, question: "Glasses"},
            {id: 3, question: "Rearview Mirrors"},
            {id: 4, question: "Wiper System"},
            {id: 5, question: "Wash Glasses"}
        ];

        return {
            findInspections: function () {
                return inspections;
            },
            findVehicleTypes: function () {
                var defer = $q.defer();
                try {
                    defer.resolve(vehicleTypes);
                } catch (err) {
                    defer.reject(err);
                }
                return defer.promise;
            },
            findLightingQuestions: function () {
                var defer = $q.defer();
                try {
                    defer.resolve(lightingQuestions);
                } catch (err) {
                    defer.reject(err);
                }
                return defer.promise;
            },
            findVisibilityQuestions: function () {
                var defer = $q.defer();
                try {
                    defer.resolve(visibilityQuestions);
                } catch (err) {
                    defer.reject(err);
                }
                return defer.promise;
            },
            findAnswerOptions: function () {
                var defer = $q.defer();
                try {
                    defer.resolve(answers);
                } catch (err) {
                    defer.reject(err);
                }
                return defer.promise;
            }
        };
    }]);
