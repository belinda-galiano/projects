window.currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];

/*
 * draw the game board
 */
function createGame() {
  const gameboard = document.getElementById('gameboard');
  let square = null;

  for (let i = 0; i < 9; i++) {
    square = document.createElement('div');
    addClickListener(square);

    square.id = i;
    square.classList.add('square');

    // don't add bottom border on the bottom row
    if (i < 6) {
      square.classList.add('b-border');
    }

    // don't add right border on the right column
    if (i % 3 !== 2) {
      square.classList.add('r-border');
    }

    gameboard.appendChild(square);
  }
}

function displayMessage(message) {
  const messageEl = document.getElementsByClassName('message')[0];

  if (message) {
    messageEl.textContent = message;
  } else {
    messageEl.textContent = `Current Player: ${currentPlayer}`;
  }
}

function changeMessage() {
  document.getElementsByClassName('message')[0]
    .classList
    .add('end-message');
}

function makeMove(square, index) {
  square.textContent = currentPlayer;
  // Because we need to update of the var board state to check the combos and know whne the game is over
  board[index] = currentPlayer;
}


createGame();

