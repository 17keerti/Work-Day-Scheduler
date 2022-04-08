# Work-Day-Scheduler
This is a calendar application that allows user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.



## Technology used
- HTML
- CSS
- Javascript
- Bootstrap
- jQuery
- Moment.js


## Screenshots
![Screenshot 1](./assets/images/01.png)


## Code
Defined function to check the time and add the classes for background indicators and setInterval to update time every second.

```
function timeBlockColor() {
  var currentHour = moment().hour();
  $(".hour").each(function () {
    var time = $(this).text();
    var splitTime = time.split();
    var blockTime = parseInt(splitTime[0]);
    if (splitTime[1] == 'PM') {
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
setInterval(timeBlockColor, 1000);
```

## Deployment URL
https://17keerti.github.io/Work-Day-Scheduler/