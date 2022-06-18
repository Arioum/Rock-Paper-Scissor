const playerResult = document.getElementById("player-choice");
const computerResult = document.getElementById("computer-choice");
const displayResult = document.getElementById("Result");

const choices = ["Rock", "Paper", "Scissor"];
let result;

const playerChoice = choices[Math.floor(Math.random() * choices.length)];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

playerResult.textContent = playerChoice;
computerResult.textContent = computerChoice;

if ( computerChoice == "Rock" && playerChoice == "Scissor" ) {
    result = "computerwins";
} else if ( computerChoice == "Scissor" && playerChoice == "Rock" ) {
    result = "playerwins";
} else if ( computerChoice == "Paper" && playerChoice == "Scissor" ) {
    result = "playerwins";
} else if ( computerChoice == "Scissor" && playerChoice == "Paper") {
    result = "computerwins";
} else if ( computerChoice == "Rock" && playerChoice == "Paper" ) {
    result = "playerwins";
} else if ( computerChoice == "Paper" && playerChoice == "Rock" ){
    result = "computerwins";
} else {
    result = "Draw";
}

displayResult.textContent = result;