/* jshint esversion: 8 */

let computerSequence = [];
let playerSequence = [];
let level = 0;

/*javascript query selectors*/
const buttonContainer = document.querySelector('.game-container');
const startButton = document.querySelector('.javascript-start');
const info = document.querySelector('.javascript-progress');
const gameHeading = document.querySelector('.javascript-heading');

/*Function to set/reset the game*/
function resetGame(text) {
  alert(text);
  computerSequence = [];
  playerSequence = [];
  level = 0;
  startButton.classList.remove('hidden');
  gameHeading.textContent = 'LightSpeed!';
  info.classList.add('hidden');
  buttonContainer.classList.add('no-click');
}

/*Function to set the players turn*/
function playerTurn(level) {
  buttonContainer.classList.remove('no-click');
  info.textContent = `Your Turn Now: Level:${level} - Clicks:${level}`;
}
/*Function to activate buttons when pushed*/
function activateButton(color) {
  const button = document.querySelector(`[data-button='${color}']`);
  button.classList.add('activated');
  setTimeout(() => {
    button.classList.remove('activated');
  }, 300);
}

/*Function to activate next button sequence*/
function playGame(nextSequence) {
  nextSequence.forEach((color, index) => {
    setTimeout(() => {
      activateButton(color);
    }, (index + 1) * 600);
  });
}

/*Function to move game to next level*/
function nextLevel() {
  const buttons = ['purple', 'green', 'blue', 'orange'];
  const random = buttons[Math.floor(Math.random() * buttons.length)];

  return random;
}

/* Function to activate next game/computer turn leading to player turn and initial game progress and level text. Number of levels in the game can be changed here*/
function nextGame() {
  level += 1;

  buttonContainer.classList.add('no-click');
  info.textContent = 'Please Wait For Computer..';
  gameHeading.textContent = `Level ${level} of 15`;

  const nextSequence = [...computerSequence];
  nextSequence.push(nextLevel());
  playGame(nextSequence);

  computerSequence = [...nextSequence];
  setTimeout(() => {
    playerTurn(level);
  }, level * 600 + 1000);

}

/*Function for activation of game buttons and the result/text when move is correct and result/text when move is wrong. 
Also shows how many 'clicks' the player has left to complete the sequence*/
function onClick(button) {
  const index = playerSequence.push(button) - 1;


  const remainingClicks = computerSequence.length - playerSequence.length;

  if (playerSequence[index] !== computerSequence[index]) {
    resetGame('Highly illogical Move! -  Game Over');
    return;
  }

  if (playerSequence.length === computerSequence.length) {
    if (playerSequence.length === 15) {
      resetGame('Congratulations! Very impressive - You Completed The Game');
      return;
    }

    playerSequence = [];
    info.textContent = 'Keep Going..';
    setTimeout(() => {
      nextGame();
    }, 1000);
    return;
  }
  info.textContent = `Your Turn Now: - Clicks:${remainingClicks}`;
}


/*function for start button that sets the game in motion (located at page footer). Event listeners identify which/when buttons are clicked*/
function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Please Wait for Computer';
  nextGame();
}

startButton.addEventListener('click', startGame);
buttonContainer.addEventListener('click', event => {
  const {
    button
  } = event.target.dataset;

  if (button) onClick(button);
});