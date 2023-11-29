function getComputerChoice() {
  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber <= 1) {
    computerChoice = "Rock";
  } else if (randomNumber <= 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

let playerScore = 0;
let computerScore = 0;
const roundTowin = 3;
let round = 1;

function playRound(playerMove) {
  let x = playerMove;
  let y = getComputerChoice();
  console.log(`round ${round}`);
  if (x === "Rock") {
    if (y === "Rock") {
      document.querySelector(".match-resoult").textContent = `It's a tie!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      document.querySelector(".players-imgchoice").innerHTML =
        '<img src ="./images/meteore.png">';
      document.querySelector(".choice-computer").innerHTML =
        '<img src ="./images/meteore.png">';
    } else if (y === "Paper") {
      computerScore++;
      document.querySelector(".match-resoult").textContent = `You lost!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      document.querySelector(".players-imgchoice").innerHTML =
        '<img src ="./images/meteore.png">';
      document.querySelector(".choice-computer").innerHTML =
        '<img src ="./images/hologram.png">';
    } else {
      playerScore++;
      document.querySelector(".match-resoult").textContent = `You win!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      document.querySelector(".players-imgchoice").innerHTML =
        '<img src ="./images/meteore.png">';
      document.querySelector(".choice-computer").innerHTML =
        '<img src ="./images/lightsaber.png">';
    }
  } else if (x === "Paper") {
    if (y === "Rock") {
      playerScore++;
      document.querySelector(".match-resoult").textContent = `You win!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      document.querySelector(".choice-humen").innerHTML =
        '<img src ="./images/hologram.png">';
    } else if (y === "Paper") {
      document.querySelector(".match-resoult").textContent = `It's a tie!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      document.querySelector(".choice-humen").innerHTML =
        '<img src ="./images/hologram.png">';
    } else {
      computerScore++;
      document.querySelector(".match-resoult").textContent = `You lost!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      document.querySelector(".choice-humen").innerHTML =
        '<img src ="./images/hologram.png">';
    }
  } else {
    if (y === "Rock") {
      computerScore++;
      document.querySelector(".match-resoult").textContent = `You lost!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      document.querySelector(".choice-humen").innerHTML =
        '<img src ="./images/lightsaber.png">';
    } else if (y === "Paper") {
      playerScore++;
      document.querySelector(".match-resoult").textContent = `You win!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      document.querySelector(".choice-humen").innerHTML =
        '<img src ="./images/lightsaber.png">';
    } else {
      document.querySelector(".match-resoult").textContent = `It's a tie!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      document.querySelector(".choice-humen").innerHTML =
        '<img src ="./images/lightsaber.png">';
    }
  }
  document.querySelector(
    ".humen-score"
  ).textContent = `player score: ${playerScore}`;
  document.querySelector(
    ".computer-score"
  ).textContent = `computer score: ${computerScore}`;

  round++;
}
