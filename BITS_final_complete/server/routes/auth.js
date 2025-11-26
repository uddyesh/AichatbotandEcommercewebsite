import express from "express";

const router = express.Router();

// Simple auth health check
router.get("/status", (req, res) => {
  res.json({ ok: true, message: "Auth route working" });
});

export default router;
