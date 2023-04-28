function fetchProduct(id) {
	return fetch(`https://dummyjson.com/products/${id}`)
	  .then((res) => res.json());
  }
  
  function fetchProduct(id) {
	return fetch(`https://dummyjson.com/products/${id}`)
	  .then((res) => res.json());
  }
  
  function updateProduct(product, idPrefix) {
	const titleEl = document.getElementById(`${idPrefix}-title`);
	const priceEl = document.getElementById(`${idPrefix}-price`);
	const imageEl = document.getElementById(`${idPrefix}-image`);
	const descriptionEl = document.getElementById(`${idPrefix}-description`);
  
	titleEl.textContent = product.title;
	descriptionEl.textContent = product.description;
	priceEl.textContent = product.price.toFixed(2) + '€';
	imageEl.src = product.thumbnail;
  }
  fetchProduct(1)
	.then((product) => {
	  updateProduct(product, 'product-1');
	 preis1 = product.price.toFixed(2)
	  return preis1
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(2)
	.then((product) => {
 	 updateProduct(product, 'product-2');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	





let count = {};
let a1z;
function anzahlerh(id) {
  if (count[id] === undefined) {
    count[id] = 0;
  }
  count[id]++;
  updateTotal();
  updateDisplay(id);
   a1z =count[id]
   return a1z
}

function anzahlweniger(id) {
  if (count[id] === undefined) {
    count[id] = 0;
  }
  if (count[id] > 0) {
    count[id]--;
  }
  updateDisplay(id);
  updateTotal();
}

function updateDisplay(id) {
  document.getElementById(`anzahl${id.slice(-1)}`).innerHTML = `Anzahl: ${count[id]}`;
}

function updateTotal() {
  let total = 0;
  total=a1z * preis1
  console.log(a1z + "test")
  document.getElementById('total-btn').innerHTML = `Gesamtpreis ${total.toFixed(2)}€`;
}
// Select the button element
const totalBtn = document.querySelector('#total-btn');

// Add a click event listener to the button
totalBtn.addEventListener('click', () => {
  // Fetch the carts data from the API
  fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
      // Get the total price of all carts
      const totalPrice = data.reduce((acc, cart) => acc + cart.totalPrice, 0);

      // Update the button text content with the total price
      totalBtn.textContent = `Gesamt: ${totalPrice.toFixed(2)}€`;
    });
});

	
  