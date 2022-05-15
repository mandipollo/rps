//

// function for computer selection
function computerSelection() {
  let randomValue = Math.floor(Math.random() * 3 + 1);

  if (randomValue == 1) {
    return `ROCKS`;
  } else if (randomValue == 2) {
    return `PAPERS`;
  } else return `SCISSORS`;
}

console.log(computerSelection());

// function taking players selection
