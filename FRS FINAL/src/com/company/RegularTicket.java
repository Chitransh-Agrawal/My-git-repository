package com.company;

public class RegularTicket {
    //attributs
    private String pnrNumber, departure, destination, departureTime, arrivalTime;
    private float price;
    private boolean isCancelled = false;
    //aggregation
    private Flight flight;
    private Passenger passenger;
    //regular ticket
    private String specialService;

    //methods
    public String getJourneyDuration(){
        return "Difference of "+arrivalTime+" & " + departureTime;
    }
    public void cancelTicket(){
        this.isCancelled = true;
    }

    //constructor
    public RegularTicket (String pnrNumber, String departure, String destination,
                          String departureTime, String arrivalTime,
                          float price,String specialService){
        setPnrNumber(pnrNumber);
        setDeparture(departure);
        setDestination(destination);
        setDepartureTime(departureTime);
        setArrivalTime(arrivalTime);
        setSpecialService(specialService) ;

    }
    public RegularTicket (){
        this("123","nagpur", "mumbai", "1200 pm",
                "0200 pm", 4000f, "food");

    }

    public RegularTicket(RegularTicket regularTicket){
        setPnrNumber(regularTicket.getPnrNumber());
        setDeparture(regularTicket.getDeparture());
        setDestination(regularTicket.getDestination());
        setDepartureTime(regularTicket.getDepartureTime());
        setArrivalTime(regularTicket.getArrivalTime());
        setSpecialService(regularTicket.getSpecialService()) ;

    }






//getter and setter

    public void setSpecialService(String specialService) {
        this.specialService = specialService;
    }

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

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public String getSpecialService() {
        return specialService;
    }

    public void updateSpecialService(String specialService) {
        this.specialService = specialService;
    }
}
