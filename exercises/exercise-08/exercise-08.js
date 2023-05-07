const buttonPink = document.getElementById("button-pink");
const buttonBlue = document.getElementById("button-blue");
const buttonGreen = document.getElementById("button-green");
const buttonYellow = document.getElementById("button-yellow");

buttonPink.addEventListener("click", function() {
  document.body.style.backgroundColor = "#cf87b4";
  notice.style.color = "#4770a9";
});

buttonBlue.addEventListener("click", function() {
  document.body.style.backgroundColor = "#4770a9";
  notice.style.color = "#cf87b4";
});

buttonGreen.addEventListener("click", function() {
  document.body.style.backgroundColor = "#54b194";
  notice.style.color = "#ede394";
});

buttonYellow.addEventListener("click", function() {
  document.body.style.backgroundColor = "#ede394";
  notice.style.color = "#54b194";
});