"use strict";

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

// Button constants
const rock = document.getElementById('rockButton');
const paper = document.getElementById('paperButton');
const scissors = document.getElementById('scissorsButton');
const fire = document.getElementById('fireButton');
const water = document.getElementById('waterButton');

rock.addEventListener('click', playRound(rock));
paper.addEventListener('click', playRound(paper));
scissors.addEventListener('click', playRound(scissors));
fire.addEventListener('click', playRound(fire));
water.addEventListener('click', playRound(water));

function playRound (playerSelection, computerSelection) { 
    computerSelection = computerPlay();

const winRound = "You won! " + capitalize1stLetter(playerSelection) + " beats " + computerSelection + ".";
const tieRound = "You tied. " + capitalize1stLetter(playerSelection) + " ties " + computerSelection + ".";
const loseRound = "You lost! " + capitalize1stLetter(playerSelection) + " loses to " + computerSelection + ".";
const currentScore = "\nYour score is " + playerScore + ". Computer score is " + botScore + ".";
const winGame = "\nYou won the game! Reload page to try again.";
const loseGame = "\nYou lose the game! Reload page to try again.";

if (playerSelection === computerSelection) {
    return tieRound;
} else if ((playerSelection === "rock" && computerSelection === "scissors") 
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {
    ++playerScore;
    if (playerScore === 5) {
        return winRound + currentScore + winGame;
    }
    else {
        return winRound + currentScore;
    }
} else {
    ++botScore;
    if (botScore === 5) {
        return loseRound + currentScore + loseGame;
    }
    else {
        return loseRound + currentScore;
    }
}  
}
