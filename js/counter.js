// Set the date we're counting down to
var countDownDate = new Date("Apr 05, 2023 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "VAMONOS";
    document.getElementById("hours").innerHTML = "PAL";
    document.getElementById("minutes").innerHTML = "COÑO E";
    document.getElementById("seconds").innerHTML = "SU MADRE";
  }
}, 1000);
