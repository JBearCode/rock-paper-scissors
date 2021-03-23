"use strict";

let playerScore = 0;
let computerScore = 0;
const mainPara = document.getElementById("mainPara");

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
    if (playerScore = 5) {
    mainPara.textContent = "Woohoo! You won the game! 🥳"
    } else {
    mainPara.textContent = "Unfortunately, you've been bested by a mindless hunk of metal. 😬 "
    }
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

// function to return results of one round
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

// play a random (weighted) choice
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

// Button constants
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');

