/* ===============================
   PRODUCT LIST (20 ITEMS)
=============================== */

const PRODUCTS = [
  { id: 1, title: "Apple iPhone 15 Pro", price: 1299, img: "https://images.unsplash.com/photo-1695048136780-3bc1e20f4084?q=80&w=800" },
  { id: 2, title: "MacBook Air M2", price: 1499, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800" },
  { id: 3, title: "Sony Headphones XM5", price: 399, img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800" },
  { id: 4, title: "Samsung S24 Ultra", price: 1399, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800" },

  { id: 5, title: "iPad Pro M2", price: 1099, img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800" },
  { id: 6, title: "AirPods Pro 2", price: 249, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800" },
  { id: 7, title: "Apple Watch Ultra 2", price: 799, img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800" },
  { id: 8, title: "Asus ROG Gaming Laptop", price: 1899, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800" },

  { id: 9, title: "Dell XPS 15", price: 1599, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800" },
  { id: 10, title: "Canon EOS R5", price: 3899, img: "https://images.unsplash.com/photo-1519183071298-a2962be96d54?q=80&w=800" },
  { id: 11, title: "Sony PS5 Console", price: 499, img: "https://images.unsplash.com/photo-1606813907291-79582f2df0f2?q=80&w=800" },
  { id: 12, title: "Xbox Series X", price: 499, img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367e?q=80&w=800" },

  { id: 13, title: "Apple TV 4K", price: 149, img: "https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=800" },
  { id: 14, title: "GoPro Hero 12", price: 399, img: "https://images.unsplash.com/photo-1519183071298-a2962be96d54?q=80&w=800" },
  { id: 15, title: "LG 55-inch OLED TV", price: 1299, img: "https://images.unsplash.com/photo-1593784991095-d516ef953b8d?q=80&w=800" },
  { id: 16, title: "JBL Bluetooth Speaker", price: 199, img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800" },

  { id: 17, title: "Apple Magic Keyboard", price: 99, img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800" },
  { id: 18, title: "Razer Gaming Mouse", price: 79, img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800" },
  { id: 19, title: "Samsung Galaxy Buds 2", price: 149, img: "https://images.unsplash.com/photo-1597817981950-80f6f4bb2d15?q=80&w=800" },
  { id: 20, title: "Logitech MX Master 3", price: 129, img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800" }

];



/* ===============================
   CART ENGINE
=============================== */

let CART = JSON.parse(localStorage.getItem("CART") || "[]");

function saveCart() {
  localStorage.setItem("CART", JSON.stringify(CART));
}

function updateCartCount() {
  const c = document.getElementById("cart-count");
  if (c) c.textContent = CART.length;
}

function addToCart(id) {
  const item = PRODUCTS.find(p => p.id === id);
  if (!item) return;

  CART.push(item);
  saveCart();
  updateCartCount();
}

/* Make addToCart GLOBAL */
window.addToCart = addToCart;

/* ===============================
   RENDER PRODUCTS + SEARCH
=============================== */

function loadProducts(list = PRODUCTS) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <img src="${p.src}" alt="${p.title}" />

      <div class="product-title">${p.title}</div>
      <div class="product-price">₹${p.price}</div>

      <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}


const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const t = searchInput.value.toLowerCase();
    loadProducts(PRODUCTS.filter(p => p.title.toLowerCase().includes(t)));
  });
}

/* ===============================
   AUTH UI UPDATE
=============================== */

fb.onAuth(user => {
  const login = document.getElementById("goLogin");
  const logout = document.getElementById("logoutBtn");
  const name = document.getElementById("user-name");

  if (user) {
    login.style.display = "none";
    logout.style.display = "inline-block";
    name.textContent = user.email;

    logout.onclick = () => fb.auth.signOut();
  } else {
    login.style.display = "inline-block";
    logout.style.display = "none";
    name.textContent = "Guest";
  }
});

/* ===============================
   AI CHATBOT
=============================== */

const toggle = document.getElementById("chatbot-toggle");
const box = document.getElementById("chatbot-box");
const closeBtn = document.getElementById("chatbot-close");
const msgBox = document.getElementById("chatbot-messages");
const input = document.getElementById("chatbot-input");
const sendBtn = document.getElementById("chatbot-send");

toggle.onclick = () => box.classList.remove("collapsed");
closeBtn.onclick = () => box.classList.add("collapsed");

function addBotMessage(text) {
  msgBox.innerHTML += `<div class="bot-msg">${text}</div>`;
  msgBox.scrollTop = msgBox.scrollHeight;

  // Voice output
  const ut = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(ut);
}

function addUserMessage(text) {
  msgBox.innerHTML += `<div class="user-msg">${text}</div>`;
  msgBox.scrollTop = msgBox.scrollHeight;
}

sendBtn.onclick = async () => {
  const text = input.value.trim();
  if (!text) return;

  addUserMessage(text);
  input.value = "";

  try {
    const res = await fetch("http://localhost:3000/api/chat/echo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();
    addBotMessage(data.reply);
  } catch {
    const t = text.toLowerCase();
    const user = fb.auth.currentUser;

    /* ================================
       1) SMART GREETINGS
    ================================= */
    if (["hi","hello","hey"].some(w => t.includes(w))) {
        addBotMessage("Hi! How can I help you today? 😊<br><br>[Try: cart, checkout, status, suggest items]");
        return;
    }

    /* ================================
       2) OPEN CART
    ================================= */
    if (t.includes("cart")) {
        addBotMessage(`
            Here is your cart:<br></br>
            <button class="chat-btn" onclick="window.location.href='cart.html'">
                Open Cart
            </button>
        `);
        return;
    }

    /* ================================
       3) CHECKOUT
    ================================= */
    if (["checkout","payment","buy now"].some(w => t.includes(w))) {
        addBotMessage(`
            Ready to checkout?<br><br>
            <button class="chat-btn" onclick="window.location.href='checkout.html'">
                Go to Checkout
            </button>
        `);
        return;
    }

    /* ================================
       4) PRODUCT SUGGESTIONS
    ================================= */
    if (["suggest","recommend","items","best"].some(w => t.includes(w))) {

        const picks = PRODUCTS.sort(() => 0.5 - Math.random()).slice(0, 3);

        let html = "<b>Here are some great picks:</b><br><br>";

        picks.forEach(p => {
            html += `
                <div class="chat-product">
                    <img src="${p.img}">
                    <div>
                        <b>${p.title}</b><br>
                        $${p.price}<br>
                        <button class="chat-btn" onclick="addToCart(${p.id})">
                            Add to Cart
                        </button>
                    </div>
                </div><br>
            `;
        });

        addBotMessage(html);
        return;
    }

    /* ================================
       5) ORDER STATUS
    ================================= */
    if (t.includes("status") || t.includes("track")) {
        if (!user) {
            addBotMessage(`
                Please log in to check your orders.<br><br>
                <button class="chat-btn" onclick="window.location.href='login.html'">
                    Login
                </button>
            `);
            return;
        }

        const orderId = (t.match(/\d+/) || [null])[0];

        if (!orderId) {
            addBotMessage("Please enter your order ID. Example:<br>status 12345");
            return;
        }

        addBotMessage("Checking order status...");

        fetch(`http://localhost:3000/api/orders/status/${orderId}`)
            .then(r => r.json())
            .then(d => {
                if (d.success) {
                    addBotMessage(`Order <b>${orderId}</b> status: <b>${d.status}</b>`);
                } else {
                    addBotMessage("Order not found.");
                }
            })
            .catch(() => addBotMessage("Server not reachable right now."));
        return;
    }

    /* ================================
       6) CANCEL ORDER
    ================================= */
    if (t.includes("cancel order")) {

        if (!user) {
            addBotMessage(`
                Please log in to cancel orders.<br><br>
                <button class="chat-btn" onclick="window.location.href='login.html'">
                    Login
                </button>
            `);
            return;
        }

        const orderId = (t.match(/\d+/) || [null])[0];

        if (!orderId) {
            addBotMessage("Please type: cancel order 12345");
            return;
        }

        addBotMessage(`
            Are you sure you want to cancel order <b>${orderId}</b>?<br><br>
            <button class="chat-btn" onclick="cancelMyOrder('${orderId}')">
                Yes, Cancel Order
            </button>
        `);

        window.cancelMyOrder = async function (id) {
            addBotMessage("Cancelling your order...");

            try {
                const res = await fetch("http://localhost:3000/api/orders/cancel", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ orderId: id })
                });
                const data = await res.json();

                if (data.success) {
                    addBotMessage(`Order <b>${id}</b> has been cancelled.`);
                } else {
                    addBotMessage("Cancellation failed.");
                }
            } catch {
                addBotMessage("Server not reachable.");
            }
        };
        return;
    }

    /* ================================
       7) REORDER ITEMS (LOCAL ONLY)
    ================================= */
    if (t.includes("reorder")) {
        addBotMessage(`
            Reordering is not connected to backend yet.<br>
            But I can help you pick items again!<br><br>
            Try <b>suggest items</b>.
        `);
        return;
    }

    /* ================================
       8) REFUND (LOCAL ONLY)
    ================================= */
    if (t.includes("refund")) {
        addBotMessage(`
            Refund support is not linked to server yet.<br><br>
            But I can forward your request:<br><br>
            <button class="chat-btn" onclick="window.location.href='support.html'">
                Contact Support
            </button>
        `);
        return;
    }

    /* ================================
       9) PRICE ALERT (LOCAL ONLY)
    ================================= */
    if (t.includes("price alert")) {
        addBotMessage("Price alerts are saved locally. I will notify you next time you open the site.");
        return;
    }

    /* ================================
       🔟 PRODUCT FINDER
    ================================= */
    if (t.includes("find") || t.includes("recommend me")) {
        addBotMessage("What’s your budget? (example: under 1000)");
        return;
    }

    if (t.includes("under")) {
        const budget = parseInt(t.match(/\d+/));
        const results = PRODUCTS.filter(p => p.price <= budget);

        if (results.length === 0) {
            addBotMessage("No items found in that budget.");
            return;
        }

        let html = `<b>Items under $${budget}:</b><br><br>`;

        results.slice(0,3).forEach(p => {
            html += `
                <div class="chat-product">
                    <img src="${p.img}">
                    <div>
                        <b>${p.title}</b><br>
                        $${p.price}<br>
                        <button class="chat-btn" onclick="addToCart(${p.id})">Add to Cart</button>
                    </div>
                </div><br>
            `;
        });

        addBotMessage(html);
        return;
    }

    /* ================================
       11) DELIVERY SIMULATION
    ================================= */
    if (t.includes("track delivery")) {
        addBotMessage("Your order is being processed...");

        setTimeout(() => addBotMessage("📦 Order Packed"), 1500);
        setTimeout(() => addBotMessage("🚚 Out for Delivery"), 3000);
        setTimeout(() => addBotMessage("🏠 Arriving Soon"), 4500);
        return;
    }

    /* ================================
       12) COUPON SUGGESTIONS
    ================================= */
    if (t.includes("coupon") || t.includes("discount")) {
        addBotMessage("Use coupon <b>TECH10</b> for 10% off!");
        return;
    }

    /* ================================
       13) DEFAULT + SUPPORT ESCALATION
    ================================= */
    addBotMessage(`
        I'm not sure I understand.<br><br>
        Do you want to contact support?<br><br>
        <button class="chat-btn" onclick="window.location.href='support.html'">
            Chat With Support
        </button>
    `);
}
};

/* ===============================
   VOICE INPUT
=============================== */

const voiceBtn = document.getElementById("voice-btn");
if ("webkitSpeechRecognition" in window) {
  const rec = new webkitSpeechRecognition();
  rec.lang = "en-US";

  voiceBtn.onclick = () => rec.start();

  rec.onresult = (e) => {
    const text = e.results[0][0].transcript;
    input.value = text;
    sendBtn.click();
  };
}

/* ===============================
   INIT
=============================== */

loadProducts();
updateCartCount();
