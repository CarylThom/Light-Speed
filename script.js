let playerSequence = [];
let computerSequence = [];
let level = 0;

/*const*/
const gameHeading = document.querySelector('.javascript-heading');

const buttonContainer = document.querySelector('.game-container');

const startButton = document.querySelector('.javascript-start');

const info = document.querySelector('.javascript-progress');

/*activate buttons*/
function activateButton(color) {
const button = document.querySelector(`[data-button='${color}']`);
}


/*start game/start button*/
function startGame() {
startButton.classList.add('hidden');
info.classList.remove('hidden');
info.textContent = 'Please wait for Computer';
nextRound();
}

  




function playerTurn(){

}

function playGame(){

}

function nextGame(){
    
}