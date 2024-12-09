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