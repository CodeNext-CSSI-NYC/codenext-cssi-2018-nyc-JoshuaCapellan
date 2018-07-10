// Author: Joshua Capellan

let readline = require("readline-sync");

console.log("Welcome User, today you will be using the Change Machine.");

let userName = readline.question("What is your name User: ");

let cents = readline.question(userName + " please enter an amount of Cents: ");

const quarters = Math.floor(cents / 25);
console.log(quarters + " Quarters");

const dimes = Math.floor((cents - (quarters * 25)) / 10);
console.log(dimes + " Dimes");

const nickels = Math.floor((cents - ((quarters * 25) + (dimes * 10))) / 5);
console.log(nickels + " Nickels");

const pennies = Math.floor((cents - ((quarters * 25) + (dimes * 10) + (nickels * 5))) / 1);
console.log(pennies + " Pennies");

console.log("I hope you are satisfied with this answer.")
console.log("Thank You for using the Change Machine.")
