// This game has already been discussed in the notes on the site.
// Do not look back at those notes, that would ruin the learning.
// If you have not yet done so, run npm install random-int in terminal.
// Google "npm random-int" to see how it works.
// We will make a guessing game as follows:
// Set a random number from 1 to 100 to be the answer.
// Ask the user to guess a number.
// If they're wrong, you should ask them to guess again.
// Each time they guess, you should be telling them if their guess was too high or too low.
// Also, you should be tracking how many times they have guessed.
// Then, at the end, when you tell them that they guessed correctly,
// you should mention how many guesses it took them.

// Author: Joshua Capellan
// This is a guessing game where the user attempts to correctly guess a number randomly selected between 1 and 100.

console.clear();
let randomInt = require("random-int");
let readline = require("readline-sync");

// This is where I declare variables for the random number and the amount of attempts it took to guess that number.
let number = randomInt(1, 100);
let attempts = 1;

// This is where I ask the user to enter a number.
let userGuess = parseFloat(readline.question("Please guess a number: ")); 

// This is the loop that checks whether the number is correct or not, and while it isn't correct it'll ask for another number.
while (userGuess != number) {
	userGuess = parseFloat(readline.question("Please guess a number: ")); 
	attempts++;

// This is where I tell the user whether their guess was too high or too low. 
	if (userGuess > number){
		console.log("Your guess is to high.");
	} else if (userGuess < number){
		console.log("Your guess is to low.");
	}
}

// This is what happens if the user guesses correctly. This is outside of the while loop.
if (userGuess == number){
	console.log("You guessed the right number! It took " + attempts + " guesses.");
} 