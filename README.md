# **TechStore – E-commerce Web Application**

A fully responsive, feature-rich e-commerce web application built using **HTML, CSS, JavaScript**, and **Node.js**, with **Firebase Authentication** and **LocalStorage** based cart management.

This project simulates a real online shopping experience, including product browsing, cart operations, checkout, and a mock payment workflow.

---

## 🚀 **Features**

### **Frontend**

* Modern UI designed using **HTML5, CSS3**, and responsive layouts.
* Dynamic product display using JavaScript.
* “Add to Cart” functionality using LocalStorage.
* Real-time updates on cart items and total price.
* Checkout form with validation.
* Multiple payment method simulation (UPI/Card/Wallet).

### **Backend**

* Basic Node.js server setup (`server/` directory).
* Ready for API integration and database support.

### **Authentication**

* Firebase Authentication (email & password login).
* Secures user-specific pages like Orders.

---

## 📂 **Project Structure**

```
BITS_final_complete/
│
├── public/
│   ├── index.html
│   ├── cart.html
│   ├── checkout.html
│   ├── payment.html
│   ├── images/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── cart-page.js
│   │   ├── checkout-page.js
│   │   ├── payment-page.js
│   │   └── login.js
│   └── firebase-init.js
│
├── server/
│   ├── server.js (if included)
│   └── node_modules/
│
└── README.md
```

---

## 🛒 **Core Modules Explained**

### 🔹 **1. Home Page (index.html)**

* Displays product cards with images, pricing, and Add to Cart buttons.
* Connected to product data via JavaScript.

### 🔹 **2. Cart System**

* Entirely managed using LocalStorage.
* Users can:

  * Add / remove items
  * Increase / decrease quantity
  * View final bill dynamically
* Code file: `public/js/cart-page.js`

### 🔹 **3. Checkout Page**

* Collects delivery and user information.
* Validates user input before proceeding.
* Code: `public/js/checkout-page.js`

### 🔹 **4. Payment Workflow**

* Three payment modes:

  * Card
  * UPI
  * Wallet
* Includes basic validation and success redirection.
* Code: `public/js/payment-page.js`

### 🔹 **5. Login System**

* Uses Firebase Authentication.
* Email and password-based login/register.
* Code: `public/js/login.js`

---

## 🔧 **Technologies Used**

### **Frontend**

* HTML5
* CSS3
* Vanilla JavaScript

### **Backend**

* Node.js
* Express.js (if used)

### **Cloud**

* Google Firebase Authentication

### **Storage**

* LocalStorage (Cart, User temporary data)

---

## ⚙️ **How to Run the Project**

### **Option 1: Open Directly (Frontend Only)**

1. Extract the project folder.
2. Open `public/index.html` in any browser.

### **Option 2: Run With Node.js (Recommended)**

1. Open terminal inside `/server` folder.
2. Install dependencies:

   ```
   npm install
   ```
3. Start server:

   ```
   node server.js
   ```
4. Open in browser:

   ```
   http://localhost:3000
   ```

---

## 🧪 **Testing Flow**

1. Open Home Page → Add products to cart
2. Go to Cart → update quantity / remove items
3. Proceed to Checkout → fill form
4. Choose Payment Method → simulate payment
5. Get redirected to Confirmation page

---

## 🔮 **Future Enhancements**

* Integrate Razorpay / PayPal Payment Gateway
* MongoDB or Firebase Firestore database
* Admin dashboard for product management
* Search and product filtering
* User order history module

---

## 👨‍💻 **Author**

Uddyesh Patel
College Project – E-commerce Web Application
Tech Stack: HTML | CSS | JavaScript | Node.js | Firebase

