"use strict";
class Locations {
    //constructor for locations
    constructor(name, city, zip_code, address, img_src) {
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.img_src = img_src;
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.img_src = img_src;
    }
    //first part of the card, which will be used also for restaurants and events
    displayCardBegin() {
        return `
    <div class="card">
            <img src="${this.img_src}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${this.name}</h5>
              <p class="card-text">${this.address}</p>
              <p class="card-text">${this.zip_code} ${this.city}</p>
          `;
    }
    //end of the card
    displayCardEnd() {
        return `
    </div>
    </div>
        `;
    }
    //display method connects the card coded pieces and returns the total html code
    display() {
        return this.displayCardBegin() + this.displayCardEnd();
    }
}
//restaurant class inherits from locations
class Restaurant extends Locations {
    //contructor for restaurant including phone, cuisine and web address
    constructor(name, city, zip_code, address, img_src, phone, cuisine, web) {
        super(name, city, zip_code, address, img_src);
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.img_src = img_src;
        this.phone = phone;
        this.cuisine = cuisine;
        this.web = web;
        this.phone = phone;
        this.cuisine = cuisine;
        this.web = web;
    }
    //card extension for restaurant information
    displayCardRestaurant() {
        return `
              <p class="card-text"><a href=${this.web}>${this.web}</a></p>
              <p class="card-text">${this.cuisine}</p>
              <p class="card-text">${this.phone}</p>

          `;
    }
    //display method returns card html code from locations and puts restaurant information in between
    display() {
        return (super.displayCardBegin() +
            this.displayCardRestaurant() +
            super.displayCardEnd());
    }
}
//events class inherits from locations
class Events extends Locations {
    //constructor for events including event date, event time, price and web address
    constructor(name, city, zip_code, address, img_src, eventDate, eventTime, price, web) {
        super(name, city, zip_code, address, img_src);
        this.name = name;
        this.city = city;
        this.zip_code = zip_code;
        this.address = address;
        this.img_src = img_src;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.price = price;
        this.web = web;
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.price = price;
        this.web = web;
    }
    //card extension for restaurant information
    displayCardEvent() {
        return `
                <p class="card-text"><a href=${this.web}>${this.web}</a></p>
                <p class="card-text">${this.eventDate} ${this.eventTime} </p>
                <p class="card-text">${this.price} EUR</p>
            `;
    }
    //display method returns card html code from locations and puts event information in between
    display() {
        return (super.displayCardBegin() +
            this.displayCardEvent() +
            super.displayCardEnd());
    }
}
//create array of locations
let locations = [];
//create locations objects and push to locations array
locations.push(new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "./img/Karlsplatz.jpeg"));
locations.push(new Locations("Zoo Vienna", "Vienna", 1130, "Maxingstraße 13b", "./img/Zoo_Vienna.jpeg"));
//create array of restaurants
let restaurants = [];
//create restaurant objects and push to restaurants array
restaurants.push(new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse 19", "./img/Thai_Restaurant.png", "+43(1)5812308", "Thai", "www.thai-restaurant.com"));
restaurants.push(new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "./img/SIXTA_Restaurant.png", "+43 1 58 528 56", "Austrian", "https://www.sixta-restaurant.at/index.htm#start"));
//create array of events
let events = [];
//create events objects and push to events array
events.push(new Events("Kris Kristofferson", "Vienna", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "./img/EVENT_Kris_Kristofferson.jpeg", "Fr, 15.11.2021", "20:00", 58.5, "http://www.kriskristofferson.com"));
events.push(new Events("Lenny Kravitz", "Vienna", 1150, "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "./img/EVENT_Lenny_Kravitz.jpg", "Sat, 09.12.2029", "19:30", 47.8, "http://www.lennykravitz.com"));
//get html element (position, where to insert location teasers)
let locationDiv = document.getElementById("locationsTable");
if (locationDiv) {
    //if locationDiv has data
    for (let val of locations) {
        //loop through locations array
        locationDiv.innerHTML += val.display(); //write html
    }
}
//get html element (position, where to insert restaurant teasers)
let restaurantDiv = document.getElementById("restaurantsTable");
if (restaurantDiv) {
    //if restaurantDiv has data
    for (let val of restaurants) {
        //loop through restaurant array
        restaurantDiv.innerHTML += val.display(); //write html
    }
}
//get html element (position, where to insert events teasers)
let eventsDiv = document.getElementById("eventsTable");
if (eventsDiv) {
    //if eventsDiv has data
    for (let val of events) {
        //loop through events array
        eventsDiv.innerHTML += val.display(); //write html
    }
}
