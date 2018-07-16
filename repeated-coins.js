// Use a for loop to simulate flipping a coin 100 times.
// Think carefully about how you could use Math.random() or random-int to do this.
// (There are several possible answers.)
// Keep track of how many of the flips are heads.
// Print out the total number of flips and the total number of heads at the end.
// How often is it exactly 50/100? Fun fact: this should only happen about 8% of the time.

// Author: Joshua Capellan
// This code calculates how many flips are done and how many times the "coin" flips heads.

console.clear();
let randomInt = require("random-int");
let readline = require("readline-sync");

// This is where I ask the User for their name.
console.log("Hello User, and Welcome to Coin Flipper!");
var userName = readline.question("User, what is your name: ");

// This is where the user is asked how many times the computer should flip the coin.
let totalFlips = parseFloat(readline.question("How many times would you like the coin to flip " + userName + "? "));

var heads = 0;
var tails = 0;

// This is where I declare and then intialize a variable to mean the result of the coin flip.
for (var i = 0; i < totalFlips; i++) {
	let num = Math.random();

	if (num < 0.5){
		heads++;
	}
	else {
		tails++;
	}
}

console.log("Of the " + totalFlips + " times the coin flipped, it was heads " + heads + " times, and tails " + tails + " times.");
