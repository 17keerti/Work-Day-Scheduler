$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


var saveButton = $('.saveBtn');
saveButton.on("click", function () {
  var plan = $(this).siblings(".textarea").first().val();
  var time = $(this).siblings(".hour").first().text();

  localStorage.setItem(time, plan);
});


function timeBlockColor() {
  var currentHour = moment().hour();
  // console.log(currentHour);

  $(".hour").each(function () {
    var time = $(this).text();
    var splitTime = time.split(" ");
    var blockTime = parseInt(splitTime[0]);
    if (splitTime[1] == 'PM' && splitTime[0] !== "12") {
      blockTime = blockTime + 12;
    }
    if (blockTime > currentHour) {
      $(this).siblings(".textarea").first().addClass("future");
    } else if (blockTime === currentHour) {
      $(this).siblings(".textarea").first().addClass("present");
    } else {
      $(this).siblings(".textarea").first().addClass("past");
    }
  })
}


function displayPlan() {
  $(".hour").each(function () {
    var currentHour = $(this).text();
    var currentPlan = localStorage.getItem(currentHour);
    // console.log(currentPlan);
    if (currentPlan !== null) {
      $(this).siblings(".textarea").first().val(currentPlan);
    }
  });
}

timeBlockColor();
displayPlan();
setInterval(timeBlockColor, 1000);