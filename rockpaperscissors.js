////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    if ((prompt() === 'rock') || (prompt()=== 'paper') || (prompt()=== 'scissors')){
    return prompt();
    } else {
        return "error";
    } 
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move==undefined){
        return getInput();
    } else if ((move==="rock")||(move==="paper")||(move==="scissors")){
        return this.move;
    } else {
        console.log("hmm I'm not understanding something!");
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move==undefined){
        return randomPlay();
    } else if ((move==="rock")||(move==="paper")||(move==="scissors")){
        return this.move;
    } else {
        console.log("hmm I'm not understanding something!");
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var compWins=0;
    var playerWins=0;
    if (playerMove===computerMove){
        return tie;
    } else if (playerMove==="rock"){
        if (computerMove==="paper"){
            return compWins++;
        } else if (computerMove==="scissors"){
        return playerWins++;
        }
    } else if (playerMove==="paper"){
        if (computerMove==="scissors"){
            return compWins++;
        } else if (computerMove==="rock"){
            return playerWins++;
        }
    } else if (playerMove==="scissors"){
        if (computerMove==="rock"){
            return compWins++;
        } else if (computerMove==="paper"){
            return playerWins++;
        }
    } else {
        return "error";
    }
    return compWins&&playerWins;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var compWins=0;
    var playerWins=0;
    while ((compWins<5===true)||(playerWins<5===true)) {
        getWinner(getPlayerMove, getComputerMove);
        }
    return [playerWins, compWins];
}
playToFive();