// Author: Joshua Capellan
// This is my trivia game.

console.clear();
var readline = require("readline-sync");

var userName = ("Welcome to Trivia User, what is your name? ");

console.log("Question 1:")
let score = 0;

let options = ['United States History' , 'Basketball', 'Video Games'];
var index = readline.keyInSelect(options, "What category would you like to play? ");
console.log(index);

if (options[index] == "United States History"){
	let prompt1 = readline.problem("Who was the third President of the United States? ");
		if(prompt1.toLowerCase() == "thomas jefferson"){
			score++;
			console.log("You got it right!")
		} else if (prompt1.toLowerCase() != "thomas jefferson"){
			console.log("You got it wrong.")
		}
	let prompt2 = parseInt(readline.problem("What year did the War of 1812 end? "));
		if(prompt2 == 1815){
			score++;
			console.log("You got it right!")
		} else if (prompt2 != 1815){
			console.log("You got it wrong.")
		}
	let prompt3 = readline.problem("What is the 49th state? ");
		if(prompt3.toLowerCase() == "alaska"){
			score++;
			console.log("You got it right!")
		} else if (prompt3.toLowerCase() == "alaska"){
			console.log("You got it wrong.")
		}
	let prompt4 = parseInt(readline.problem("How many states did the United States have in 1776? "))
		if(prompt4 == 13){
			score++;
			console.log("You got it right!")
		} else if (prompt4 != 13){
			console.log("You got it wrong.")
		}
	let prompt5 = readline.problem("Tallahassee is the capital of which state? ")
		if (prompt5.toLowerCase() == "florida"){
			score++;
			console.log("You got it right!")
		} else if (prompt5.toLowerCase() != "florida"){
			console.log("You got it wrong.")
		}
	let prompt6 = readline.problem("Which city (full name) is known as the Big Apple? ");
		if(prompt6.toLowerCase() == "new york" || prompt6.toLowerCase() == "new york city"){
			score++;
			console.log("You got it right!")
		} else if (prompt6.toLowerCase() != "new york" || prompt6.toLowerCase() != "new york city"){
			console.log("You got it wrong.")
		}
	let  prompt7 = parseInt(readline.problem("What year was Pearl Harbor attacked by the Japanese Air Force? "));
		if(prompt7 == 1941){
			score++;
			console.log("You got it right!")
		} else if (prompt7 != 1941){
			console.log("You got it wrong.")
		}
	let prompt8 = readline.problem("What does the DC in Washington DC stand for? ");
		if(prompt8.toLowerCase() == "district of columbia"){
			score++;
			console.log("You got it right!")
		} else if (prompt8.toLowerCase() != "district of columbia"){
			console.log("You got it wrong.")
		}
	let prompt9 = parseInt(readline.problem("How many stripes are there on the United States Flag? "));
		if(prompt9 == 13){
			score++;
			console.log("You got it right!")
		} else if (prompt9 != 13){
			console.log("You got it wrong.")
		}
	let prompt10 = readline.problem("Give the first and last name of the man who discovered America: ");
		if(prompt10.toLowerCase() == "christopher colombus"){
			score++;
			console.log("You got it right!")
		} else if (prompt10.toLowerCase() != "christopher colombus"){
			console.log("You got it wrong.")
		}
}

else if (options[index] == "Basketball"){
	let q1 = parseInt(readline.problem("How many rings did Bill Russell win consecutively? "));
		if(q1 == 8){
			score++;
			console.log("You got it right!")
		} else if (q1 != 8){
			console.log("You got it wrong.")
		}
	let q2 = parseInt(readline.problem("What number did Michael Jordan wear when he returned to the NBA? "));
		if (q2 == 45) {
			score++;
			console.log("You got it right!")
		} else if (q1 != 45){
			console.log("You got it wrong.")
		}
	let q3 = readline.problem("What team does Ben Simmons play for? ");
		if (q3.toLowerCase() == "philadelphia" || q3 == "76ers" || q3 == "6ers"){
			score++;
			console.log("You got it right!")
		} else if (q3.toLowerCase() != "philadelphia" || q3 != "76ers" || q3 != "6ers"){
			console.log("You got it wrong.")
		}
	let q4 = readline.problem("What team does Kyrie Irving play for? ");
		if (q4.toLowerCase() == "celtics" || q4.toLowerCase() == "boston"){
			score++;
			console.log("You got it right!")
		} else if (q4.toLowerCase() != "celtics" || q4.toLowerCase() != "boston"){
			console.log("You got it wrong.")
		}
	let q5 = readline.problem("What team did Kobe Bryant play for? ");
		if (q5.toLowerCase() == "lakers" || q5.toLowerCase() == "los angeles"){
			score++;
			console.log("You got it right!")
		} else if (q5.toLowerCase() != "lakers" || q5.toLowerCase() != "los angeles"){
			console.log("You got it wrong.")
		}
	let q6 = parseInt(readline.problem("What number did Michael Jordan wear before he left the NBA? "));
		if (q6 == 23){
			score++;
			console.log("You got it right!")
		} else if (q6 != 23){
			console.log("You got it wrong.")
		}
	let q7 = readline.problem("Which position does the tallest player on a team usually? ");
		if (q7.toLowerCase() == "center"){
			score++;
			console.log("You got it right!")
		} else if (q7.toLowerCase() != "center"){
			console.log("You got it wrong.")
		}
	let q8 = parseInt(readline.problem("What is the highest amount of points individually scored in a game in the NBA? "));
		if (q8 == 100){
			score++;
			console.log("You got it right!")
		} else if (q8 != 100){
			console.log("You got it wrong.")
		}
	let q9 = readline.problem("What is the name of the women's version of the NBA? ");
		if (q9.toLowerCase() == "wnba"){
			score++;
			console.log("You got it right!")
		} else if (q9.toLowerCase() != "wnba"){
			console.log("You got it wrong.")
		}
	let q10 = parseInt(readline.problem("How many points is a shot behind the arc worth? "));
		if (q10 == 3){
			score++;
			console.log("You got it right!")
		} else if (q10 != 3){
			console.log("You got it wrong.")
		}
}

else if (options[index] == "Video Games") {
	console.log("This option is not yet available. Sorry."); }

// 	let options2 = ['Fortnite' , 'Star Wars'];
// 	var index2 = readline.keyInSelect(options2, "What category would you like to play? ");
// 	console.log(index2);

// 	if(options2[index2] == "Fortnite") {
// 		let question1 = readline.question("In Fortnite Battle Royale, what is the highest possible rarity? ");
// 			if(question1.toLowerCase() == "legendary" || question1.toLowerCase() == "gold"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (question1.toLowerCase() != "legendary" || question1.toLowerCase() != "gold"){
// 				console.log("You got it wrong.")
// 			}
// 		let question2 = parseInt(readline.question("How many types of Scars are there? "));
// 			if(question2 == 2 || question2 == 1){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (question2 != 2 || question2 != 1){
// 				console.log("You got it wrong.")
// 			}
// 		let question3 = readline.question("What is the newest weapon in the game? ");
// 			if(question3.includes("smg")){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (!(question3.includes("smg"))){
// 				console.log("You got it wrong.")
// 			}
// 		let question4 = parseInt(readline.question("? "))
// 			if(question4 == 13){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (question4 != 13){
// 				console.log("You got it wrong.")
// 			}
// 		let question5 = readline.question("Tallahassee is the capital of which state? ")
// 			if (question5.toLowerCase() == "florida"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (question5.toLowerCase() != "florida"){
// 				console.log("You got it wrong.")
// 			}
// 		let question6 = readline.question("Which city (full name) is known as the Big Apple? ");
// 			if(question6.toLowerCase() == "new york" || question6.toLowerCase() == "new york city"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (question6.toLowerCase() != "new york" || question6.toLowerCase() != "new york city"){
// 				console.log("You got it wrong.")
// 			}
// 		let  question7 = parseInt(readline.question("What year was Pearl Harbor attacked by the Japanese Air Force? "));
// 			if(question7 == 1941){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (question7 != 1941){
// 				console.log("You got it wrong.")
// 			}
// 		let question8 = readline.question("What does the DC in Washington DC stand for? ");
// 			if(question8.toLowerCase() == "district of columbia"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (question8.toLowerCase() != "district of columbia"){
// 				console.log("You got it wrong.")
// 			}
// 		let question9 = parseInt(readline.question("How many stripes are there on the United States Flag? "));
// 			if(question9 == 13){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (question9 != 13){
// 				console.log("You got it wrong.")
// 			}
// 		let question10 = readline.question("Give the first and last name of the man who discovered America: ");
// 			if(question10.toLowerCase() == "christopher colombus"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (question10.toLowerCase() != "christopher colombus"){
// 				console.log("You got it wrong.")
// 			}
// 	} 


// 	else if (options2[index2] == "Star Wars") {
		
// 		let problem1 = readline.problem(" ");
// 			if(problem1.toLowerCase() == "thomas jefferson"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem1.toLowerCase() != "thomas jefferson"){
// 				console.log("You got it wrong.")
// 			}
// 		let problem2 = parseInt(readline.problem("What year did the War of 1812 end? "));
// 			if(problem2 == 1815){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem2 != 1815){
// 				console.log("You got it wrong.")
// 			}
// 		let problem3 = readline.problem("What is the 49th state? ");
// 			if(problem3.toLowerCase() == "alaska"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem3.toLowerCase() == "alaska"){
// 				console.log("You got it wrong.")
// 			}
// 		let problem4 = parseInt(readline.problem("How many states did the United States have in 1776? "))
// 			if(problem4 == 13){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem4 != 13){
// 				console.log("You got it wrong.")
// 			}
// 		let problem5 = readline.problem("Tallahassee is the capital of which state? ")
// 			if (problem5.toLowerCase() == "florida"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem5.toLowerCase() != "florida"){
// 				console.log("You got it wrong.")
// 			}
// 		let problem6 = readline.problem("Which city (full name) is known as the Big Apple? ");
// 			if(problem6.toLowerCase() == "new york" || problem6.toLowerCase() == "new york city"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem6.toLowerCase() != "new york" || problem6.toLowerCase() != "new york city"){
// 				console.log("You got it wrong.")
// 			}
// 		let  problem7 = parseInt(readline.problem("What year was Pearl Harbor attacked by the Japanese Air Force? "));
// 			if(problem7 == 1941){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem7 != 1941){
// 				console.log("You got it wrong.")
// 			}
// 		let problem8 = readline.problem("What does the DC in Washington DC stand for? ");
// 			if(problem8.toLowerCase() == "district of columbia"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem8.toLowerCase() != "district of columbia"){
// 				console.log("You got it wrong.")
// 			}
// 		let problem9 = parseInt(readline.problem("How many stripes are there on the United States Flag? "));
// 			if(problem9 == 13){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem9 != 13){
// 				console.log("You got it wrong.")
// 			}
// 		let problem10 = readline.problem("Give the first and last name of the man who discovered America: ");
// 			if(problem10.toLowerCase() == "christopher colombus"){
// 				score++;
// 				console.log("You got it right!")
// 			} else if (problem10.toLowerCase() != "christopher colombus"){
// 				console.log("You got it wrong.")
// 			}
// 	}
// }


console.log("Your score was " + score + " of 10.");

