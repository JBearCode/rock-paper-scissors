"use strict";

let playerScore = 0;
let computerScore = 0;
let resetButton;

const mainPara = document.getElementById("mainPara");
const gameButton = document.querySelectorAll(".gameButton");

function playRound(buttonName) {
    const playerSelection = buttonName;
    const computerSelection = computerPlay();
    updateScore(findWinner(playerSelection, computerSelection));
    checkGameOver();
}

function checkGameOver() {
    if (playerScore < 5 && computerScore < 5) {
        return;
    } else {
        endGame();
    }
}

function endGame() {
    if (playerScore >= 5) {
        mainPara.textContent = "Woohoo! You won the game! 🥳"
    } else {
        mainPara.textContent = "You lost to a mindless hunk of metal 😬 ";
    }
    
    gameButton.forEach((button) => {
        button.disabled = true;
        });
    
    resetButton = document.createElement('button');
    resetButton.textContent = "Battle once more!";
    mainPara.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScorePara.textContent = `Player: ${playerScore}` ;
    computerScorePara.textContent = `Computer: ${computerScore}`;

    gameButton.forEach((button) => {
        button.disabled = false;
        });
    
    mainPara.textContent = "The elements will battle once more.";

}

function updateScore(winner) {
    const playerScorePara = document.getElementById("playerScorePara");
    const computerScorePara = document.getElementById("computerScorePara");

    if (winner === "player") {
        ++playerScore;
    } else if (winner === "computer") {
        ++computerScore;
    }

    playerScorePara.textContent = `Player: ${playerScore}` ;
    computerScorePara.textContent = `Computer: ${computerScore}`;
}

function findWinner (playerSelection, computerSelection) { 

    if (playerSelection === computerSelection) {
        mainPara.textContent = "It's a tie! Lame."
        return "tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") 
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")
        || (playerSelection === "water" && computerSelection === "fire" )
        || (playerSelection === "fire" && computerSelection !== "water" )) {
            mainPara.textContent = "You win! " + capitalize1stLetter(playerSelection) + " beats " + computerSelection + "."
            return "player";
    } else {
        mainPara.textContent = "You lose! " + capitalize1stLetter(playerSelection) + " loses to " + computerSelection + "."
        return "computer";
    }
}

function computerPlay() {
    let weightedChoices = [
        ['rock', 1],
        ['paper', 1],
        ['scissors', 1],
        ['fire', 3],
        ['water', 3]
    ];

    // sum up weights from array above
    let sumWeight = 0;
    for (let i = 0; i < weightedChoices.length; i++) {
        sumWeight += weightedChoices[i][1];
    }

    // select random number
    const threshold = Math.random() * sumWeight;

    // transfer number to array value
    let counter = 0;
    for (let i = 0; i < weightedChoices.length -1; ++i) {
        counter += weightedChoices[i][1];

        if (counter >= threshold) {
            return weightedChoices[i][0];
        }
    }   
    return weightedChoices[weightedChoices.length -1][0];
}

// Function to capitalize first letter in a string (used in playRound function)
function capitalize1stLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

