//Author: Joshua Capellan

var readline = require("readline-sync");
var randomInt = require('random-int');

console.log("Welcome User, today you will be playing the Guessing Game!");
var userName = readline.question("What is your name User: ");

var ourNum = randomInt(1, 10); 
var userNum = readline.question("Please guess a number from 1 to 10: ");

if(userNum == ourNum) {
  console.log("You guessed it! Lucky!");
}

else if (userNum < ourNum){
  console.log("Sorry, " + userName + " your guess was too low!");
} 

else {
  console.log("Sorry, " + userName + " your guess was too high!");
}