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
function changepicture(url) {
  myImg = document.getElementById("question-mark-player");
  myImg.src = url;
}
function changepicture_computer(url) {
  myImg = document.getElementById("question-mark-computer");
  myImg.src = url;
}

let playerScore = 0;
let computerScore = 0;
const roundTowin = 3;
let round = 1;
let newImg;
let myImg;
function playRound(playerMove) {
  let x = playerMove;
  let y = getComputerChoice();

  console.log(`round ${round}`);
  if (x === "Rock") {
    changepicture("./images/meteore.png");
    if (y === "Rock") {
      document.querySelector(".match-resoult").textContent = `It's a tie!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      changepicture_computer("./images/meteore.png");
    } else if (y === "Paper") {
      computerScore++;
      document.querySelector(".match-resoult").textContent = `You lost!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      changepicture_computer("./images/hologram.png");
    } else {
      playerScore++;
      document.querySelector(".match-resoult").textContent = `You win!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      changepicture_computer("./images/lightsaber.png");
    }
  } else if (x === "Paper") {
    changepicture("./images/hologram.png");
    if (y === "Rock") {
      playerScore++;
      document.querySelector(".match-resoult").textContent = `You win!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      changepicture_computer("./images/meteore.png");
    } else if (y === "Paper") {
      document.querySelector(".match-resoult").textContent = `It's a tie!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      changepicture_computer("./images/hologram.png");
    } else {
      computerScore++;
      document.querySelector(".match-resoult").textContent = `You lost!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      changepicture_computer("./images/lightsaber.png");
    }
  } else {
    changepicture("./images/lightsaber.png");
    if (y === "Rock") {
      computerScore++;
      document.querySelector(".match-resoult").textContent = `You lost!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      changepicture_computer("./images/meteore.png");
    } else if (y === "Paper") {
      playerScore++;
      document.querySelector(".match-resoult").textContent = `You win!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      changepicture_computer("./images/hologram.png");
    } else {
      document.querySelector(".match-resoult").textContent = `It's a tie!`;
      document.querySelector(
        ".match-contex"
      ).textContent = `you played ${x} and the bot played ${y}`;
      changepicture_computer("./images/lightsaber.png");
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
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
  document.querySelector(
    ".humen-score"
  ).textContent = `player score: ${playerScore}`;
  document.querySelector(
    ".computer-score"
  ).textContent = `computer score: ${computerScore}`;
  changepicture("./images/question-mark.png");
  changepicture_computer("./images/question-mark.png");
}
document.getElementById("restart").addEventListener("click", restartGame);
