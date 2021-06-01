package com.company;



public class Flight {
    //attributes
    private String flightNumber, airlineName;
    int capacity, totalNumberOfBookedSeats;
    //methods
    public String getFlightDetails(){
        return "Flight Number : "+ this.getFlightNumber() + "Flight Name : "+this.getAirlineName();
    }
    public int getSeatAvailability(){
        return this.getCapacity()-this.getTotalNumberOfBookedSeats();
    }
    // constructor
    public Flight(){
        this("F-102","SpiceJet", 100, 20);
    }
    public Flight (String flightNumber, String airlineName, int capacity, int totalNumberOfBookedSeats){
        this.setFlightNumber(flightNumber);
        this.setAirlineName(airlineName);
        this.setCapacity(capacity);
        this.setTotalNumberOfBookedSeats(totalNumberOfBookedSeats);

    }
    public Flight(Flight flight){
        this.setFlightNumber(flight.getFlightNumber());
        this.setAirlineName(flight.getAirlineName());
        this.setCapacity(flight.getCapacity());
        this.setTotalNumberOfBookedSeats(flight.getTotalNumberOfBookedSeats());

    }


//getters setters

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public String getAirlineName() {
        return airlineName;
    }

    public void setAirlineName(String airlineName) {
        this.airlineName = airlineName;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getTotalNumberOfBookedSeats() {
        return totalNumberOfBookedSeats;
    }

    public void setTotalNumberOfBookedSeats(int totalNumberOfBookedSeats) {
        this.totalNumberOfBookedSeats = totalNumberOfBookedSeats;
    }
}

