$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


var saveButton =$('.saveBtn');


  
  

  


saveButton.on("click", function() {
  var plan = $(this).siblings(".textarea").first().val();
  var time = $(this).siblings(".hour").first().text();
  console.log(plan);
  console.log(time);

  localStorage.setItem(plan,time);
});



