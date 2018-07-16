// Create a new file called trivia.js.
// Ask the user questions about anything you want, and then tell them if their answers are right or wrong. You can ask many questions in one file.
// Bonus: Keep score and tell them at the end something like: "You answered __ correctly out of a possible ____."
// Have you classmates play your game and see how they do.

var readline = require("readline-sync");

var userName = ("Welcome to Trivia User, what is your name? ");

console.log("Question 1:")
let score = 0;

let options = ['United States History' , 'Basketball']
var index = readline.keyInSelect(options, "What category would you like to play? ");
console.log(index);

if (options[index] == "United States History"){
	let prompt1 = readline.question("Who was the third President of the United States? ");
		if(prompt1 =='Thomas Jefferson' || prompt1 == "thomas jefferson"){
			score++;
		}
	let prompt2 = parseFloat(readline.question("What year did the War of 1812 end? "));
		if(prompt2 == "1815"){
			score++;
		}
	let prompt3 = readline.question("What is the 49th state? ");
		if(prompt3 == "Alaska" || prompt3 == "alaska"){
			score++;
		}
	let prompt4 = parseFloat(readline.question("How many states did the United States have in 1776? "))
		if(prompt4 = "13"){
			score++;
		}
	let prompt5 = readline.question("Tallahassee is the capital of which state? ")
		if (prompt5 == "florida" || prompt5 == "Florida"){
			score++;
		}
	let prompt6 = readline.question("Which city (full name) is known as the Big Apple? ");
		if(prompt6 == "New York" || prompt6 == "New York City"){
			score++;
		}
	let  prompt7 = parseFloat(readline.question("What year was Pearl Harbor attacked by the Japanese Air Force? "));
		if(prompt7 == "1941"){
			score++;
		}
	let prompt8 = readline.question("What does the DC in Washington DC stand for? ");
		if(prompt8 == "District of Columbia" || prompt8 == "district of columbia"){
			score++;
		}
	let prompt9 = parseFloat(readline.question("How many stripes are there on the United States Flag? "));
		if(prompt9 == "13"){
			score++;
		}
	let prompt10 = readline.question("Give the first and last name of the man who discovered America: ");
		if(prompt10 == "Christopher Columbus" || prompt10 == "christopher colombus"){
			score++;
		}
}

else if (options[index] == "Basketball"){
	let q1 = parseFloat(readline.question("How many rings did Bill Russell win consecutively? "));
		if(q1 == "8"){
			score++;
		}
	let q2 = parseFloat(readline.question("What number did Michael Jordan wear when he returned to the NBA? "));
		if (q2 == "45") {
			score++;
		}
	let q3 = readline.question("What team does Ben Simmons play for? ");
		if (q3 == "Philadelphia" || q3 == "76ers" || q3 == "6ers"){
			score++;
		}
	let q4 = readline.question("What team does Kyrie Irving play for? ");
		if (q4 == "Celtics" || q4 == "Boston"){
			score++;
		}
	let q5 = readline.question("What team did Kobe Bryant play for? ");
		if (q5 == "Lakers" || q5 == "Los Angeles"){
			score++;
		}
	let q6 = parseFloat(readline.question("What number did Michael Jordan wear before he left the NBA? "));
		if (q6 == "23"){
			score++;
		}
	let q7 = readline.question("Which position is usually the talles player on the team? ");
		if (q7 == "center" || q7 == "Center"){
			score++;
		}
	let q8 = parseFloat(readline.question("What is the highest amount of points scored in a game in the NBA? "));
		if (q8 == "100" || q8 == "100 points");
	let q9 = readline.question("What is the name of the women's version of the NBA? ");
		if (q9 == "WNBA" || q9 == "wnba"){
			score++;
		}
	let q10 = parseFloat(readline.question("How many points is a shot behind the arc worth? "));
		if (q10 == "3"){
			score++;
		}
}

console.log("Your score was " + score + ".");



// let options = ['Volume' , 'Surface Area'];
// let index = readline.keyInSelect(options, 'What do you want to find?');
// console.log(index)

// 	if (options[index] == "Volume"){
// 		console.log(Math.PI * radius**2 * height);
// 	}
// 	else if (options[index] == "Surface Area"){
// 		console.log((2 * Math.PI * radius * height) + (2 * Math.PI * radius**2));
