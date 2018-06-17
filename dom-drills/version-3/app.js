let currentColor = '';
const numSquares = 651;

// function that populates the page with canvas
function createCanvas() {
  const canvas = document.querySelector('.canvas');
  for (let i = 0; i < numSquares; i++) {
    const el = document.createElement('div');
    el.addEventListener('click', onClickPaint);
    canvas.appendChild(el);
  }
}
// function that create a color palette
function createPalette() {
  const palette = document.querySelector('.palette');
  const color = ['#000000', '#607D8B', '#795548', '#FF5722', '#FFC107', '#4CAF50', '#03A9F4', '#673AB7', '#F44336', '#E91E63'];

  for (let i = 0; i < color.length; i++) {
    const el = document.createElement('div');
    el.addEventListener('click', onClickPalette);
    el.style.backgroundColor = color[i];
    palette.appendChild(el);
  }
}
// create a current color display
function createCurrentColor() {
  const mainScreen = document.querySelector('.main-screen');
  const el = document.createElement('div');
  el.classList.add('displayColor');

  const subtitle = document.createElement('h6');
  subtitle.textContent = 'Current Color > ';

  const displayColor = document.createElement('div');
  displayColor.style.backgroundColor = currentColor;


  mainScreen.appendChild(el);
  el.appendChild(subtitle);
  el.appendChild(displayColor);
}

// Callback function that when clicked the background changes to the color
function onClickPaint(event) {
  event.target.style.backgroundColor = currentColor;
}

function onClickPalette(event) {
  currentColor = event.target.style.backgroundColor;
  document.querySelector('.displayColor div').style.backgroundColor = currentColor;
}

window.onload = () => {
  createCanvas();
  createPalette();
  createCurrentColor();
};

