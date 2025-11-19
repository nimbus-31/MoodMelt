const express = require("express");
const router = express.Router();
const Mood = require("../models/Mood");

router.get("/", async (req, res) => {
  const moods = await Mood.find().sort({ createdAt: -1 });
  res.json(moods);
});

router.post("/", async (req, res) => {
  try {
    const mood = await Mood.create({
      text: req.body.text,
      emoji: req.body.emoji,
      createdAt: new Date(),
    });
    res.json(mood);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  await Mood.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
