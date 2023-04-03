function updateCountdown() {
  var now = new Date().getTime();
  var countdownDate = new Date("Apr 6, 2023 00:00:00").getTime();
  var distance = countdownDate - now;
  

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;

  // Actualizar círculos de progreso
  var dayCircle = Circles.create({
    id: 'days-circle',
    radius: 70,
    value: days,
    maxValue: 365,
    width: 10,
    text: function(value) { return value + 'd'; },
    colors: ['#eee', '#007bff'],
    duration: 500,
    startAngle: Math.PI / 2,
    endAngle: 3 * Math.PI / 2
  });

  var hourCircle = Circles.create({
    id: 'hours-circle',
    radius: 70,
    value: hours,
    maxValue: 24,
    width: 10,
    text: function(value) { return value + 'h'; },
    colors: ['#eee', '#007bff'],
    duration: 500,
    startAngle: Math.PI / 2,
    endAngle: 3 * Math.PI / 2
  });

  var minuteCircle = Circles.create({
    id: 'minutes-circle',
    radius: 70,
    value: minutes,
    maxValue: 60,
    width: 10,
    text: function(value) { return value + 'm'; },
    colors: ['#eee', '#007bff'],
    duration: 500,
    startAngle: Math.PI / 2,
    endAngle: 3 * Math.PI / 2
  });

  var secondCircle = Circles.create({
    id: 'seconds-circle',
    radius: 70,
    value: seconds,
    maxValue: 60,
    width: 10,
    text: function(value) { return value + 's'; },
    colors: ['#eee', '#007bff'],
    duration: 500,
    startAngle: Math.PI / 2,
    endAngle: 3 * Math.PI / 2
  });

  // Actualizar círculos de progreso con el tiempo restante
  dayCircle.update(days);
  hourCircle.update(hours);
  minuteCircle.update(minutes);
  secondCircle.update(seconds);
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
