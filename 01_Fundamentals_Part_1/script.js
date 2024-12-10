// This is my personal notes

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


// Data Type Convesion
const inputyear = `1991`;
console.log(inputyear + 18);  // String addition
console.log(Number(inputyear) + 18);  // Number addition
console.log(Number(`Jonas`));  // Not all strings can be converted
console.log(typeof(Number(`Jonas`)));  // NaN(Not a Number) is a invaild NUMBER nut still a NUMBER


// Data Type Coercion
console.log("I am " + 23 + " years old.");
console.log("I am " + "23" + " years old.");
console.log(`23` - `20` - 3);
console.log(`23` * 2);

let n = `1` + 1;  // Coercion into a string
n = n - 1;  // Coersion into a Number
console.log(n);  // Output into a Number

console.log(2+3+4+`5`);  // Final result is a string
console.log(`10`-`4`-`3`-2+`5`);  // Final result is a string


// 5 Falsy Values: 0, ``, undefined, null, NaN
// All other values are truely value

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`Jonas`));
console.log(Boolean({}));
console.log(Boolean(``));

// Can be used very well as a condition statement
const money=0;
if(money) {
    console.log(`Don't spend it all :]`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log(`Yay! Height is defined!`);
} else {
    console.log(`Height is undefined!`);
}


// === or == Equality Operator
// const age = 18  // Number
const age = `18`  // String
if (age === 18) console.log(`You just became an adult :D (Strict)`);
if (age == 18) console.log(`You just became an adult :D (Loose)`);


// Inputs
// Commented because it asks for prompt on each reload
// const favouriteInput = Number(prompt(`What's your favourite number?`));
// console.log(favouriteInput);
// console.log(typeof favouriteInput);

// if (favouriteInput === 23) {
//     console.log(`Cool!, 23 is an amazing number!`);
// } else if (favouriteInput === 7) {
//     console.log(`7 is also a cool number, I guess!`);
// } else {
//     console.log(`${favouriteInput} is not a cool number`);
// }


// Boolean Logic (AND, OR & NOT)

// AND (A AND B)
// Table   False    True
// False   False    False
// True    False    True

// OR (A OR B)
// Table   False    True
// False   False    True
// True    True     True

// NOT (!A)
// Table   False    True
//         True     False

// Example
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense,!hasGoodVision);

if (hasDriverLicense && hasGoodVision) {
    console.log(`Sarah is able to Drive!`);
} else {
    console.log(`Someone else should drive...`);
}

const isTired = false;
console.log(hasDriverLicense || hasGoodVision || isTired);
console.log(hasDriverLicense && hasGoodVision && isTired);

// Better preparing the conditions
if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to Drive!`);
} else {
    console.log(`Someone else should drive...`);
}


// Switch Case Funtion
const day = `Sunday`;   // Don't hard code this. 
                        // It is supposed to be a user input

// Switch vs If-Else
switch(day) {
    case `Monday`:
        console.log(`Fundamentals of JavaScript.`);
        break;
    case `Tuesday`:
        console.log(`OOPS in JavaScript.`);
        break;
    case `Wednesday`:
        console.log(`HTML, CSS and JavaScript.`);
        break;
    case `Thursday`:
        console.log(`Assignment day.`);
        break;
    case `Friday`:
        console.log(`Project day.`);
        break;
    case `Saturday`:
    case `Sunday`:
        console.log(`It's The Weekend enjoy.`);
        break;
    default:
        console.log(`Not a valid day!`);
        break;
}
// `break;` is a very neccessory block otherwise all the code 
// will start to run if it meets the condiiton.

if (day ===`Monday`) {
    console.log(`Fundamentals of JavaScript.`);
} else if (day === `Tuesday`) {
    console.log(`OOPS in JavaScript.`);
} else if (day === `Wednesday`) {
    console.log(`HTML, CSS and JavaScript.`)
} else if (day === `Thursday`) {
    console.log(`Assignment day.`);
} else if (day === `Friday`) {
    console.log(`Project day.`);
} else if (day === `Saturday` || day === `Sunday`) {
    console.log(`It's The Weekend enjoy.`);
} else {
    console.log(`Not a valid day!`);
}