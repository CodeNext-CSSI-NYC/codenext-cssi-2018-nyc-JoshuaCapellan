// Create a new file called trivia.js.
// Ask the user questions about anything you want, and then tell them if their answers are right or wrong. You can ask many questions in one file.
// Bonus: Keep score and tell them at the end something like: "You answered __ correctly out of a possible ____."
// Have you classmates play your game and see how they do.

var readline = require("readline-sync");

var userName = ("Welcome to Trivia User, what is your name? ");

console.log("Question 1:")
let score = 0;

let options = ['United States' , 'Sports' , 'Video Games']
var index = readline.keyInSelect(options, "What category would you like to play? ");
console.log(index);

if (options[index]= "United States"){
	let prompt1 = readline.question("Who was the third President of the United States? ");
		if(prompt1 = "Thomas Jefferson" || prompt1 = "thomas jefferson"){
			score++;
		}
	let prompt2 = parseFloat(readline.question("What year did the War of 1812 end? "));
		if(prompt2 = "1815"){
			score++;
		}
	let prompt3 = readline.question("What is the 49th state? ");
		if(prompt3 = "Alaska" || prompt3 = "alaska"){
			score++;
		}
	let prompt4 = parseFloat(readline.question("How many states did the United States have in 1776? "))
		if(prompt4 = "13"){
			score++;
		}
	let prompt5 = 
}



// let options = ['Volume' , 'Surface Area'];
// let index = readline.keyInSelect(options, 'What do you want to find?');
// console.log(index)

// 	if (options[index] == "Volume"){
// 		console.log(Math.PI * radius**2 * height);
// 	}
// 	else if (options[index] == "Surface Area"){
// 		console.log((2 * Math.PI * radius * height) + (2 * Math.PI * radius**2));
