const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

// To manage player name configuration
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backDropElement = document.getElementById('backdrop');

// To click and edit player names
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');

// Get the form element
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors')

// Get access to all game fields (9 li)
const gameFieldElements = document.querySelectorAll('#game-board li');

// To close overlays
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');

// To start a new game
const startNewGameBtnElement = document.getElementById('start-game-btn');
const gameAreaElement = document.getElementById('active-game');

const gameOverElement = document.getElementById('game-over');

// To set the player name in display on the gameboard
const activePlayerNameElement = document.getElementById('active-player-name');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

// Capture form 'submit'
formElement.addEventListener('submit', savePlayerConfig);


cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backDropElement.addEventListener('click', closePlayerConfig);

// New Game event listener
startNewGameBtnElement.addEventListener('click', startNewGame);


// Add an event listener to every game field captured by querySelectorAll
for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click', selectGameField);
}
