// Rock Paper Scissors

function capitalise(string) {
    let result = "";
    for (let index = 0; index < string.length; index++) {
        if (string[index] == string[index].toUpperCase() && index == 0) {
            result = result.concat("", string[index]);
        } else if (string[index] != string[index].toUpperCase() && index == 0) {
            result = result.concat("", string[index].toUpperCase());
        } else {
            result = result.concat("", string[index].toLowerCase());
        }

    }
    return result;

}


function computerPlay() {
    let index = Math.round((2 * Math.random()) + 1);
    let figure = "";
    if (index == 1) {
        figure = "Rock";
    } else if (index == 2) {
        figure = "Paper";
    } else if (index == 3) {
        figure = "Scissors";
    }
    return figure;
}
function playRound(playerSel, computerSelection) {
    let whoWon;
    let playerSelection = capitalise(playerSel);
    console.log("You chose " + playerSelection + ", while Computer chose " + computerSelection);
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        whoWon = 0;

    }
    else if ((playerSelection == "Scissors") && (computerSelection == "Paper")) {
        console.log("You won over Computer!");
        whoWon = 1;
    } else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {
        console.log("You won over Computer!");
        whoWon = 1;
    } else if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
        console.log("You won over Computer!");
        whoWon = 1;
    } else {
        console.log("Computer won over you!");
        whoWon = 2;
    }
    return whoWon;


}

function game() {
    let whoWon;
    let playerWins = 0;
    let computerWins = 0;
    for (let index = 0; index <= 4; index++) {
        let playerFigure = prompt("Pick your figure");
        console.log("You chose " + capitalise(playerFigure));
        whoWon = playRound(playerFigure, computerPlay());
        if (whoWon == 1) {
            playerWins++;
        } else if (whoWon == 2) {
            computerWins++;
        }
    }
    if (playerWins > computerWins) {
        console.log("You won a game against the Computer scoring " + playerWins + " wins against " + computerWins + "!");
    } else if (computerWins > playerWins) {
        console.log("You lost a game against the Computer scoring " + playerWins + " wins against " + computerWins + "!");
    } else {
        console.log("Your game resulted in a tie against Computer! " + playerWins + " Wins against " + computerWins + "!");
    }
}

game();

