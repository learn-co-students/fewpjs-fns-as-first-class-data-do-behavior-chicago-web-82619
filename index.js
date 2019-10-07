/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(str) {
  let time = str.split(":")
  if(time[0] < 12) return "Good Morning";
  else if (time[0] > 17) return "Good Evening";
  return "Good Afternoon"
}

function displayMessage(str) {
  document.getElementById('greeting').innerText = str
}