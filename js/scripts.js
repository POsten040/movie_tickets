//Business Logic
ticketPrice = new TicketPrice()

function TicketPrice() {
  this.tickets = [];
}

TicketPrice.prototype.addTicket = function(ticket) {
  this.tickets.push(ticket);
}

function Ticket(movie, time, age, numberOfTickets) {
  this.age = age;
  this.movie = movie;
  this.time = time;
  this.numberOfTickets = numberOfTickets;
}

const basePrice = 10

const movie1 = {
  name: "Terminator", 
  price: basePrice,
  rating: "R",
};

const movie2 = {
  name: "Avatar",
  price: basePrice,
  rating: "PG",
};

const movie3 = {
  name: "GhostBusters",
  price: basePrice,
  rating: "R",
}

const movie4 = {
  name: "Big Lebowski",
  price: basePrice,
  rating: "R",
};

const movie5 = {
  name: "Frozen",
  price: basePrice,
  rating: "PG",
}

function movieValue() {
  if ($("input:radio[name=movie]:checked").val() === "movie1") {
    return movie1
  }
  else if ($("input:radio[name=movie]:checked").val() === "movie2") {
    return movie2
  }
  else if ($("input:radio[name=movie]:checked").val() === "movie3") {
    return movie3
  }
  else if ($("input:radio[name=movie]:checked").val() === "movie4") {
    return movie4
  }
  else if ($("input:radio[name=movie]:checked").val() === "movie5") {
    return movie5
  } else alert ("You did not select a movie.")
}
// if (ticket.movie == "movie1") 
// {ticketPrice.addTicket(movie1);}

// const movie2 = {
  //   name: "What About Bob", 
  //   price: basePrice,
  //   rating: "R"
  // };
  // const movie3 = {
    //   name: "The Sandlot", 
    //   price: basePrice,
    //   rating: "R"
    // };
    
    //User Interface Logic
    $(document).ready(function() {
      $("#inputForm").submit(function(event) {
        event.preventDefault();
        ticket = new Ticket(movieValue(), $("#time").val(), $("#age").val(), $("#ticketNumber").val())
        ticketPrice.addTicket(ticket)
      });
      
    });
    
    
    
    
    
    
    
    
    // let inputMovie = $("input:radio[name=movie]:checked").val();
    // let inputTime = $("#time").val();
    // let inputAge = $("#age").val();
    // let inputNumberOfTickets = $("#ticketNumber").val();
    // ticket = new Ticket(inputMovie, inputTime, inputAge, inputNumberOfTickets)
    
    
    
    // function Movie()
    
    // function Movie(name, price, rating) {
      //   this.name = name;
      //   this.price = price;
      //   this.rating = rating;
      // }