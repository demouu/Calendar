// Get Date
// Dynamically update Date
// Get time
// Dynamically update Calendar. If time has passed, turn textbox grey. If current time, turn red. If future time, turn green.
// Create save buttons. When clicked, saves textbox to localStorage.

var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMM Do YYYY"));
console.log(currentDay);

$(".saveBtn").on("click", function() {
    var description = $(this).siblings(".description").val();
    var time = $(this).siblings(".description").attr("id");
    console.log(description, time);
    localStorage.setItem(time, description);
})

for (let i = 9; i < 21; i++) {
    var userData = localStorage.getItem(i);
    $(`#${i}`).val(userData);
}