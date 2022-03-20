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

router.post("/signUp", userSignUpValidator, signup);
router.post("/signIn", signin);
router.get("/signOut", signout);

module.exports = router;
