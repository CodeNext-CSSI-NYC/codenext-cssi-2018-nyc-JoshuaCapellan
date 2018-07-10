// Joshua Capellan

let readline = require("readline-sync");

console.log("Welcome User! You are now using the Pythagorean Solver.");
let userName = readline.question("User, please enter your name: ");

let prompt1 = readline.question(userName + " please enter your first number: ");
let prompt2 = readline.question(userName + " please enter your second number: ");
let prompt3 = readline.question(userName + " please enter your third number: ");

if ((prompt1 ** 2) + (prompt2 ** 2) == (prompt3 ** 2)){
	console.log("Yes, this is a Pythagorean Triple.");
}
else {
	console.log("No, this isn't a Pythagorean Triple.");
}

console.log("Thank You for using our Pythagorean Triple Solver.")

