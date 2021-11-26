//Declare player and computer's move 

let playerSelection = ""
let computerSelection = ""

//Starts the game


//Requests the players' move

function promptPlayer() {
    
    playerSelection = prompt("What is your move?").toLowerCase();
}

//Requests computer's move

function computerPlay() {

    let play = Math.floor((Math.random() * 3) + 1);

    if (play == 1) {
        computerSelection = "rock";
    }
    else if (play == 2) {
        computerSelection = "scissors";
    }
    else {
        computerSelection = "paper";
    }

}

//Starts a 5 round game

function game() {

    let player_score = 0;
    let computer_score = 0;
    let counter = 0;


    while (counter < 5) {
        promptPlayer();

        computerPlay();

        round = playRound(playerSelection, computerSelection);

        if (round == 1) {
            player_score++;
            document.querySelector("body > div:nth-child(3) > h1").innerHTML = `Player score: ${player_score}`;

            counter++;

        }
        else if (round == 2) {
            computer_score++;
            document.querySelector("body > div:nth-child(4) > h1").innerHTML = `Comp score: ${computer_score}`;
            counter++;
        }
        else {
            player_score++;
            computer_score++;
            counter++;
            console.log("its a draw!");

        }
    }


    if (player_score > computer_score) {
        console.log("You won the game! Congratulations");
    }
    else if (computer_score > player_score) {
        console.log("You lost the game! Better luck next time!")
    }
    else {
        console.log("The game's a draw!")
    }

}

//Evaluates whether round is a win, loss or draw for the player
// 1=win, 2=loose, 3=draw

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return (1);
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return (2);
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        return (3);
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return (2);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return (1);
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return (3);
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return (3);
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return (2);
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return (1);
    }
}

