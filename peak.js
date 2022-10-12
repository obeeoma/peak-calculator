"use strict";
// Declare variables
const days = document.querySelectorAll(".day");
const rows = document.querySelectorAll(".row");
const reset = document.querySelector("#reset");
reset.addEventListener("click", clearAll, false);
const variability = document.querySelectorAll(".variability");
const btn = document.querySelector("button");
btn.addEventListener("click", checkVariability, false);
const date = document.querySelector("#date");
date.addEventListener("change", (e) => {
  let selectedDate = new Date(date.value);
  console.log(selectedDate);
  let d = selectedDate.getDate();
  let m = selectedDate.getMonth();
  let y = selectedDate.getFullYear();
  console.log(m);
  let nextDays = [];
  for (let i = 0; i < days.length; i++) {
    let nextDate = new Date(y, m, d + i);
    nextDays.push(nextDate);
    let day = nextDate.getDate();
    let month = nextDate.getMonth() + 1;
    let year = nextDate.getFullYear();
    days[i].textContent = day + "/" + month + "/" + year;
  }
});
// Function to clear all values
function clearAll(e) {
  for (let x = 0; x <= rows.length; x++) {
    rows[x].children[0].textContent = "";
    rows[x].children[1].children[0].value = "";
    rows[x].children[2].children[0].value = "";
    rows[x].children[3].children[0].value = "";
    rows[x].children[4].textContent = "";
    date.value = "";
  }
}

// Function to check variability
function checkVariability(e) {
  for (let x = 0; x <= rows.length; x++) {
    let values = [];
    let amValue = parseFloat(rows[x].children[1].children[0].value);
    let midValue = parseFloat(rows[x].children[2].children[0].value);
    let pmValue = parseFloat(rows[x].children[3].children[0].value);

    values.push(amValue);
    values.push(midValue);
    values.push(pmValue);

    // Calculate mean of values
    let mean = (amValue + midValue + pmValue) / 3;
    let largest = Math.max(...values);
    let smallest = Math.min(...values);
    // Calculate Variability
    let variabilityValue = Math.round(((largest - smallest) / mean) * 100);
    console.log("Largest value: " + largest);
    console.log("Smallest value: " + smallest);
    console.log("Mean = " + mean);
    console.log("Variability:" + variability);
    // Enter data into column for Variability
    rows[x].children[4].textContent = variabilityValue;
  }
}
