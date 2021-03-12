"use strict";

// computerPlay now outputs "rock", "paper", or "scissors" randomly

function computerPlay() {
    const availableChoices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    const winRound = "You won! " + playerSelection + " beats " + computerSelection;
    const tieRound = "You tied." + playerSelection + " ties " + computerSelection;
    const loseRound = "You lost!" + computerSelection + " beats " + playerSelection;

    if (playerSelection === computerSelection) {
        return
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection));