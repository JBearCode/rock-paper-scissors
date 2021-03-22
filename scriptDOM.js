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