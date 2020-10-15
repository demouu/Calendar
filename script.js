// Get Date
// Dynamically update Date
// Get time
// Dynamically update Calendar. If time has passed, turn textbox grey. If current time, turn red. If future time, turn green.
// Create save buttons. When clicked, saves textbox to localStorage.

var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMM Do YYYY"));
console.log(currentDay);