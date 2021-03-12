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

// Keep score
let playerScore = 0;
let botScore = 0;

// these constants make playRound run the following two functions on start
const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

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
        ++playerScore;
        return winRound;
    } else {
        ++botScore;
        return loseRound;
    }  
}
