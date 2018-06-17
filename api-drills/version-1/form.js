function handlerResponse(response) {
  if (response.data) {
    document.getElementById('response').textContent = response.data.message;
  } else if (response.error.message) {
    document.getElementById('response').textContent = response.error.message;
  }

}


function onSubmit(event) {
  event.preventDefault();
  fetch('https://quiet-bayou-99554.herokuapp.com/api/v1/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        character: document.getElementById('name').value,
        message: document.getElementById('msg').value,
      },
    }),
  }).then(response => response.json())
    .then(handlerResponse);
}


window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const characterName = urlParams.get('character');
  const inputCharacter = document.querySelector('input');
  inputCharacter.value = characterName;

  const submit = document.getElementById('contact-form');
  submit.addEventListener('submit', onSubmit);
};
