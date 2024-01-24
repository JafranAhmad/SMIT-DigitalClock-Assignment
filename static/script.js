// Array of month names
let monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Array of Day
let dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

function timeCalculator() {
  let nowDate = new Date();

  let hourIndex = nowDate.getHours();
  let ampm = hourIndex >= 12 ? "PM" : "AM";
  hourIndex = hourIndex % 12 || 12;
  let format = document.querySelector("#ampm");
  format.innerHTML = ampm;

  let hours = document.querySelector("#hour");
  if(hourIndex < 10 && hourIndex >= 0) {
    hours.innerHTML = `0${hourIndex}`;
  }else {
      hours.innerHTML = `${hourIndex}`;
  }

  let minIndex = nowDate.getMinutes();
  let minutes = document.querySelector("#minute");
  if (minIndex < 10 && minIndex >= 0) {
    minutes.innerHTML = `: 0${minIndex}`;
  }else {
      minutes.innerHTML = `: ${minIndex}`;
  }

  let secIndex = nowDate.getSeconds();
  let second = document.querySelector("#second");
  if (secIndex < 10 && secIndex >= 0) {
    second.innerHTML = `: 0${secIndex}`;
  }else {
      second.innerHTML = `: ${secIndex}`;
  }

  let month = monthNames[nowDate.getMonth()];
  let months = document.getElementById("month");
  months.innerHTML = `${month} ,`;


  let dayIndex = nowDate.getDay();
  let day = dayNames[dayIndex];
  let today = document.querySelector("#day");
  today.innerHTML = `${day} /`;

  let todayDate = nowDate.getDate();
  let getDate = document.querySelector("#todayDate");
  if(todayDate < 10 && todayDate >= 0) {
    getDate.innerHTML = `0${todayDate}`;
  }else{
      getDate.innerHTML = `${todayDate}`;
  }

  let years = document.getElementById("year");
  years.innerHTML = `/ ${nowDate.getFullYear()}`;
}

setInterval(() => {
    timeCalculator();
}, 1000);
