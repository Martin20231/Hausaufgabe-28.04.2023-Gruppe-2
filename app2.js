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
	fetchProduct(3)
	.then((product) => {
 	 updateProduct(product, 'product-3');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(4)
	.then((product) => {
 	 updateProduct(product, 'product-4');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(5)
	.then((product) => {
 	 updateProduct(product, 'product-5');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(6)
	.then((product) => {
 	 updateProduct(product, 'product-6');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(7)
	.then((product) => {
 	 updateProduct(product, 'product-7');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(8)
	.then((product) => {
 	 updateProduct(product, 'product-8');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(9)
	.then((product) => {
 	 updateProduct(product, 'product-9');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(10)
	.then((product) => {
 	 updateProduct(product, 'product-10');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(11)
	.then((product) => {
 	 updateProduct(product, 'product-11');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(12)
	.then((product) => {
 	 updateProduct(product, 'product-12');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(13)
	.then((product) => {
 	 updateProduct(product, 'product-13');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(14)
	.then((product) => {
 	 updateProduct(product, 'product-14');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(15)
	.then((product) => {
 	 updateProduct(product, 'product-15');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(16)
	.then((product) => {
 	 updateProduct(product, 'product-16');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(17)
	.then((product) => {
 	 updateProduct(product, 'product-17');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(18)
	.then((product) => {
 	 updateProduct(product, 'product-18');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(19)
	.then((product) => {
 	 updateProduct(product, 'product-19');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(20)
	.then((product) => {
 	 updateProduct(product, 'product-20');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(21)
	.then((product) => {
 	 updateProduct(product, 'product-21');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(22)
	.then((product) => {
 	 updateProduct(product, 'product-22');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(23)
	.then((product) => {
 	 updateProduct(product, 'product-23');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(24)
	.then((product) => {
 	 updateProduct(product, 'product-24');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(25)
	.then((product) => {
 	 updateProduct(product, 'product-25');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(26)
	.then((product) => {
 	 updateProduct(product, 'product-26');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(27)
	.then((product) => {
 	 updateProduct(product, 'product-27');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(28)
	.then((product) => {
 	 updateProduct(product, 'product-28');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(29)
	.then((product) => {
 	 updateProduct(product, 'product-29');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});
	fetchProduct(30)
	.then((product) => {
 	 updateProduct(product, 'product-30');
	})
	.catch((error) => {
  console.error('Fehler beim Abrufen des Produkts:', error);
	});

	const addToCartButtons = document.querySelectorAll('.add-to-cart');
const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
const quantityElements = document.querySelectorAll('.quantity');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const quantityElement = document.querySelector(`.quantity[data-id="${id}"]`);
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
  });
});

removeFromCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const quantityElement = document.querySelector(`.quantity[data-id="${id}"]`);
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
    }
  });
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let count = {};

function anzahlerh(id) {
  if (count[id] === undefined) {
    count[id] = 0;
  }
  count[id]++;
  updateDisplay(id);
  updateTotal();
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
  for (let key in count) {
    let preis = parseFloat(document.getElementById(`preis${key.slice(-1)}`).innerHTML);
    total += count[key] * preis;
  }
  document.getElementById('totalPrice').innerHTML = `Gesamtpreis ${total.toFixed(2)}€`;
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

	
  