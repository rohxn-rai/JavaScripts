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
if(markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`)
}

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
if(markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`)
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`)
}