/////////////////////////////////////////////////////////////////////////////////////////
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
/////////////////////////////////////////////////////////////////////////////////////////


// BMI calculator

// Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn ** 2);
console.log("BMI of Mark: " + BMIMark);
console.log("BMI of John: " + BMIJohn);

let markHigherBMI = BMIMark>BMIJohn;
console.log(markHigherBMI);

// Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark ** 2);
BMIJohn = massJohn / (heightJohn ** 2);
console.log("BMI of Mark: " + BMIMark);
console.log("BMI of John: " + BMIJohn);

markHigherBMI = BMIMark>BMIJohn;
console.log(markHigherBMI);