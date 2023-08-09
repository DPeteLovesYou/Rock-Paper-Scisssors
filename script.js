//Create outside variables to pass to the playRound function
let playerInput = prompt("Rock, Paper, or Scissors??")
const computerSelection = getComputerChoice();
const playerSelection = capitalize(playerInput);

//Create Lose, Win, or Tie messages
const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
const tieMessage = `It's a Tie!`;

// Create an array with the three options
// Select an option at random
// Return the selected option
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  const choice = Math.floor(Math.random() * options.length)
  
  return options[choice]
}

//Standardizes player input so that only the first letter is capitalized
function capitalize(playerInput) {
  let lowerCase = playerInput.toLowerCase();
  let playerInputStandardized = lowerCase.replace(lowerCase.charAt(0), lowerCase.charAt(0).toUpperCase())

  return playerInputStandardized;
}

console.log(game());

function playRound(playerSelection, computerSelection) {
  //Check if player selection matches rock, then paper, then scissors
  //Check the computer selection against that and return Lose, Win, or Tie
  if (playerSelection === computerSelection) {
    return tieMessage
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return loseMessage
    } else {
      return winMessage
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return loseMessage
    } else {
      return winMessage
    }
  } else {
    if (computerSelection === "Rock") {
      return loseMessage
    } else {
      return winMessage
    }
  }
}

  //Create a function called game() that keeps score of a 5 round game and reports a winner or loser at the end. 

  //Call the playRound function 5 times
  //Use console.log() to display win/lose message after each round
  //Keep a computer score and a player score based on win messages
  //Compare computer and player score and return win/lose/tie message via 
  //console.log()
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;

    if (playRound(playerSelection, computerSelection) == winMessage) {
      playerScore++
      console.log(winMessage);
      console.log(`Your score is ${playerScore}, the computer score is ${computerScore}`)
    } else {
      computerScore++
      console.log(loseMessage);
      console.log(`Your score is ${playerScore}, the computer score is ${computerScore}`);
    }
  }