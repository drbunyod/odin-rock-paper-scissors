function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let result = playRound(playerSelection, getComputerChoice());

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }

        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log(`YOU WIN! ${playerScore}-${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`YOU LOSE! ${playerScore}-${computerScore}`);
    } else {
        console.log(`DRAW! ${playerScore}-${computerScore}`);
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection === "Rock")) {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
                (playerSelection === "Paper" && computerSelection === "Rock") ||
                (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }
}

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return options[i];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

game();