/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const hourString = time.split(":");
  const hourInt = parseInt(hourString, 10);
  
  if (hourInt < 12) {
  return displayMessage("Good Morning");
  }

  else if (hourInt >= 12 && hourInt <= 17) {
    return displayMessage("Good Afternoon");
  }

  else {
    return displayMessage("Good Evening");
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const element = document.getElementById("greeting");
  element.innerText = message;
  return message;
}
