// Rock Paper Scissors

var log = document.querySelector('#log');
var strText = "Here the results will be shown.";
log.textContent = strText;
strText += "\n";
log.textContent = strText;

const rockButton = document.querySelector('#Rock');
const paperButton = document.querySelector('#Paper');
const scissorsButton = document.querySelector('#Scissors');

    rockButton.addEventListener("click", () => {
      let playerSelection = rockButton.id;
      let computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    });

    paperButton.addEventListener("click", () => {
        let playerSelection = paperButton.id;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
      });
      scissorsButton.addEventListener("click", () => {
        let playerSelection = scissorsButton.id;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
      });

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
function playRound(playerSelection, computerSelection) {
    log.textContent += 'You chose ' + playerSelection + ', while Computer chose ' + computerSelection + '\r\n';
    if (playerSelection == computerSelection) {
        log.textContent += "It's a tie!\r\n";
        whoWon = 0;

    }
    else if ((playerSelection == "Scissors") && (computerSelection == "Paper")) {
        log.textContent += "You won over Computer!\r\n";
    } else if ((playerSelection == "Paper") && (computerSelection == "Rock")) {
        log.textContent += "You won over Computer!\r\n";
    } else if ((playerSelection == "Rock") && (computerSelection == "Scissors")) {
        log.textContent += "You won over Computer!\r\n";
    } else {
        log.textContent += "Computer won over you!\r\n";
    }
}


/*
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
*/


