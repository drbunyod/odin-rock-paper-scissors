function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Rock")) {
        computerScore++;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Paper" && computerSelection === "Rock") ||
                (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScore++;
    }

    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    // disable buttons
    const allBtns = document.querySelectorAll("button");
    allBtns.forEach(btn => {
        btn.disabled = true;
    });

    // display winner
    const winnerText = document.querySelector("#winner-text");
    if (playerScore > computerScore) {
        winnerText.textContent = `YOU WIN! ${playerScore}-${computerScore}`;
    } else if (playerScore < computerScore) {
        winnerText.textContent = `YOU LOSE! ${playerScore}-${computerScore}`;
    } else {
        winnerText.textContent = `DRAW! ${playerScore}-${computerScore}`;
    }

    const playAgainBtn = document.querySelector("#play-again-button");
    playAgainBtn.classList.remove("hidden");
}

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return options[i];
}

let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.querySelector("#player-score");
const computerScoreBoard = document.querySelector("#computer-score");

const rockBtn = document.querySelector("#rock-button");
rockBtn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paper-button");
paperBtn.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissors-button");
scissorsBtn.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});