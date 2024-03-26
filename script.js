const options = ["Rock", "Paper", "Scissors"];

let playerScore = 0; 
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function getUserChoice() {
    let userOption = prompt(`Enter ${options[0]} or ${options[1]} or ${options[2]}`);
    return userOption;
}


function playRound(playerSelection, computerSelection) {
  // your code here!
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch(playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                console.log("You Lose! Paper beats Rock");
                return false;
                
            }else if (computerSelection == "scissors"){
                console.log("You Win! Rock beats Scissors");
                return true;
            }else {
                console.log("It's a Tie!");
                return undefined;
            }
            break;
        case "paper":
            if (computerSelection == "rock") {
                console.log("You Win! Paper beats Rock");
                return true;
            }else if (computerSelection == "scissors"){
                console.log("You Lose! Scissors beats Paper");
                return false;
            }else {
                console.log("It's a Tie!");
                return undefined;
            }
            break;
        default:
            if (computerSelection == "rock") {
                console.log("You Lose! Rock beats Scissors");
                return false;
            }else if (computerSelection == "scissors"){
                console.log("It's a Tie!");
                return undefined;
            }else {
                console.log("You Win! Scissors beats Paper");
                return true;
            }
            break; 
    }
        
}

for (let i = 0; i < 5; i++) {
    let result = playRound(getUserChoice(), getComputerChoice());
    if (result) {
        playerScore++;
        console.log(`Your Score: ${playerScore}`);
    }else if (result == undefined) {
        console.log("It's a Tie!");
    }else {
        computerScore++;
        console.log(`Your Score: ${playerScore}`);
    }
}

if (playerScore > computerScore) {
    alert(`Victory!!! Your final score is ${playerScore}`);
}else{
    alert(`Defeat!!! Your final score is ${playerScore}`);
}