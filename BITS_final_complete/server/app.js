import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import ordersRoute from "./routes/order.js";
import paymentRoute from "./routes/payment.js";
import authRoute from "./routes/auth.js";
import chatRoute from "./routes/chat.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// API Routes
app.use("/api/orders", ordersRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/auth", authRoute);
app.use("/api/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("🔥 TechStore Backend running successfully!");
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
