const userModel = require("../../models/modelUser.js");
const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  const login = await userModel.findOne({
    username: username,
    password: password,
  });
  if (!login) {
    return res.status(400).send("Username or password incorrect");
  }
  const test = {
    success: true,
    userID: login._id,
    admin: login.admin,
  };
  res.status(200).json(test);
};
module.exports = loginUser;
