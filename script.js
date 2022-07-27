function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice
}

let computerScore = 0;
let playerScore = 0;
let currentRound = 1;


function playRound() {
  let computerPick = getComputerChoice();
  let playerPick = prompt(`Round ${currentRound}! Pick your weapon: Rock, Paper, or Scissors?`).toLowerCase()
  if (playerPick === "rock" && computerPick === "paper") {
    ++computerScore
    ++currentRound
    alert("You lose!")
  } else if (playerPick === "rock" && computerPick === "scissors") {
    ++currentRound
    ++playerScore
    alert("You win!")
  } else if (playerPick === "paper" && computerPick === "scissors") {
    ++currentRound
    ++computerScore
    alert("You lose!")
  } else if (playerPick === "paper" && computerPick === "rock") {
    ++currentRound
    ++playerScore
    alert("You win!")
  } else if (playerPick === "scissors" && computerPick === "rock") {
    ++currentRound
    ++computerScore
    alert("You lose!")
  } else if (playerPick === "scissors" && computerPick === "paper") {
    ++currentRound
    ++playerScore
    alert("You win!")
  } else if (playerPick == computerPick) {
    alert("You draw!")
  } else {
    alert("Wrong input.")
  }
}

function rps() {
  alert("Welcome to Rock-Paper-Scissors! Get ready to fight!");
  while (currentRound < 6) {
    playRound();
  }
  if (playerScore === 3) {
    alert("You won 3 times, you are the champion of RPS!")
  } else {
    alert("The computer won 3 times, you are a loser!")
  }
  return playerScore = 0, computerScore = 0, currentRound = 1
}

// ((computerScore != 3 || playerScore != 3) && !(computerScore != 3 && playerScore != 3))