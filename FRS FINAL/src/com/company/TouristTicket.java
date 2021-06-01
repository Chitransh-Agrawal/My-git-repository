package com.company;

public class TouristTicket extends Ticket {

    private String hotelAddress, location;

    //methods

    public void addLocation(String location){
        System.out.println("location added");
    }

    public void removeLocation(String location){
        System.out.println("location removed");
    }

    //constructor

    public TouristTicket (){
        this("541","nagpur", "mumbai", "1200 pm",
                "0200 pm", 4000,"taj","mumbai");
    }

    public TouristTicket(String pnrNumber, String departure, String destination,
                  String departureTime, String arrivalTime,
                  float price, String hotelAddress, String location) {
        super(pnrNumber, departure,destination,departureTime, arrivalTime, price);
        this.setHotelAddress(hotelAddress);
        this.setLocation((location));
    }
    //getter and setter

    public String getHotelAddress() {
        return hotelAddress;
    }

    public void setHotelAddress(String hotelAddress) {
        this.hotelAddress = hotelAddress;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
