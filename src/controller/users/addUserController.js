// const User = mongoose.model(collection, userSchema);
const addUser = require("../../models/modelUser.js");

const testFunction = async () => {
  const testUser = new addUser({
    username: "testuser",
    password: "password",
    email: "skrap@andreasb.se",
    admin: true,
    active: false,
  });

  testUser.save();
};

module.exports = testFunction;
