/* ===============================
   CHECKOUT PAGE ENGINE
=============================== */

const CART = JSON.parse(localStorage.getItem("CART") || "[]");

function renderCheckout() {
  const box = document.getElementById("checkout-items");
  const total = document.getElementById("checkout-total");

  if (!CART.length) {
    box.innerHTML = "<p>No items found.</p>";
    return;
  }

  // Render items
  box.innerHTML = CART.map((p) => `
    <p>${p.title} — $${p.price}</p>
  `).join("");

  // Total price
  total.textContent = CART.reduce((sum, item) => sum + item.price, 0);
}

renderCheckout();
