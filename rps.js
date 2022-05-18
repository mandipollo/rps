//

// selectors for the buttons
const playerSelectionRock = document.querySelector(`.selection-rock`);
const playerSelectionPaper = document.querySelector(`.selection-paper`);
const playerSelectionScissor = document.querySelector(`.selection-scissor`);
let playerScoreLabel = document.querySelector(`.player-score`);
let computerScoreLabel = document.querySelector(`.computer-score`);
// store data
let playerSelection;
let computerSelectionValue;
let computerScore = 0;
let playerScore = 0;

// function for computer selection
function computerSelection() {
  let randomValue = Math.floor(Math.random() * 3 + 1);

  if (randomValue == 1) {
    return `ROCK`;
  } else if (randomValue == 2) {
    return `PAPER`;
  } else return `SCISSOR`;
}

computerSelectionValue = computerSelection();
console.log(computerSelectionValue);

// function taking players selection

// function for playround

function playRound(computerSelectionValue, playerSelection) {
  if (computerSelectionValue === playerSelection) {
    console.log(`its a tie! computer choose ${computerSelectionValue}.`);
    while (computerScore < 5 && playerScore < 5) {
      return computerScore++, playerScore++;
    }
  } else if (computerSelectionValue === `PAPER` && playerSelection === `ROCK`) {
    console.log(
      `computer wins !! ${computerSelectionValue} wins ${playerSelection}`
    );
    while (computerScore < 5) {
      return computerScore++;
    }
  } else if (
    computerSelectionValue === `PAPER` &&
    playerSelection === `SCISSOR`
  ) {
    console.log(
      `player wins !! ${playerSelection} wins against ${computerSelectionValue}`
    );
    while (playerScore < 5) {
      return playerScore++;
    }
  } else if (
    computerSelectionValue === `ROCK` &&
    playerSelection === `SCISSOR`
  ) {
    console.log(
      `computer wins !! ${computerSelectionValue} wins against ${playerSelection}`
    );
    while (computerScore < 5) {
      return computerScore++;
    }
  } else if (computerSelectionValue === `ROCK` && playerSelection === `PAPER`) {
    console.log(
      `player wins !! ${playerSelection} wins against ${computerSelectionValue}`
    );
    while (playerScore < 5) {
      return playerScore++;
    }
  } else if (
    computerSelectionValue === `SCISSOR` &&
    playerSelection === `PAPER`
  ) {
    console.log(
      `computer wins !! ${computerSelectionValue} wins against ${playerSelection}`
    );
    while (computerScore < 5) {
      return computerScore++;
    }
  } else if (
    computerSelectionValue === `SCISSOR` &&
    playerSelection === `ROCK`
  ) {
    console.log(
      `player wins !! ${playerSelection} wins against ${computerSelectionValue}`
    );
    while (playerScore < 5) {
      return playerScore++;
    }
  }
}

// addeventlisteners

// 1.player selection rock
playerSelectionRock.addEventListener(`click`, function () {
  playerSelection = `ROCK`;
  console.log(playerSelection);

  playRound(computerSelectionValue, playerSelection);

  //   if (computerSelectionValue === `ROCK`) {
  //     console.log(`its a tie`);
  //   } else if (computerSelectionValue === `PAPER`) {
  //     console.log(`computer selects paper! computer wins the round.`);
  //   } else if (computerSelectionValue === `SCISSOR`) {
  //     console.log(`computer selects scissor ! you win the round`);
  //   }
  console.log(playerScore, computerScore);

  playerScoreLabel.textContent = playerScore;
  computerScoreLabel.textContent = computerScore;
  if (computerScore === 5) {
    alert(`computer won the game !!`);
  } else if (playerScore === 5) {
    alert(`you won the game`);
  }
});

// 2. player selection paper
playerSelectionPaper.addEventListener(`click`, function () {
  playerSelection = `PAPER`;
  console.log(playerSelection);

  playRound(computerSelectionValue, playerSelection);

  //   if (computerSelectionValue === `PAPER`) {
  //     console.log(`its a tie`);
  //   } else if (computerSelectionValue === `SCISSOR`) {
  //     console.log(`computer selects SCISSOR! computer wins the round.`);
  //   } else if (computerSelectionValue === `ROCK`) {
  //     console.log(`computer selects ROCK ! you win the round`);
  //   }
  console.log(playerScore, computerScore);
  if (computerScore === 5) {
    alert(`computer won the game !!`);
  } else if (playerScore === 5) {
    alert(`you won the game`);
  }
  playerScoreLabel.textContent = playerScore;
  computerScoreLabel.textContent = computerScore;
});

// 3. player selection scissor
playerSelectionScissor.addEventListener(`click`, function () {
  playerSelection = `SCISSOR`;
  console.log(playerSelection);

  playRound(computerSelectionValue, playerSelection);
  //   if (computerSelectionValue === `SCISSOR`) {
  //     console.log(`its a tie`);
  //   } else if (computerSelectionValue === `ROCK`) {
  //     console.log(`computer selects ROCK! computer wins the round.`);
  //   } else if (computerSelectionValue === `PAPER`) {
  //     console.log(`computer selects PAPER ! you win the round`);
  //   }
  console.log(playerScore, computerScore);
  if (computerScore === 5) {
    alert(`computer won the game !!`);
  } else if (playerScore === 5) {
    alert(`you won the game`);
  }
  playerScoreLabel.textContent = playerScore;
  computerScoreLabel.textContent = computerScore;
});
