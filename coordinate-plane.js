// Author: Joshua Capellan

let readline = require("readline-sync");

console.log("Hello User! Welcome to the Line Segment Solver");

let userName = readline.question("What is your name User: ");

let xCoord1 = readline.question("Please enter the x coordinates of the first point: ");
let yCoord1 = readline.question("Please enter the y coordinates of the first point: ");

let xCoord2 = readline.question("Please enter the x coordinates for the second point: ");
let yCoord2 = readline.question("Please enter the y coordinates for the second point: ");

let options = ['Volume' , 'Surface Area'];
let index = readline.keyInSelect(options, 'What do you want to find?');
console.log(index)

	if (options[index] == "Volume"){
		console.log(Math.PI * radius**2 * height);
	}
	else if (options[index] == "Surface Area"){
		console.log((2 * Math.PI * radius * height) + (2 * Math.PI * radius**2));
	}

console.log("Thank you for using the Cylinder Solver " + userName + ". See you next time.")