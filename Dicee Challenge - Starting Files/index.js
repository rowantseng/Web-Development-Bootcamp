var randomNumber1 = 1 + Math.floor(Math.random() * 6);
var imgName1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = 1 + Math.floor(Math.random() * 6);
var imgName2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", imgName1);
document.querySelector(".img2").setAttribute("src", imgName2);

if (randomNumber1 > randomNumber2) {
    title = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    title = "Player 2 Wins! 🚩";
}
else {
    title = "Draw!";
}

document.querySelector("h1").innerHTML = title;