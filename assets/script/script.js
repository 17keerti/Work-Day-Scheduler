$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


var saveButton = $('.saveBtn');
saveButton.on("click", function () {
  var plan = $(this).siblings(".textarea").first().val();
  var time = $(this).siblings(".hour").first().text();
  console.log(plan);
  console.log(time);

  localStorage.setItem(time, plan);
});


function timeBlockColor() {
  var currentHour = moment().hour();
  console.log(currentHour);

  $(".hour").each(function () {
    
    var time = $(this).text();
    console.log("here" +time);
    var splitTime = time.split();
    var blockTime = parseInt(splitTime[0]);
    if (splitTime[1] == 'PM') {
      blockTime = blockTime + 12;
    }
    console.log(blockTime);
    if (blockTime > currentHour) {
      $(this).siblings(".textarea").first().addClass("future");
    } else if (blockTime === currentHour) {
      $(this).siblings(".textarea").first().addClass("present");
    } else {
      $(this).siblings(".textarea").first().addClass("past");
    }
  })
}

timeBlockColor();