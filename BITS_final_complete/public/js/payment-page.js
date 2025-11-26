/* ===============================
   PAYMENT PAGE ENGINE
=============================== */

const CART = JSON.parse(localStorage.getItem("CART") || "[]");
const total = CART.reduce((sum, item) => sum + item.price, 0);

document.getElementById("pay-total").textContent = total;

let USER = null;

// FIXED AUTH LISTENER
fb.onAuth(user => {
  USER = user;
});

// Create Order
async function createOrder(paymentMethod, fakeOrderId) {
  const res = await fetch("http://localhost:3000/api/orders/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: USER ? USER.uid : "guest",
      email: USER ? USER.email : "guest",
      items: CART,
      total,
      paymentMethod,
      orderId: fakeOrderId
    })
  });

  const data = await res.json();

  if (data.success) {
    localStorage.removeItem("CART");
    window.location.href = `order-success.html?id=${data.orderId}`;
  } else {
    alert("Order failed: " + data.message);
  }
}

// Online Payment
document.getElementById("pay-online").onclick = async () => {
  const res = await fetch("http://localhost:3000/api/payment/mock", {
    method: "POST"
  });
  const data = await res.json();
  await createOrder("MockPay", data.orderId);
};

// COD
document.getElementById("pay-cod").onclick = async () => {
  const res = await fetch("http://localhost:3000/api/payment/cod", {
    method: "POST"
  });
  const data = await res.json();
  await createOrder("COD", data.orderId);
};
