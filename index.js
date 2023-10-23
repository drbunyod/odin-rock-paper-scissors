function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Rock")) {
        winnerAnimation(false, true);
        computerScore++;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Paper" && computerSelection === "Rock") ||
                (playerSelection === "Scissors" && computerSelection === "Paper")) {
        winnerAnimation(true, false);
        playerScore++;
    } else {
        winnerAnimation(false, false);
    }

    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    const allBtns = document.querySelectorAll("button");
    allBtns.forEach(btn => {
        btn.disabled = true;
    });

    const winnerDiv = document.querySelector(".winner");
    const winnerResult = document.querySelector("#winner-result");
    const winnerScore = document.querySelector("#winner-score");

    if (playerScore > computerScore) {
        winnerResult.textContent = "YOU WIN!";
    } else if (playerScore < computerScore) {
        winnerResult.textContent = "YOU LOSE!";
    } else {
        winnerResult.textContent = "DRAW!";
    }

    winnerScore.textContent = `${playerScore}-${computerScore}`;

    winnerDiv.style.display = "flex";
}

function winnerAnimation(player, computer) {
    const playerBoard = document.querySelector(".player");
    const computerBoard = document.querySelector(".computer");

    if (player) {
        playerBoard.classList.add("winner-animation");
        computerBoard.classList.add("loser-animation");
    } else if (computer) {
        playerBoard.classList.add("loser-animation");
        computerBoard.classList.add("winner-animation");
    } else {
        playerBoard.classList.add("draw-animation");
        computerBoard.classList.add("draw-animation");
    }

    setTimeout(() => {
        playerBoard.classList.remove("winner-animation", "loser-animation", "draw-animation");
        computerBoard.classList.remove("winner-animation", "loser-animation", "draw-animation");
    }, 1000);
}

function displayChoice(playerChoice, computerChoice) {
    const choices = {
        rock: '🪨',
        paper: '📄',
        scissors: '✂️'
    }

    document.querySelector("#player-choice").textContent = choices[playerChoice.toLowerCase()];
    document.querySelector("#computer-choice").textContent = choices[computerChoice.toLowerCase()];
    document.querySelector("#player-choice-text").textContent = playerChoice;
    document.querySelector("#computer-choice-text").textContent = computerChoice;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const i = Math.floor(Math.random() * 3);
    
    return choices[i];
}

let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.querySelector("#player-score");
const computerScoreBoard = document.querySelector("#computer-score");

const rockBtn = document.querySelector("#rock-button");
rockBtn.addEventListener("click", () => {
    let playerChoice = "Rock";
    let computerChoice = getComputerChoice();

    displayChoice(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);
});

const paperBtn = document.querySelector("#paper-button");
paperBtn.addEventListener("click", () => {
    let playerChoice = "Paper";
    let computerChoice = getComputerChoice();

    displayChoice(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);
});

const scissorsBtn = document.querySelector("#scissors-button");
scissorsBtn.addEventListener("click", () => {
    let playerChoice = "Scissors";
    let computerChoice = getComputerChoice();

    displayChoice(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);
});