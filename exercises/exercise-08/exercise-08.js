/* 

Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 

Hint: Classes for each color have already been defined in the CSS tab.

*/

// 1 -- Select each button

let pinkBtn = document.getElementById("pinkButton");
let greenBtn = document.getElementById("greenButton");
let blueBtn = document.getElementById("blueButton");
let purpleBtn = document.getElementById("purpleButton");

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToPink() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#d9a0b0";
  body.style.color = "#d9a0b0";
}

function switchToGreen() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#8eb59d";
    body.style.color = "#8eb59d";
  }

function switchToBlue() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#7799aa";
  body.style.color = "#7799aa";
}

function switchToPurple() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#ad92bd";
  body.style.color = "#ad92bd";
}
// 2 -- Add an event listener to each circle
grayBtn.addEventListener("click", switchToPink);
whiteBtn.addEventListener("click", switchToGreen);
blueBtn.addEventListener("click", switchToBlue);
yellowBtn.addEventListener("click", switchToPurple);