package com.company;

public class Main {

    public static void main(String[] args) {

        Flight flight = new Flight();
        System.out.println(flight.getFlightDetails());

        RegularTicket regularTicket = new RegularTicket();
        TouristTicket touristTicket = new TouristTicket();
        printTicketDetails(regularTicket);
        printTicketDetails(touristTicket);
    }
    public static void printTicketDetails(Ticket ticket){
        System.out.println(ticket.getPnrNumber());// write your code here
    }
}

