const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
  swedish_word: { type: String },
  english_word: { type: String },
  difficulty: { type: Number },
  approved: { type: Boolean, default: false },
});

const addWordModel = mongoose.model("word", wordSchema);

module.exports = addWordModel;
