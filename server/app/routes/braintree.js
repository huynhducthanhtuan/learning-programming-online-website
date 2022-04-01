const express = require("express");
const router = express.Router();

const { userInfo, userById } = require("../controllers/user");
const { requireSignIn } = require("../middlewares/authentication");
const { generateToken, processPayment } = require("../controllers/braintree");

router.get('/getToken/:userId',requireSignIn, generateToken )
router.post('/payment/:userId',requireSignIn, processPayment )

router.param("userId", userById)

module.exports = router