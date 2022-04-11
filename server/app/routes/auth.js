const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");
const { userSignUpValidator } = require("../validators");
const {
  signup,
  signin,
  signout,
  requireSignIn,
} = require("../controllers/auth");

router.post("/signup", userSignUpValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
