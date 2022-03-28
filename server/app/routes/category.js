const express = require("express");
const router = express.Router();
const {list, create, categoryById} = require('../controllers/category')
const {requireSignIn, isAuth, isAdmin } = require('../middleware/authentication')
const {userById} = require('../controllers/user')

router.get('/', list)
router.post('/create/:userId',requireSignIn, isAuth, isAdmin , create)

router.param('userId', userById)
router.param('categoryId', categoryById)

module.exports = router;
