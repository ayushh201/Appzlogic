import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  const { text } = req.body;

  try {
    const aiResponse = await axios.post("http://localhost:5001/predict", { text }, {
      headers: { "Content-Type": "application/json" }
    });

    res.json({ result: aiResponse.data.result });

  } catch (error) {
    console.error("Error from AI API:", error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: "AI server error",
      details: error.response?.data || error.message
    });
  }
});

export default router;

