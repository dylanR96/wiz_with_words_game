const { Router } = require("express");
const router = Router();
const testFunction = require("../controller/users/addUserController.js");
router.get("/", (req, res, next) => {
  res.send("Testing user one two");
});
router.get("/register", testFunction);
module.exports = router;
