import express from "express";

const router = express.Router();

// MOCK ONLINE PAYMENT
router.post("/mock", async (req, res) => {
  try {
    // Generate fake payment + order id
    const mockOrderId = "MOCK-" + Math.floor(Math.random() * 9999999);

    return res.json({
      success: true,
      orderId: mockOrderId,
      message: "Mock payment successful",
    });
  } catch (err) {
    console.error("Mock payment error:", err);
    return res.json({ success: false, message: err.message });
  }
});

// COD PAYMENT (Cash on Delivery)
router.post("/cod", async (req, res) => {
  try {
    const codOrderId = "COD-" + Math.floor(Math.random() * 9999999);

    return res.json({
      success: true,
      orderId: codOrderId,
      message: "COD accepted",
    });
  } catch (err) {
    console.error("COD payment error:", err);
    return res.json({ success: false, message: err.message });
  }
});

export default router;
