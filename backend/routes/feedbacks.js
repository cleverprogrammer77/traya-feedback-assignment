const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedbackModel");
router.post("/", async (req, res) => {
  const { name, mobile } = req.body;
  try {
    const feedback = await Feedback.create({ name, mobile });
    res.status(200).json(feedback);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", (req, res) => {
  res.status(200).json({ msg: "welcome to my app" });
});

module.exports = router;
