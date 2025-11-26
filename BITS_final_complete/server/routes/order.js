import express from "express";
import { db } from "../firebase-admin.js";

const router = express.Router();

// CREATE ORDER
router.post("/create", async (req, res) => {
  try {
    const { userId, email, items, total, paymentMethod, orderId } = req.body;

    // Basic validation
    if (!userId || !items || !items.length) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid order data" });
    }

    // Create new order ID
    const ref = db.ref("orders").push();

    const orderData = {
      id: ref.key,
      userId,
      email,
      items,
      total,
      paymentMethod,
      status: "Processing",
      createdAt: Date.now(),
    };

    // Store in main orders table
    await ref.set(orderData);

    // Store under user-specific orders
    await db.ref(`users-orders/${userId}/${ref.key}`).set(orderData);

    return res.json({ success: true, orderId: ref.key });
  } catch (err) {
    console.error("Order creation error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Server error: " + err.message });
  }
});

export default router;
