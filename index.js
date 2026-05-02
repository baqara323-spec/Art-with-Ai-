import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// simple test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API route (frontend yahan se data bheجے گا)
app.post("/generate", async (req, res) => {
  const userText = req.body.text;

  // yahan API key use hogi
  const apiKey = process.env.OPENAI_API_KEY;

  // example response (real AI call yahan hoti hai)
  res.json({
    message: "API received your text",
    yourInput: userText,
    keyStatus: apiKey ? "Key loaded ✅" : "No key ❌"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});