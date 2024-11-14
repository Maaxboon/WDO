let rock = "rock";
let scissors = "scissors";
let paper = "paper";

// these two variables will be changed to test the conditional
let firstPlayerChoice;
let secondPlayerChoice;

// First three possibilities (Player one wins)
// First possibility: Player 1 chooses paper and Player 2 chooses rock (Player 1 wins)
let firstPossibility = firstPlayerChoice == paper && secondPlayerChoice == rock;

// Second possibility: Player 1 chooses rock and player 2 chooses scissors (player 1 wins)
let secondPossibility =
  firstPlayerChoice == rock && secondPlayerChoice == scissors;

//   Third possibility: player 1 chooses scissors and player 2 chooses paper (player 1 wins)
let thirdPossibility =
  firstPlayerChoice == scissors && secondPlayerChoice == paper;

//   Next three possibilities (player 2 wins)
// Fourth Possibility: Player 1 chooses Paper and Player 2 chooses Rock (Player 2 wins)
let fourthPossibility =
  firstPlayerChoice == paper && secondPlayerChoice == rock;

// Fifth Possibility: Player 1 chooses Rock and Player 2 chooses Scissors (Player 2 wins)
let fifthPossibility =
  firstPlayerChoice == rock && secondPlayerChoice == scissors;

// Sixth Possibility: Player 1 chooses Scissors and Player 2 chooses Paper (Player 2 wins)
let sixthPossibility =
  firstPlayerChoice == scissors && secondPlayerChoice == paper;

//   Last possibility (tie)
let seventhPossibility = (firstPlayerChoice = secondPlayerChoice);
