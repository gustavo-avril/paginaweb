const countDownDate = new Date("Apr 6, 2023 18:00:00").getTime();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  console.log(distance);
  //let hours = document.getElementById("hours");
  //let minutes = document.getElementById("minutes");
  //let seconds = document.getElementById("seconds");
  //let ampm = document.getElementById("ampm");

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;

  let dd = document.getElementById("dd");
  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  let dd_dot = document.querySelector('.dd_dot');
  let hr_dot = document.querySelector('.hr_dot');
  let min_dot = document.querySelector('.min_dot');
  let sec_dot = document.querySelector('.sec_dot');

  let d = days;
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

 
  days.innerHTML = d + '<br /><span>Days</span>';
  hours.innerHTML = h + '<br /><span>Hours</span>';
  minutes.innerHTML = m + '<br /><span>Minutes</span>';
  seconds.innerHTML = s + '<br /><span>Seconds</span>';
  ampm.innerHTML = am;

  dd.style.strokeDashoffset = 440 - (440 * d) / 60;
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  dd_dot.style.transform = `rotate(${d * 30}deg)`;
  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
}, 1000);