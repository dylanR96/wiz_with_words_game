const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  score: Number,
  wordDifficulty: Number,
});

const gameSchema = new mongoose.Schema({
  gameCode: { type: Number },
  gameMode: { type: String },
  maxRounds: { type: Number },
  createdAt: { type: Date },
  lastUpdated: { type: Date, default: Date.now },
  teams: [teamSchema], // Array of teamSchema objects
});

const Game = mongoose.model("games", gameSchema);

module.exports = Game;
