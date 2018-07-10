// Author: Joshua Capellan

// console.log ("Hello World!");
// console.log("It's a beautiful day for programming, isn't it?");
// console.log("Hey! What's 1 + 1?");
// console.log("It's " + 1 + 1 + " of course!");
// console.log("No, it's " + (1 + 1) + ", silly goose!");
// // console.log("This isn't going to get printed, is it?");

let readline = require("readline-sync");
let userName = readline.question("Please type your name: ");
console.log("Welcome " + userName + "!");

let prompt1 = readline.question("What would you like to do today: ");
let prompt2 = readling.question("How will you do that " + userName );
console.log("Let's get to it then " + userName);