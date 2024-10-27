import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from "./localStorage-api.js";

import { refs } from "./refs.js";

// Mykola Mosalov
// 11:05
// Створи файли html і js (./themeSwitch.html, ./themeSwitch.js)
// Використовуй local storage для зберігання вибраної теми (dark / light)
refs.checkbox.addEventListener("click", onCheckBoxChange);
document.addEventListener("DOMContentLoaded", renderPage);
document.addEventListener("DOMContentLoaded", renderCalendar);

// light theme is default, that's why themeSwitcher is unchecked
// themeSwitcher.checked = false;

function onCheckBoxChange(event) {
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class

  const checked = event.target.checked;
  if (checked) {
    addDataToLocalStorage("switch", "dark");
    refs.body.classList.replace("light", "dark");
  } else {
    addDataToLocalStorage("switch", "light");
    refs.body.classList.replace("dark", "light");
  }
}

function renderPage() {
  const lSData = getDataFromLocalStorage("switch");
  if (lSData === "dark") {
    refs.body.classList.replace("light", "dark");
    refs.checkbox.checked = true;
  } else {
    refs.body.classList.replace("dark", "light");
  }
}

// console.log(new Date("2001-01-01"));

// console.log(new Date().getDay());
// console.log(Date.now());

// setInterval(() => {
//   console.log(new Date().getHours());
//   console.log(new Date().getMinutes());
//   console.log(new Date().getSeconds());
// }, 1000);

const clientDate = new Date("2024-01-01");
const currentDate = new Date();

const deff = currentDate - clientDate;

function renderCalendar() {
  const currentDate = new Date();
  const month = currentDate.toLocaleDateString("uk-UA", { month: "long" });
  const year = currentDate.toLocaleDateString("uk-UA", { year: "numeric" });
  const weekDay = currentDate.toLocaleDateString("uk-UA", { weekday: "long" });
  const day = currentDate.toLocaleDateString("uk-UA", { day: "numeric" });

  refs.calendarContainer.querySelector(".js-month").textContent = month;
  refs.calendarContainer.querySelector(".js-day-number").textContent = day;
  refs.calendarContainer.querySelector(".js-day").textContent = weekDay;
  refs.calendarContainer.querySelector(".js-year").textContent = year;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(deff)); // {days: 0, hours: 0, minutes: 0, seconds: 2}

// setTimeout(() => {
//   console.log("1");
// }, 1000);

// console.log("2");

// setTimeout(() => {
//   console.log("3");
// }, 0);

// console.log("4");

/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return "hello world";
// }

// console.log(greet());

// function greet() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello world");
//     }, 2000);
//   });
// }

// greet()
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("finally");
//   });
