package com.company;

public abstract class Ticket {
    //attributes
    private String pnrNumber, departure, destination, departureTime, arrivalTime;
    private float price;
    private boolean isCancelled = false;

    //aggregation
    private Flight flight;
    private Passenger passenger;

    //methods
    public String getJourneyDuration() {
        return "Difference of " + arrivalTime + " & " + departureTime;
    }

    public void cancelTicket() {
        this.isCancelled = true;
    }

    //constructor
    public Ticket(String pnrNumber, String departure, String destination,
                  String departureTime, String arrivalTime,
                  float price) {
        setPnrNumber(pnrNumber);
        setDeparture(departure);
        setDestination(destination);
        setDepartureTime(departureTime);
        setArrivalTime(arrivalTime);
    }

// getters and setters

    public String getPnrNumber() {
        return pnrNumber;
    }

    public void setPnrNumber(String pnrNumber) {
        this.pnrNumber = pnrNumber;
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public boolean isCancelled() {
        return isCancelled;
    }

    public void setCancelled(boolean cancelled) {
        isCancelled = cancelled;
    }

}
