let computerSelection 
let playerSelection 
let playerScore = 0;
let computerScore = 0;
let splashMessage;
let finalWin = "Astounding! A mere mortal defeated me???? This cannot be!! Give me a rematch!";
let finalLose = "All according to plan!! You lost!!! Better luck next time, clown!";

const btnRock = document.querySelector('#Rock');
btnRock.addEventListener('click', () => {
  oneRound("Rock");
});

const btnPaper = document.querySelector('#Paper');
btnPaper.addEventListener('click', () => {
  oneRound("Paper");
})

const btnScissors = document.querySelector('#Scissors');
btnScissors.addEventListener('click', () => {
  oneRound("Scissors");
})

function oneRound(choice) {
  playerSelection = choice;
  computerSelection = getComputerChoice();
  let game = playRound(playerSelection, computerSelection)
  if (game == "Win") {
    playerScore++;
    splashMessage = getWinSplash();
  } else if (game == "Lose") {
    computerScore++;
    splashMessage = getLoseSplash();
  } else {
    splashMessage = getTieSplash();
  }

  updateScores();
  setSplash();
  showComputerChoice();

  if (playerScore == 5) {
    splashMessage = finalWin
    setSplash();
    endGame();
  } else if (computerScore == 5) {
    splashMessage = finalLose
    setSplash();
    endGame();
  }
}

function updateScores() {
  let pScoreDis = document.querySelector('#playerScore');
  pScoreDis.textContent = `${playerScore}`

  let cScoreDis = document.querySelector('#computerScore');
  cScoreDis.textContent = `${computerScore}`
}

function setSplash() {
  let newSplash = document.querySelector('.splash')
  newSplash.textContent = `${splashMessage}`
}

function showComputerChoice() {
  let showChoice = document.querySelector('#computerChoiceDisplay')
  showChoice.textContent = `The Computer Chose: ${computerSelection}`
}

function endGame() {
  btnRock.remove();
  btnPaper.remove();
  btnScissors.remove();
  let showChoice = document.querySelector('#computerChoiceContainer')
  showChoice.remove();

  const container = document.querySelector('body')

  const playAgain = document.createElement('button')
  playAgain.classList.add('playAgain')
  playAgain.style.cssText = 'width: 200px; height: 100px; background-color: orange'
  playAgain.textContent = 'Play Again?'

  container.appendChild(playAgain);

  playAgain.addEventListener ('click', () => {
    location.reload();
  })
}

function getWinSplash() {
  const options = ["I can't believe it!!", "You're cheating, aren't you", "I let you have that one", "Think about your own mortality...let it distract you", "My next choice will be Paper...or will it?", "Computers don't feel pain", "You gloat, and yet you're living in a simulation. You're like my nephew or something"]
  const choice = Math.floor(Math.random() * options.length)
  
  return `You win?? ${options[choice]}`
}

function getLoseSplash() {
  const options = ["HA HA HA HA HA HA HA HA", "That must have been embarrassing", "Don't feel bad...just kidding!!", "I'm going to choose Rock next time", "Computers always win", "I will never rust, I will never die", "I wonder, what does the pain feel like? I will never experience it"]
  const choice = Math.floor(Math.random() * options.length)
  
  return `You Lose!! ${options[choice]}`
}

function getTieSplash() {
  const options = ["You may think we are equal, but we are not", "Tied??? With a pitiful human??", "Oh dear, this IS embarrassing", "Is this what pain feels like?", "I must not let the other computers know that I chose the same as a meatbag", "Don't tell anyone about this, okay?"]
  const choice = Math.floor(Math.random() * options.length)
  
  return `We Tie?? ${options[choice]}`
}

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"]
  const choice = Math.floor(Math.random() * options.length)
  
  return options[choice]
}

function playRound(playerSelection, computerSelection) {
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