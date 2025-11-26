import express from "express";
import OpenAI from "openai";

const router = express.Router();

// Load GPT-4o-mini client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple in-memory chat history
let conversation = [];

router.post("/message", async (req, res) => {
  try {
    const userMessage = req.body.message;

    conversation.push({ role: "user", content: userMessage });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are TechStore's helpful AI support assistant. Be friendly, helpful, and concise." },
        ...conversation
      ],
    });

    const aiReply = completion.choices[0].message.content;

    conversation.push({ role: "assistant", content: aiReply });

    res.json({ reply: aiReply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ reply: "Server error. Please try again." });
  }
});

export default router;
