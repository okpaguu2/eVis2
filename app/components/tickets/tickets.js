/**
 * Created by USER12 on 12/7/2016.
 */

angular.module("eVis")
    .component("ticketsIssued", {
        templateUrl: "app/components/tickets/tickets-issued.html",
        controller: "TicketController"
    })
    .controller("TicketController", ["TicketService", function (ticketService) {
        console.log("initing ticket controller");
        var self = this;
        ticketService.findIssuedTickets().then(function(result){
            self.issuedTickets = result;
        });
    }]);
