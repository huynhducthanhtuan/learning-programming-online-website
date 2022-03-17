const express = require("express");
const router = express.Router();
const { userInfo, userById } = require("../controllers/user");
const {
  requireSignIn,
  isAuth,
  isAdmin,
} = require("../middleware/authentication");

//
router.get("/secret/:userId", requireSignIn, isAuth, isAdmin, userInfo);



router.param("userId", userById);

module.exports = router;
