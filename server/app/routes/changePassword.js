const express = require("express");
const router = express.Router();
const {
  checkValidOldPassword,
  changePassword,
} = require("../controllers/changePassword");

router.post("/", checkValidOldPassword, changePassword);
// router.post("/", changePassword);

module.exports = router;
