var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages1 = "dice" + randomNumber1 + ".png";

// var randomImageSource = "images/" + randomDiceImages;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImages1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages2 = "dice" + randomNumber2 + ".png";

// var randomImageSource2 = "images/" + randomDiceImages;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImages2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Won";

} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Won🚩";
}
else {
    document.querySelector("h1").innerHTML = " It is a Draw"
}
