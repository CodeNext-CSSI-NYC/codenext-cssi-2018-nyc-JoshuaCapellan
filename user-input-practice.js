// Author: Joshua Capellan

let readline = require("readline-sync");
console.log("Welcome User, today I will be asking you a few questions!");

// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)
console.log("Part 1: Enter a number and learn the square root.");
let prompt1 = readline.question("Please pick a number: ");
console.log("The square root of " + prompt1 + " is " + Math.sqrt(prompt1) + ".");

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!
console.log("Part 2: Enter your name and learn how many letters it has.");
let prompt2 = readline.question("Please enter your name: ");
console.log("Your name has " + prompt2.length + " letters.");

// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...
console.log("Part 3: Enter a word and learn the first letter.");
let prompt3 = readline.question("Please enter a word " + prompt2 + ":");
console.log("The first letter of the word is " + prompt3.charAt() + ".");

// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.
console.log("Part 4: Enter to numbers to learn their average " + prompt2 + ".");
let prompt4 = parseFloat(readline.question("Please enter the first number: "));
let prompt5 = parseFloat(readline.question("Please enter the second number: "));
console.log("The average of " + (prompt4 + prompt5) + " is " + ((prompt4 + prompt5)/2) + ".")

console.log("Congratulations " + prompt2 + " you finished!")