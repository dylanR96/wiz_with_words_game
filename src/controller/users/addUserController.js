// const User = mongoose.model(collection, userSchema);
const userModel = require("../../models/modelUser.js");

const addUser = async (req, res, next) => {
  const { username, password, email } = req.body;
  const newUser = new userModel({
    username: username,
    password: password,
    email: email,
    admin: false,
    active: true,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = addUser;
