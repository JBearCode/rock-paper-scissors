"use strict";

// Keep score
let playerScore = 0;
let computerScore = 0;

// Function to capitalize first letter in a string (used in playRound function)
function capitalize1stLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Button constants
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const fireButton = document.getElementById('fireButton');
const waterButton = document.getElementById('waterButton');

// initiate playRound function on click
rockButton.addEventListener('click', function() { 
    playRound("rock", computerPlay()) });
paperButton.addEventListener('click', function() { 
    playRound("paper", computerPlay()) });
scissorsButton.addEventListener('click', function() { 
    playRound("scissors", computerPlay()) });
fireButton.addEventListener('click', function() { 
    playRound("fire", computerPlay()) });
waterButton.addEventListener('click', function() { 
    playRound("water", computerPlay()) });

// function to return results of one round
function findWinner (playerSelection, computerSelection) { 

if (playerSelection === computerSelection) {
    return "tie";
} else if ((playerSelection === "rock" && computerSelection === "scissors") 
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")
        || (playerSelection === "water" && computerSelection === "fire" )
        || (playerSelection === "fire" && computerSelection !== "water" )) {
    return "player"
} else {
    return "computer";
} }

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

