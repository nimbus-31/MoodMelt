const mongoose = require("mongoose");

const MoodSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Mood", MoodSchema);
