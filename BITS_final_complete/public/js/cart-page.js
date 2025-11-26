/* ===============================
   CART PAGE ENGINE
=============================== */

let CART = JSON.parse(localStorage.getItem("CART") || "[]");

const cartBox = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

function saveCart() {
  localStorage.setItem("CART", JSON.stringify(CART));
}

function renderCart() {
  if (!cartBox) return;

  // If empty
  if (CART.length === 0) {
    cartBox.innerHTML = `<p>Your cart is empty.</p>`;
    cartTotal.textContent = "₹0";
    return;
  }

  // Render items
  cartBox.innerHTML = CART.map((item, i) => `
    <div class="cart-item">
      <img class="cart-img" src="${item.src}" alt="${item.title}" />

      <div class="cart-info">
        <h4>${item.title}</h4>
        <p>₹${item.price}</p>

        <button class="btn-danger" onclick="removeItem(${i})">
          Remove
        </button>
      </div>
    </div>
  `).join("");

  // Calculate total
  const total = CART.reduce((sum, item) => sum + Number(item.price), 0);
  cartTotal.textContent = `₹${total}`;
}

// Remove item
function removeItem(index) {
  CART.splice(index, 1);
  saveCart();
  renderCart();
}

window.removeItem = removeItem;

// Initial load
renderCart();
