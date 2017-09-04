// This function to add a zero in front of the number if the number is less than 10
function checkTime (i) {
  // Check if number is less than 10
  if(i < 10) {
    i = "0" + i;

  }
  // Send back new value
  return i;
}

// Runs on page load
function startTime() {
  // Store the time in a variable
  var currentTime = new Date();

  //Store the current hours, minutes and seconds in variables
  var hour = currentTime.getHours();
  var minute = currentTime.getMinutes();
  var second = currentTime.getSeconds();

  //Change military time to standard time if hours is greater than 12
  if (hour > 12) {
    // Remove 12 for hour
    hour = hour - 12;
  }

  // Update variable minute and second using checkTime function from line 1
  minute = checkTime(minute);
  second = checkTime(second);

  //Select element with  id="time" and change the text to the current time
  document.getElementById("time").textContent = hour + ":" + minute + ":" + second;

  //Recalls the function every second, time becomes dynamic
  setTimeout(function(){
      startTime();
  }, 1000);
}

// Add event listener to start function so finally time will be displayed
document.getElementById("time").addEventListener("onload", startTime(), false);
