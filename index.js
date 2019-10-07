/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let time = parseInt(string);
  if(time < 12) {
    return 'Good Morning';
  } else if(time >=12  && time < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

function displayMessage(string) {
  let m = document.getElementById("greeting");
  m.innerText = string;
}