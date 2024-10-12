// Random Generation Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage;

var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSource1);

// Random Generation Dice 1

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);

// Winner Text

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player2 Wins";
} else {
  document.querySelector("h1").innerText = "Tie!  Roll Again";
}
