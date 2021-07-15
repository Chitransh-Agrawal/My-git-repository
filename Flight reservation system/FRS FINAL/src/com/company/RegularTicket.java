package com.company;

public class RegularTicket extends Ticket {

    //regular ticket
    private String specialService;
// method
    public String getSpecialService() {
        return specialService;
    }

    public void updateSpecialService(String specialService) {
        this.specialService = specialService;
    }

// contructor
    public RegularTicket(){
    this ("567","mumbai","kolkata",
            "0500pm", "0900 pm", 7000, "food");

    }

    public RegularTicket (String pnrNumber, String departure, String destination,
                  String departureTime, String arrivalTime,
                  float price,String specialService) {

        super("567","mumbai","kolkata",
                "0500pm", "0900 pm", 7000);
            this.setSpecialService(specialService);
        }


    //getter and setter

    public void setSpecialService(String specialService) {
        this.specialService = specialService;
    }
}




