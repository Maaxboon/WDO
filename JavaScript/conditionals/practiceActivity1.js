let rock = "rock";
let scissors = "scissors";
let paper = "paper";

// Player choices
let firstPlayerChoice = "rock"; // Change these to test different outcomes
let secondPlayerChoice = "scissors";

let firstPossibility;
let secondPossibility;
let thirdPossibility;

let fourthPossibility;
let fifthPossibility;
let sixthPossibility;

let seventhPossibility;

// Check winning possibilities for player 1
firstPossibility = firstPlayerChoice == paper && secondPlayerChoice == rock;
secondPossibility = firstPlayerChoice == rock && secondPlayerChoice == scissors;
thirdPossibility = firstPlayerChoice == scissors && secondPlayerChoice == paper;

// Check winning possibilities for player 2
fourthPossibility = firstPlayerChoice == rock && secondPlayerChoice == paper;
fifthPossibility = firstPlayerChoice == scissors && secondPlayerChoice == rock;
sixthPossibility = firstPlayerChoice == paper && secondPlayerChoice == scissors;

// Check for tie
seventhPossibility = firstPlayerChoice == secondPlayerChoice;

// Conditional statements to declare winner or tie
if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log("First player won!");
} else if (fourthPossibility || fifthPossibility || sixthPossibility) {
  console.log("Second player won!");
} else if (seventhPossibility) {
  console.log("It's a tie!");
} else {
  console.log("Something went wrong!");
}
