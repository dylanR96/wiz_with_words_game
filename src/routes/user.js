const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  res.send("Testing user one two");
});

module.exports = router;
