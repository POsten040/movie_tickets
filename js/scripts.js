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

function timeValue() {
  if (parseInt($("#time").val()) <= 3) {
    return .75
  }
  else return 1
}



function ageValue() {
  if (parseInt($("#age").val()) <= 60) {
    return 1
  }
  else return .75
}

    //User Interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    ticket = new Ticket(movieValue(), timeValue(), ageValue(), parseInt($("#ticketNumber").val()));
    ticketPrice.addTicket(ticket);
    outputPrice = ticketPrice.tickets[0].movie.price * ticketPrice.tickets[0].age * ticketPrice.tickets[0].numberOfTickets * ticketPrice.tickets[0].time
    $(".ticket-price").text(outputPrice);

  });
  
});

