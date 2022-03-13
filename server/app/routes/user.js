const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const {requireSignIn} = require('../controllers/auth')

// router.get('/secret/:userId',requireSignIn, (req, res) => {
//     res.json({
//         user: req.profile
//     })
// } )
router.param('userId', UserController.userById)

module.exports = router