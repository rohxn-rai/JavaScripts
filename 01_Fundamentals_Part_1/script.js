// All outputs in javascript console


// Printing elements
let js = "amazing";
console.log(40+8-12+42);


// Variable VS Hardcode

// Hardcode
console.log("Jonas");
console.log("Jonas"); // Changing one means manually changing all
console.log("Jonas");

// Variables
let fname = "Johnson" // Changing one means changing all at once
console.log(fname);
console.log(fname);
console.log(fname);


// Naming Convention

// Small letters for local and non global constants
let pi = 22/7; // NO

// Capital letters for global and constant variables
let PI = 3.1415; // YES


// Javascript has dynamic variables
let javaIsFun = true;
console.log(javaIsFun);

console.log(typeof true);
console.log(typeof javaIsFun);
console.log(typeof 23);
console.log(typeof 'jonas');

javaIsFun = 'YES!';
console.log(typeof javaIsFun);

let year;
console.log(year);
console.log(typeof year);

year=1991;
console.log(typeof year);


console.log(typeof null);


const PIE = 3.14;

// Never try to change the const variable
// PIE = 3.141


// Operater are same for all languages both assignment and mathematical operator


// Comparative opperator

// > , < , >= , <= , <>

// MDN Opperator proceedence
// it has all the squence of order of execution mentioned in the order of their occurance


// Strings
const firstName="John";
const lastName="Smith";
const birthYear=2002;
const job="Developer";
const nowYear=2025;

// Before ES6
const john = "I'm " + firstName + ", a " + (nowYear - birthYear) + " year old " + job + "!";
console.log(john);
console.log("String with\n\
multiple\n\
lines");

// After ES6
const johnNew = `I'm ${firstName}, a ${nowYear-birthYear} year old ${job}!`;
console.log(johnNew);
console.log(`String with
multiple
lines`);


// If Else Statement
const sarahBirthYear = 2002;
const johnBirthYear = 2008;
const jisOldEnough = johnBirthYear - nowYear > 17;
if(jisOldEnough) {
    console.log(`John is old enough!`);
}
else {
    const yearsLeft = 18 - (nowYear - johnBirthYear);
    console.log(`John is not old enough! Wait for ${yearsLeft} years to apply.`);
}

if(nowYear-sarahBirthYear>17) {
    console.log(`Sarah is old enough!`);
}
else {
    const yearsLeft = 18 - (nowYear - sarahBirthYear);
    console.log(`Sarah is not old enough! Wait for ${yearsLeft} years to apply.`);
}