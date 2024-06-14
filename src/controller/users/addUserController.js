// const User = mongoose.model(collection, userSchema);
const addUserModel = require("../../models/modelUser.js");

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

module.exports = addUser;
