package com.company;

public class Passenger {
    // attributes
    Address address;
    Contact contact;
    // methods

    public void registration (){
        Passenger passenger = new Passenger();
        System.out.println("passenger registered");
    }
    public void bookTicket () {
        System.out.println("ticket booked");
    }
    // contact class begins

    public class Contact {
        private String name, phone, email;
        // methods
        public String contactDetails(){
            return "Name :"+ this.getName() + "Phone :"+ this.getPhone() + "Email :"+ this.getEmail();
        }
        // using setters to contact address details individually

        //constructors

        public Contact(String name, String phone, String email) {
            this.setEmail(email);
            this.setPhone(phone);
            this.setName(name);
        }
        public Contact(){
            this("xyz", " 123456789", "xyz@gamil.com");
        }
        public Contact(Contact contact){
            this.setEmail(contact.getEmail());
            this.setPhone(contact.getPhone());
            this.setName(contact.getName());
        }


        // getter and setters

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getPhone() {
            return phone;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }
    public class Address {
        private String Street, City, State;
        // methods
        public String getAddressDetails(){
            return "Street :"+ this.getStreet() + "City :"+ this.getCity() + "State :"+ this.getState();
        }
        // using setters to update address details individually

        //constructors
        public Address (String Street, String City, String State){
            this.setCity(City);
            this.setStreet(Street);
            this.setState(State);
        }

        public Address (){
            this("1, xyz road", "mumbai","maharashtra");
        }

        public Address (Address address){
            this.setCity(address.getCity());
            this.setStreet(address.getStreet());
            this.setState(address.getState());
        }

        // getter setter for address
        public String getStreet() {
            return Street;
        }

        public void setStreet(String street) {
            Street = street;
        }

        public String getCity() {
            return City;
        }

        public void setCity(String city) {
            City = city;
        }

        public String getState() {
            return State;
        }

        public void setState(String state) {
            State = state;
        }
    }
}
