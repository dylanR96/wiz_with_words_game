const addGameModel = require("../../models/modelGame.js");

const addGame = async (req, res, next) => {
  const { gameCode, gameMode, maxRounds, teams } = req.body;
  const newGame = new addGameModel({
    gameCode: gameCode,
    gameMode: gameMode,
    maxRounds: maxRounds,
    teams: teams,
    createdAt: Date.now(),
    lastUpdated: Date.now(),
  });
  await newGame.save();
  res.status(200).send("Game added");
};

module.exports = addGame;
