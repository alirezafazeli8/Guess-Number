"use strict";

// generate random number
const randomGenerator = function () {
	return Math.trunc(Math.random() * (20 - 1) + 1);
};

let randomNumber = randomGenerator();

// default score
let userScore = 20;
let highScore = 0;

// message function
const message = function (message, color) {
	document.querySelector(".message").textContent = message;
	document.querySelector(".message").style.color = color;
};

//  show score for per time
const showScore = function () {
	document.querySelector(".score").textContent = userScore;
};

//show high score
const showHighScore = function (score) {
	document.querySelector(".highscore").textContent = score;
};

const gameLogic = function () {
	const userInputValue = Number(document.querySelector(".guess").value);
	if (!userInputValue) {
		message("pleas Enter Value 😈");
	} else {
		if (userInputValue === randomNumber) {
			message("YaY, You Win ✅🎉😍");
			document.querySelector(".number").textContent = randomNumber;
			userScore += 5;
			highScore += userScore;
			showScore();
			showHighScore(highScore);
			document.querySelector("body").style.backgroundColor = "green";
			document.querySelector(".number").style.width = "30rem";
			document.querySelector(".check").style.display = "none";
		} else if (userInputValue > randomNumber) {
			message("Your Number Is To High 📈");
			userScore--;
			showScore();
		} else if (userInputValue < randomNumber) {
			message("Your Number Is To Low 📉");
			userScore--;
			showScore();
		}
	}
	if (userScore <= 0) {
		message("You Lose The Game 🎃🧧", "black");
		showScore();
		document.querySelector("body").style.backgroundColor = "red";
		document.querySelector(".number").style.width = "30rem";
		document.querySelector(".check").style.display = "none";
	}
};

//again button reset function
const againButton = function () {
	randomNumber = randomGenerator();
	userScore = 20;
	showScore();
	document.querySelector("body").style.backgroundColor = "";
	document.querySelector(".number").style.width = "";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".check").style.display = "";
	message("Start guessing...");
	document.querySelector(".guess").value = "";
};

//  check event
document.querySelector(".check").addEventListener("click", function () {
	gameLogic();
});

// again button event
document.querySelector(".again").addEventListener("click", function () {
	againButton();
});
