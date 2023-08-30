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

// Create arrays of win/lose/tie splash messages
// Create a function to pull one randomly
// Create a function to update the splash message div
// When player clicks a button, run the playRound()
// Based on the result, update and display the player/computer score variables
// Also call the splash message update function
// Create a listener for when a score = 5??
// Display final score splash
// Remove the event listeners
// Add a 'play again' button to refresh the page

function getWinSplash() {
  const options = ["I can't believe it!!", "You're cheating, aren't you", "I let you have that one", "Think about your own mortality...let it distract you", "My next choice will be Paper...or will it?", "Computers don't feel pain"]
  const choice = Math.floor(Math.random() * options.length)
  
  return options[choice]
}

function getLoseSplash() {
  const options = ["HA HA HA HA HA HA HA HA", "That must have been embarrassing", "Don't feel bad...just kidding!!", "I'm going to choose Rock next time", "Computers always win", "I will never rust, I will never die", "I wonder, what does the pain feel like? I will never experience it"]
  const choice = Math.floor(Math.random() * options.length)
  
  return options[choice]
}

function getTieSplash() {
  const options = ["You may think we are equal, but we are not", "Tied??? With a pitiful human??", "Oh dear, this IS embarrassing", "Is this what pain feels like?", "I must not let the other computers know that I chose the same as a meatbag", "Don't tell anyone about this, okay?"]
  const choice = Math.floor(Math.random() * options.length)
  
  return options[choice]
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