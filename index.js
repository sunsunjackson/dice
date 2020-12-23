// Game begin message
var bet = prompt("We have two player dices, do you think 1 will win or 2?");

// player 1 image
var num = Math.floor(Math.random() * 6) + 1;
var playerImg = "dice" + num + ".png";
var playerImageSrc = "images/" + playerImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", playerImageSrc);

// player 2 image
var num2 = Math.floor(Math.random() * 6) + 1;
var playerImg2 = "dice" + num2 + ".png";
var playerImageSrc2 = "images/" + playerImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", playerImageSrc2);

// game over message
if (num > num2 && bet == 1) {
  document.querySelector("h1").textContent = "Player 1 wins, YOU WIN!!";
}
if (num > num2 && bet == 2) {
  document.querySelector("h1").textContent = "Player 1 wins, YOU LOST :\\";
}
else if (num2 > num && bet == 2) {
  document.querySelector("h1").textContent = "Player 2 wins, YOU WIN!!";
}
else if (num2 > num && bet == 1) {
  document.querySelector("h1").textContent = "Player 2 wins, YOU LOST :\\";
}
else if (num == num2) {
  document.querySelector("h1").textContent = "It is a DRAW!!";
}
