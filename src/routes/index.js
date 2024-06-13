const { Router } = require("express");
const router = Router();
const adminRoute = require("./admin.js");
const userRoute = require("./user.js");
router.get("/", (req, res, next) => {
  res.send("Testing one two");
});

router.use("/admin", adminRoute);
router.use("/user", userRoute);

module.exports = router;
