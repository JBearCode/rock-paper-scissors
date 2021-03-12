"use strict";

// computerPlay now outputs "rock", "paper", or "scissors" randomly

function computerPlay() {
    const availableChoices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[randomChoice];
}

function playerPlay() {
    let playerAnswer = window.prompt("Choose rock, paper, or scissors.", "").toLowerCase();
    return playerAnswer;
}

function playRound(playerSelection, computerSelection) {

    const winRound = "You won! " + playerSelection + " beats " + computerSelection;
    const tieRound = "You tied. " + playerSelection + " ties " + computerSelection;
    const loseRound = "You lost! " + playerSelection + " loses to " + computerSelection;

    if (playerSelection === computerSelection) {
        return tieRound;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") 
            || (playerSelection === "paper" && computerSelection === "rock")
            || (playerSelection === "scissors" && computerSelection === "paper")) {
        return winRound;
    } else {
        return loseRound;
    }  
}

function game() {
    
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));