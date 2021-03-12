"use strict";

// computerPlay outputs "rock", "paper", or "scissors" randomly
function computerPlay() {
    const availableChoices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[randomChoice];
}

// playerPlay asks for choice then converts to lower case and returns answer
function playerPlay() {
    let playerAnswer = window.prompt("Choose rock, paper, or scissors.", "").toLowerCase();
    return playerAnswer;
}

// playRound runs computerPlay() and playerPlay() and returns the winner
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

// these constants make playRound run the following two functions on start
const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// game calls playRound five times (not working)
function game() {
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
}

console.log(game());