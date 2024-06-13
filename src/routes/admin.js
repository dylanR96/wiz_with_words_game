const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  res.send("Testing admin one two");
});

module.exports = router;
