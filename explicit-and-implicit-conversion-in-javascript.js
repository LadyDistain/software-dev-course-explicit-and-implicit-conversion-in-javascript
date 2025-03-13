/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//Part 1

let result = "5" - 2;
console.log("The result is: " + result);

/*
This is correct and reguired no change.
*/

let isValid = Boolean("true");
if (isValid) {
    console.log("This is valid!");
}

/*
isValid is a truthy, so it needed to be changed to "true".
*/

let age = "25";
let totalAge = (Number(age) + 5);
console.log("Total Age: " + totalAge);

/*
The variable age needed to be converted to a number from a string at line 39, so the numbers are added.
*/

// Part 2
let currentYear = "2025";
let birthYear = "1992";
let myAge = (Number(currentYear) - Number(birthYear));

console.log('You are ' + (myAge) + ' years old.');

let bool1 = false;
let num1 = null;
bool1 == num1;

console.log(num1 + bool1)