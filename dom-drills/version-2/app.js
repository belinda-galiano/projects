// click handler
function onClick(event) {
  const screen = document.getElementById('screen');
  const text = event.target.textContent;

  screen.textContent += text;
}
// removing all text from the screen
function clearScreen() {
  document.getElementById('screen').textContent = '';
}
// evaluates the expression shown on the screen
function equalEvaluate() {
  const screen = document.getElementById('screen');
  // boolean - numerical expresion
  const isExpr = /^\d+[+*/-]\d+$/.test(screen.textContent);

  // If it is a numerical expresion
  if (isExpr) {
    const total = eval(screen.textContent);

    // (-)num/0 = (-)Infinity - update screen to 'error'
    if (total === Infinity || total === -Infinity || isNaN(total)) {
      screen.textContent = 'Error';
    } else {
      screen.textContent = total;
    }
  }
}

// This is the onload handler - the code inside is going to run wen the page is loaded

window.onload = () => {
  const elements = document.getElementsByClassName('display');
  // Adding a click handler to each number and operator button
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', onClick);
  }

  // Adding a click handler to the "clear" button
  const remove = document.getElementById('clear');
  remove.addEventListener('click', clearScreen);

  // Adding a click handler to the "equal" button
  const equal = document.getElementById('equals');
  equal.addEventListener('click', equalEvaluate);
};
