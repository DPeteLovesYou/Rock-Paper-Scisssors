const btnRock = document.querySelector('#Rock');
btnRock.addEventListener('click', () => {
  computerSelection = getComputerChoice();
  console.log(playRound("Rock", computerSelection));
  updateScores();
})

const btnPaper = document.querySelector('#Paper');
btnPaper.addEventListener('click', () => {
  computerSelection = getComputerChoice();
  console.log(playRound("Paper", computerSelection));
})

const btnScissors = document.querySelector('#Scissors');
btnScissors.addEventListener('click', () => {
  computerSelection = getComputerChoice();
  console.log(playRound("Scissors", computerSelection));
})

function updateScores() {
  let pScoreDis = document.querySelector('#playerScore');
  pScoreDis.textContent = `${playerScore}`

  let cScoreDis = document.querySelector('#computerScore');
  cScoreDis.textContent = `${computerScore}`
}


//Create outside variables to pass to the playRound function
let computerSelection 
let playerInput 
let playerSelection 
let playerScore = 0;
let computerScore = 0;
let gameNumber = 0;

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

function playRound(playerSelection, computerSelection) {
  //Check if player selection matches rock, then paper, then scissors
  //Check the computer selection against that and return Lose, Win, or Tie
  if (playerSelection === computerSelection) {
    return "Tie"
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      return "Lose"
    } else {
      return "Win"
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      return "Lose"
    } else {
      return "Win"
    }
  } else {
    if (computerSelection === "Rock") {
      return "Lose"
    } else {
      return "Win"
    }
  }
}

  //Create a function called game() that keeps score of a 5 round game and reports a winner or loser at the end. 
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameNumber = 0;

    // for (i = gameNumber; i < 5; i++) {
    //   computerSelection = getComputerChoice();
    //   playerInput = prompt("Rock, Paper or Scissors??");
    //   playerSelection = capitalize(playerInput);
  
    //   let loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
    //   let winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;
    //   let tieMessage = `It's a Tie!`;
  
    //   first = playRound(playerSelection, computerSelection);
    //   if (first == "Win") {
    //     playerScore++
    //     console.log(winMessage);
    //     console.log(`Your score is ${playerScore}, the computer score is ${computerScore}`)
    //   } else if (first == "Lose") {
    //     computerScore++
    //     console.log(loseMessage);
    //     console.log(`Your score is ${playerScore}, the computer score is ${computerScore}`);
    //   } else {
    //     console.log(tieMessage);
    //     console.log(`Your score is ${playerScore}, the computer score is ${computerScore}`);
    //   }
    // }

    // if (playerScore == computerScore) {
    //   console.log("You tied with the computer!!")
    // } else if (playerScore > computerScore) {
    //   console.log("Victory! You beat the computer")
    // } else {
    //   console.log("You Lost! Computers are smart")
    // }
  }