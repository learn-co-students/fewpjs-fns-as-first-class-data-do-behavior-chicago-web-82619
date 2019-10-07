/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){
  string = string.split(":")[0] + string.split(":")[1];
  if(string < 1200){
    return "Good Morning"
  } else if (1700 >= string && 1200 <= string) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}

function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}