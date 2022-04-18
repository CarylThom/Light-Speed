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
  const buttons = ['red', 'green', 'blue', 'yellow'];
  const random = buttons[Math.floor(Math.random() * buttons.length)];

  return random;
}

/*function for start button on footer of page, that sets the game in motion*/
function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Please Wait for Computer';
  nextGame();
}








