const options = ["Rock", "Paper", "Scissors"];

const button = document.querySelectorAll(".option");
const result = document.querySelector(".result");
const para = document.createElement("p");
const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");



let game;

let computerScore = 0;
let playerScore = 0;

button.forEach((btn) => btn.addEventListener("click", () => {
    let getUserChoice = btn.textContent;
    game = playRound(getUserChoice ,getComputerChoice());
    if (game) {
        playerScore++;
        player.textContent = `Player Score: ${playerScore}`;
        console.log(game);
    }else {
        computerScore++;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
    
    if (playerScore == 5) {
        result.textContent = "You are the Winner";
    }else if (computerScore == 5) {
        result.textContent = "Computer Win! You are the Loser";
    }
}
));

startBtn.addEventListener("click", () => {
    
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;

});


resetBtn.addEventListener("click", () => {
    computerScore = 0;
    playerScore = 0;
    result.textContent = "";
});





    



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
  // your code here!
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch(playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                para.textContent = "You Lose! Paper beats Rock";
                result.appendChild(para);
                return false;
            }else if (computerSelection == "scissors"){
                para.textContent = "You Win! Rock beats Scissors";
                result.appendChild(para);
                return true;
            }else {
                para.textContent = "It's a Tie!";
                result.appendChild(para);
                return undefined;
            }
            break;
        case "paper":
            if (computerSelection == "rock") {
                para.textContent = "You Win! Paper beats Rock";
                result.appendChild(para);
                return true;
            }else if (computerSelection == "scissors"){
                para.textContent = "You Lose! Scissors beats Paper";
                result.appendChild(para);
                return false;
            }else {
                para.textContent = "It's a Tie!";
                result.appendChild(para);
                return undefined;
            }
            break;
        default:
            if (computerSelection == "rock") {
                para.textContent = "You Lose! Rock beats Scissors";
                result.appendChild(para);
                return false;
            }else if (computerSelection == "scissors"){
                para.textContent = "It's a Tie!";
                result.appendChild(para);
                return undefined;
            }else {
                para.textContent = "You Win! Scissors beats Paper";
                result.appendChild(para);
                return true;
            }
            break; 
    }
        
}


