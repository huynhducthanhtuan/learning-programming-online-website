const express = require("express");
const router = express.Router();
const {create, list, courseById, listBySearch, listSearch} = require("../controllers/course");
const AuthController = require("../controllers/auth");
const {requireSignIn, isAuth, isAdmin} = require("../middleware/authentication");
const {userById} = require("../controllers/user")

router.get('/' , list)

router.post('/create/:userId' , requireSignIn, isAuth, isAdmin, create)

router.post('/by/search', listBySearch)
router.get('/search/courseByName', listSearch)

router.param('userId', userById)
router.param('courseId', courseById)

module.exports = router;
