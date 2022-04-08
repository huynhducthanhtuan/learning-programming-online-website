const express = require("express");
const router = express.Router();
const { viewProfile, updateProfile } = require("../controllers/profile");
const { userUpdateProfileValidator } = require("../validators");

router.post("/", viewProfile);
// router.post("/update", updateProfile);
router.post("/update", userUpdateProfileValidator, updateProfile);

module.exports = router;
