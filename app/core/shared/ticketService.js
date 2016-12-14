/**
 * Created by USER12 on 12/4/2016.
 */

angular.module("eVis")
    .factory("TicketService", ["$log", "$q", function ($log, $q) {
        $log.log("initiating TicketService...");
        var ticketsIssued = [
            {amount: 25233.34, issuedTo: "Tolu Ashaolu", car: "Toyota Avensis", regNo: "LND 439 UW", ticketNo: "89304309434"},
            {amount: 800.99, issuedTo: "Olisa Enebeli", car: "Nissan Patrol", regNo: "ASA 333 DA", ticketNo: "2343533444"},
            {amount: 4000.55, issuedTo: "Suzzie Sizzle", car: "Ford Explorer", regNo: "SGE 832 GS", ticketNo: "3355332233"},
            {amount: 1500.25, issuedTo: "Author Miller", car: "Peugeot 504", regNo: "EEE 439 ER", ticketNo: "6643433455"},
            {amount: 3400.55, issuedTo: "Baldon Miami", car: "Convertible", regNo: "SGE 832 GS", ticketNo: "3355332233"},
            {amount: 22100.25, issuedTo: "Alexander Baltimore", car: "Mercedes C250", regNo: "DED 883 ER", ticketNo: "234543332"},
            {amount: 9000.55, issuedTo: "James Jones", car: "Ford Explorer", regNo: "JAM 811 JO", ticketNo: "3355332233"},
            {amount: 1300.25, issuedTo: "Jay Zimmerman", car: "Pontiac", regNo: "EEF 222 ER", ticketNo: "1113433455"},
        ];
        return {
            findIssuedTickets: function () {

                var defer = $q.defer();
                try {
                    defer.resolve(ticketsIssued);
                } catch (err) {
                    defer.reject(err);
                }
                return defer.promise;
            }
        };
    }]);
