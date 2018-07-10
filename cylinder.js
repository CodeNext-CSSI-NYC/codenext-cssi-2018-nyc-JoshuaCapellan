//Author: Joshua Capellan

let readline = require("readline-sync");

console.log("Hello User, welcome to the Cylinder Solver. Here, you can find ou the colume or surface area of any cylinder.");

let userName = readline.question("What is your name: ");

let radius = readline.question(userName + " what is the radius of the base: ")
let height = readline.question(userName + " what is the height of the cylinder: ")

console.log("Options:")

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