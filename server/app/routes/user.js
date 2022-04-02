const express = require("express");
const router = express.Router();
const {courseById} = require("../controllers/course");
const { userInfo, userById, registerCourse, getRegisteredCourses } = require("../controllers/user");
const {
  requireSignIn,
  isAuth,
  isAdmin,
} = require("../middlewares/authentication");

router.get("/:userId", requireSignIn, userInfo);
router.put('/registerCourse/:userId', requireSignIn, registerCourse )

router.param('courseId', courseById)
router.param("userId", userById);
module.exports = router;
