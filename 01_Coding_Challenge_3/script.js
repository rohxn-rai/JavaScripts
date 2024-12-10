///////////////////////////////////////////////////////////////////////////////////////////
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other
// 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below. The
// average score for Dolphins should be assigned to the scoreDolphins variable, and the 
// average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition, and
// print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy.
// TEST DATA:
// Data 1: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.
///////////////////////////////////////////////////////////////////////////////////////////

// Finding a Winner

// Main function/logic
function findingWinner (scoreDolphins,scoreKoalas) {
    if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
        console.log(`Dolphins win the trophy`);
    } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
        console.log(`Koalas win the trophy`);
    } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
        console.log(`Both win the trophy`);
    } else {
        console.log(`No team wins trophy`);
    }
}


// Data 1
let scoreDolphins = (96+108+89)/3;
let scoreKoalas = (88+91+110)/3;
console.log(scoreDolphins,scoreKoalas);

findingWinner(scoreDolphins,scoreKoalas);

// Bonus Data 1
scoreDolphins = (97+112+101)/3;
scoreKoalas = (109+95+123)/3;
console.log(scoreDolphins,scoreKoalas);

findingWinner(scoreDolphins,scoreKoalas);

// Bonus Data 2
scoreDolphins = (97+112+101)/3;
scoreKoalas = (109+95+106)/3;
console.log(scoreDolphins,scoreKoalas);

findingWinner(scoreDolphins,scoreKoalas);