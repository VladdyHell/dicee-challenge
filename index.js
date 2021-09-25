var player1 = document.getElementsByClassName("img1")[0];
var player2 = document.getElementsByClassName("img2")[0];
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var randomDice1 = "images/dice" + randomNumber1 + ".png";
var randomDice2 = "images/dice" + randomNumber2 + ".png";

player1.setAttribute("src", randomDice1);
player2.setAttribute("src", randomDice2);

var heading = document.querySelector("h1");

function interpretation() {
  if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "<img src='images/flag.svg'>Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins<img src='images/flag.svg'>";
  } else {
    heading.innerHTML = "<img src='images/flag.svg'> Draw! <img src='images/flag.svg'>";
  }
}
interpretation();
