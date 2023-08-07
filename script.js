// Create an array with the three options
// Select an option at random
// Return the selected option
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  const choice = Math.floor(Math.random() * options.length)
  
  return options[choice]
}

//Create an outside variable to pass to the playRound function
function capitalize(playerInput) {
  let lowerCase = playerInput.toLowerCase();
  let playerInputStandardized = lowerCase.replace(lowerCase.charAt(0), lowerCase.charAt(0).toUpperCase())
  return playerInputStandardized;
}

const playerInput = "PAPER"
const computerSelection = getComputerChoice();
const playerSelection = capitalize(playerInput);

console.log(playRound(playerSelection, computerSelection))

//Create Lose, Win, or Tie messages
//Check if player selection matches rock, then paper, then scissors
//Check the computer selection against that and return Lose, Win, or Tie

function playRound(playerSelection, computerSelection) {
  const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
  const tieMessage = `It's a Tie!`;

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
