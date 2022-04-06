const express = require("express");
const router = express.Router();
const {requireSignIn} = require('../middlewares/authentication')
const {lessonById, read, list, comment} = require('../controllers/lesson')
const {userById} = require("../controllers/user")

router.get('/', list)
router.get('/:lessonId', read)
router.put('/comment/:userId', requireSignIn, comment)

router.param('lessonId', lessonById)
router.param('userId', userById)
module.exports = router;
