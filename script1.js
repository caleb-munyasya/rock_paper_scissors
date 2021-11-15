let playerSelection = prompt("What is your move?").toLowerCase();
let computerSelection = computerPlay();

let gameroundresult = gameRound(playerSelection, computerSelection);

console.log(gameroundresult);

function computerPlay () {

let play = Math.floor((Math.random() * 3) + 1);

if (play == 1) {
    return ("rock");
}
else if (play == 2) {
    return ("scissors");
}
else {
    return ("paper");
}

}

function gameRound (playerSelection, computerSelection) {

if (playerSelection == "rock" && computerSelection == "scissors") {
    return (`You Win! ${playerSelection} beats ${computerSelection}`);
}
else if (playerSelection == "rock" && computerSelection == "paper") {
    return (`You Lose! ${computerSelection} beats ${playerSelection}`);
}
else if (playerSelection == "rock" && computerSelection == "rock") {
    return (`It's a draw!`);
}
else if (playerSelection == "paper" && computerSelection == "scissors") {
    return (`You Lose! ${computerSelection} beats ${playerSelection}`);
}
else if (playerSelection == "paper" && computerSelection == "rock") {
    return (`You Win! ${playerSelection} beats ${computerSelection}`);
}
else if (playerSelection == "paper" && computerSelection == "paper") {
    return (`It's a draw!`);
}
else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return (`It's a draw!`);
}
else if (playerSelection == "scissors" && computerSelection == "rock") {
    return (`You Lose! ${computerSelection} beats ${playerSelection}`);
}
else if (playerSelection == "scissors" && computerSelection == "paper") {
    return (`You Win! ${playerSelection} beats ${computerSelection}`);
}
}

