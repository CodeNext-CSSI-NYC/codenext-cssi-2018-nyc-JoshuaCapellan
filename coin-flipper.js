// Use Math.random() to get a number from 0 to 1.
// Use let result to declare a variable that will represent the result of the flip.
// If the number is below 0.5 set result to "heads", otherwise "tails".
// Ask the user to guess heads or tails.
// Tell them if they were right or wrong.

var readline = require("readline-sync");

console.log("Hello User, and Welcome to Coin Flipper!");
var userName = readline.question("User, what is your name: ");

var result;

let num = Math.random();
if (num < 0.5){
	result = "heads";
}
else {
	result = "tails";
}

var userAnswer = readline.question("Will the coin land heads or tails: ");
if (userAnswer == "heads" && result == "heads"){
	console.log(userName + " your were right!");
}
else if (userAnswer = "tails" && result == "tails"){
	console.log(userName + ", sorry you were wrong.");
}