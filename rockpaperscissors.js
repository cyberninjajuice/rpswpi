function getInput() {
    var input =prompt("Please choose either rock, paper, or scissors.");
    if ((input==="rock")|| (input==="paper") || (input==="scissors")){
        return input;
    } else {
        return getInput(); 
    }
} //simple function which yields the result of the user's prompt

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "rock";
    } else if (randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
} //simple function which yields either rock paper or scissors

//console.log(getInput());
//console.log(randomPlay());

function getPlayerMove(move) {
    // If a `move` has a value, your expression should evaluate to that value
    if ((move===undefined)||(move===null)){
        return getInput();
    } else {
        //console.log("hmm I'm not understanding something!");
        return move;
    } 
} //function which takes getInput's yield and uses it to say the player's move assuming that was not entered.

function getComputerMove(move) {
    //If `move` is not specified / is null, your expression should equal `randomPlay()`.
    if ((move===undefined) || (move===null)){
        return randomPlay();
    } else if ((move==="rock")||(move==="paper")||(move==="scissors")){
        return move;
    } else {
        //console.log("hmm I'm not understanding something!");
        return "errorofcomp";
    }
} //function which takes randomPlay and uses it to determine what the computer will do assuming it wasn't entered.

//console.log(getComputerMove())

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    if (playerMove === computerMove){
        winner="tie";
    } else if (playerMove==="rock"){
        if (computerMove==="paper"){
            winner="computer";
        } else if (computerMove==="scissors"){
            winner="player";
        }
    } else if (playerMove==="paper"){
        if (computerMove==="scissors"){
            //console.log("computerps");
            winner="computer";
        } else if (computerMove==="rock"){
            winner="player";
        }
    } else if (playerMove==="scissors"){
        if (computerMove==="rock"){
            //console.log("computersr");
            winner="computer";
        } else if (computerMove==="paper"){
            winner="player";
        }
    } else {
        winner="errorgetwinner";
    }
    //console.log(winner);
    return winner;
}//function which returns variable winner (which should be either player, computer, or tie)
//if (getWinner(getPlayerMove(),getComputerMove())==="player"){console.log("yes");}
//console.log(getWinner(getPlayerMove(),getComputerMove()));

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var compWins=0;
    var playerWins=0;
    var ties=0;
    while ( (compWins<x) || (playerWins<x) ) {
        if ( getWinner( getPlayerMove(), getComputerMove() )==='player'){
            //console.log("player");
            playerWins=playerWins+1;
        } else if ( getWinner( getPlayerMove(), getComputerMove() )==='computer'){
            //console.log("computer");
            compWins=compWins+1;
        } else if ( getWinner( getPlayerMove(), getComputerMove() )==='tie') {
            //console.log("tie");
            ties=ties+1;
        }
        else {
            return 'errorPlayto';
        }
    }
    return [compWins, playerWins];
}
playTo(5);