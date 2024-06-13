const { Router } = require("express");
const router = Router();
const adminRoute = require("./admin.js");
const userRoute = require("./user.js");
const addGame = require("../controller/game/addGameController.js");

router.get("/", (req, res, next) => {
  res.send("Testing one two");
});

router.post("/game", addGame);

router.use("/admin", adminRoute);
router.use("/user", userRoute);

module.exports = router;
