// const User = mongoose.model(collection, userSchema);
const addUserModel = require("../../models/modelUser.js");
const addWordModel = require("../../models/modelWord.js");

const addUser = async (req, res, next) => {
  const newUser = new addUserModel({
    username: "testuser",
    password: "password",
    email: "skrap@andreasb.se",
    admin: true,
    active: false,
  });

  newUser.save();
};

const addWord = async (req, res, next) => {
  const { swedish_word, english_word, difficulty } = req.body;

  req.query.approved === "approve" ? (isApproved = true) : (isApproved = false);

  const newWord = new addWordModel({
    swedish_word: swedish_word,
    english_word: english_word,
    difficulty: difficulty,
    approved: isApproved,
  });
  await newWord.save();
  res.status(200).send("Word added");
};

module.exports = { addWord, addUser };
