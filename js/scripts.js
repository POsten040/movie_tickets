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

// const movie1 = {
//   name: "Terminator", 
//   price = 10,
//   rating: "R"
// };

//User Interface Logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    ticket = new Ticket($("input:radio[name=movie]:checked").val(), $("#time").val(), $("#age").val(), $("#ticketNumber").val())
    ticketPrice.addTicket(ticket)
    console.log(typeof(inputAge));
  });
});








// let inputMovie = $("input:radio[name=movie]:checked").val();
// let inputTime = $("#time").val();
// let inputAge = $("#age").val();
// let inputNumberOfTickets = $("#ticketNumber").val();
// ticket = new Ticket(inputMovie, inputTime, inputAge, inputNumberOfTickets)