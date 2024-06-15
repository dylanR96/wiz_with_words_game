const { Router } = require("express");
const { addWord } = require("../controller/users/addUserController.js");
const router = Router();

router.get("/", (req, res, next) => {
  res.send("Testing admin one two");
});

router.post("/word", addWord);

module.exports = router;
