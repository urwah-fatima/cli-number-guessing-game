import inquirer from "inquirer";

// Computer will generate a random number:
const randomNumber = Math.floor(Math.random() * 10 + 1);

// Asking user input to guess the random number:
const answers = await inquirer.prompt([
  {
    name: "useerGuessdName",
    type: "number",
    message: "Please guess a number between 1-10:",
  },
]);

// Compare the user input with the computer generated number:
if (answers.useerGuessdName === randomNumber) {
  console.log("Congratulations you guessed the right number!!");
} else {
  console.log("You guessed the wrong number.");
}

// Prinitng the right number:
console.log("The right number is:", randomNumber);
