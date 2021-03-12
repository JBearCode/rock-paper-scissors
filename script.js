"use strict";

// 1. Make function choose 1 of 3 strings (or from array?)

const availableChoices = ["rock", "paper", "scissors"];
const randomChoice = Math.floor(Math.random() * availableChoices.length);
return randomChoice;

function computerPlay() {

}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection));