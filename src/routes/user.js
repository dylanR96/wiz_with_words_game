const { Router } = require("express");
const addUser = require("../controller/users/addUserController.js");
const loginUser = require("../controller/users/loginController.js");
const {
  addUserMiddleware,
  loginMiddleware,
} = require("../middleware/mwUser.js");

const router = Router();

router.get("/", (req, res, next) => {
  res.send("Testing user one two");
});
router.post("/register", addUserMiddleware, addUser);
router.post("/login", loginMiddleware, loginUser);
module.exports = router;

// Vilka funktioner vill vi ha:

/*
Users:
  Förslag på nya ord
  Starta spel
    Välj språk (Svenska, Engelska, Båda)
    Välja antal lag
    Välja svårighetsgrad per lag

    Standard mode // Först till 40 poäng
    Max rounds // Välj antal rundor

Admin:
 - Lägga till nya ord
 - Acceptera förslagen på nya ord


 - Logga in som user/admin

 */
