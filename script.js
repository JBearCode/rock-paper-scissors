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

// Function to capitalize first letter in a string (used in playRound function)
function capitalize1stLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// playRound runs computerPlay() and playerPlay(), updates scores based on winner, and returns results
function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();

    const winRound = "You won! " + capitalize1stLetter(playerSelection) + " beats " + computerSelection + ".";
    const tieRound = "You tied. " + capitalize1stLetter(playerSelection) + " ties " + computerSelection + ".";
    const loseRound = "You lost! " + capitalize1stLetter(playerSelection) + " loses to " + computerSelection + ".";
    const winGame = "\nYou won the game! Reload page to try again."
    const loseGame = "\nYou lose the game! Reload page to try again."

    if (playerSelection === computerSelection) {
        return tieRound;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") 
            || (playerSelection === "paper" && computerSelection === "rock")
            || (playerSelection === "scissors" && computerSelection === "paper")) {
        ++playerScore;
        if (playerScore === 5) {
            return winRound + winGame;
        }
        else {
            return winRound;
        }
    } else {
        ++botScore;
        if (botScore === 5) {
            return loseRound + loseGame;
        }
        else {
            return loseRound;
        }
    }  
}

function game() {
    while (playerScore < 5 && botScore < 5) {
        console.log(playRound());
    }
}