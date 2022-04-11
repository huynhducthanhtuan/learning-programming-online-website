const express = require("express");
const router = express.Router();
const {
  submitEmail,
  submitCode,
  resendCode,
  createNewPassword,
} = require("../controllers/forgotPassword");

router.post("/submit-email", submitEmail);
router.post("/submit-code", submitCode);
router.post("/resend-code", resendCode);
router.post("/create-new-password", createNewPassword);

module.exports = router;
