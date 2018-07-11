// Author: Joshua Capellan

var readline = require("readline-sync");

var userName = readline.question("Welcome to Rock, Paper, Scissors User, what is your name? ")

const compNum = Math.random() * 3;
let compChoice = compNum;

if (compNum > 0 && compNum < 1){
	compChoice = "rock";
}

else if (compNum > 1 && compNum < 2){
	compChoice = "scissors";
}

else if (compNum > 2 && compNum < 3){
	compChoice = "paper";
}

var userChoice = readline.question(userName + " what is your choice (rock, paper, or scissors)?: ");

if (userChoice == "rock" && compChoice !== "rock"){
	console.log("Congratulations " + userName + "! You won!");
}

else if (userChoice == "paper" && compChoice !== "paper"){
	console.log("Congratulations " + userName + "! You won!");
}

else if (userChoice == "scissors" && compChoice !== "scissors"){
	console.log("Congratulations " + userName + ", you won!");
}
else{
	console.log("Sorry " + userName + ", you lost.");
}