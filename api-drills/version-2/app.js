// If the data is properly formatted, receive a successful response with the new order info
function handlerResponse(jsonResponse) {
  if (jsonResponse.data) {
    document.querySelector('.feedback').textContent = `Order ID ${jsonResponse.data.id} submitted!`;
    // If it is an error render the error message to the `.feedback` element
  } else {
    document.querySelector('.feedback').textContent = "Sorry, Your request wasn't formatted correctly";
  }
}
// function to submit the order when at least one item is in the ord
function onSubmit() {
  // If no items are added to order, alert an error message
  const order = getOrders();
  if (order.length === 0) {
    alert('Error: No items added to order!');
    return;
  }

  // If items are added send the items information
  fetch('https://burrito-guy-orders-api.herokuapp.com/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        items: order,
      },
    }),
  }).then(response => response.json())
    .then(handlerResponse);
}

// Putting the items I clicked inside the order array.
function getOrders() {
  const orderList = document.querySelectorAll('#order-list li');
  const order = [];

  for (let i = 0; i < orderList.length; i++) {
    order.push({ name: orderList[i].textContent });
  }

  return order;
}

// add the item to the `#order-list` when clicked
function onClick(event) {
  const orderList = document.getElementById('order-list');
  const addItem = document.createElement('li');

  addItem.classList.add('item');
  addItem.textContent = event.currentTarget.textContent;
  orderList.appendChild(addItem);
}
// create a 'li' for the `#item-list`/ Add a click listener to each `li`
function createEl(item) {
  const list = document.getElementById('item-list');
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = item.name;

  li.addEventListener('click', onClick);

  list.appendChild(li);
}

// add  a 'li' for each item to the `#item-list`
function onFetch(jsonResponse) {
  for (const item of jsonResponse.data) {
    createEl(item);
  }
}

function toJoson(response) {
  return response.json();
}

window.onload = () => {
  // make a 'GET' request
  fetch('https://burrito-guy-orders-api.herokuapp.com/api/v1/items')
    .then(toJoson)
    .then(onFetch);

  // SUBMIT ORDER__ whe the button is clicked
  const submit = document.querySelector('button');
  submit.addEventListener('click', onSubmit);
};
