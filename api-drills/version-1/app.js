
function createEl(character) {
  const ul = document.querySelector('#characters');
  const li = document.createElement('li');

  const img = document.createElement('img');
  img.src = character.imageURL;

  const span = document.createElement('span');
  span.textContent = `${character.name}-${character.phone}`;

  const p = document.createElement('p');
  p.textContent = character.message;

  const anch = document.createElement('a');
  anch.textContent = `Leave ${character.name} a message`;
  anch.href = `contact.html?character=${encodeURIComponent(character.name)}`;

  li.appendChild(img);
  li.appendChild(span);
  li.appendChild(p);
  li.appendChild(anch);
  ul.appendChild(li);
}
// clicked takes the user to the `contact.html` page

function onFetch(jsonResponse) {
  for (const character of jsonResponse.data) {
    createEl(character);
  }
}

function toJSON(response) {
  return response.json();
}

7;
window.onload = () => {
  fetch('https://quiet-bayou-99554.herokuapp.com/api/v1/contacts')
    .then(toJSON)
    .then(onFetch);
};
