
// function guessNumber() {
//     var userInput = prompt("Enter number between 1 to 10");
//     var userNumber = parseInt(userInput);

//     var randomNumber = Math.floor(Math.random() * 10) + 1;
//     if (userNumber === randomNumber) {
//         return "Good work"
//     }
//     else {
//         return "Not Matched"
//     }
// }

// console.log(guessNumber())

// browser environment 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function guessNumber() {
    rl.question("Enter a number between 1 and 10: ", function(userInput) {
        var userNumber = parseInt(userInput);

        var randomNumber = Math.floor(Math.random() * 10) + 1;

        if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 10) {
            if (userNumber === randomNumber) {
                console.log("Good work!");
            } else {
                console.log("Not matched. The correct number was " + randomNumber);
            }
        } else {
            console.log("Invalid input. Please enter a valid number between 1 and 10.");
        }

        rl.close();
    });
}

guessNumber();

// dev environment