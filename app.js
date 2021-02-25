const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
//console.log(item);

let futureDate = new Date(2021, 4, 24, 11, 30, 0);





const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mintues = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `Giveaway end on ${weekday}, ${date} ${month}, ${year} ${hours}:${mintues}am`;

// future time in miiliisecond

const futureTime = futureDate.getTime();

function getRemaindingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  

  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute = 60*1000;

  let days = t/oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) /oneHour);
  let mintues = Math.floor((t % oneHour) /oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //let set up array

    // set values array
  const values = [days, hours, mintues, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();













