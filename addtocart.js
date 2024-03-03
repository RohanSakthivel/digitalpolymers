// addtocart.js

let cartItems = [];

function addToCart(productId, productName, productPrice) {
    cartItems.push({ id: productId, name: productName, price: productPrice });
    updateCart();
}

function removeItem(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsElement.innerHTML = '';

    let totalPrice = 0;

    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <button onclick="removeItem(${index})">Remove</button>
            <p>size:</p>
            <select>
            <option>round</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option></select>
            <div  class="gggt"><input type="file">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="#fffffff" stroke-width="2"></path>
          <path d="M17 15V18M17 21V18M17 18H14M17 18H20" stroke="#fffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          ADD FILE </input>
          </div>
        `;
        cartItemsElement.appendChild(li);

        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: ₹${totalPrice}`;
}

// Add more functions or customize as needed
// main.js

