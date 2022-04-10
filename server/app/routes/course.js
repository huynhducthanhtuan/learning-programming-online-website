const express = require("express");
const router = express.Router();
const {
  create,
  list,
  courseById,
  listBySearch,
  listSearch,
  read,
  deleteCourse,
  listManageCourses,
  updateCourse,
} = require("../controllers/course");
const AuthController = require("../controllers/auth");
const {
  requireSignIn,
  isAuth,
  isAdmin,
} = require("../middlewares/authentication");
const { userById } = require("../controllers/user");

router.get("/:courseId", read);
router.get("/", list);
router.get("/list/manage-courses", listManageCourses);

router.post("/create/:userId", requireSignIn, isAuth, isAdmin, create);

router.post("/by/search", listBySearch);
router.get("/search/courseByName", listSearch);
router.delete("/delete/:courseId", deleteCourse);
router.patch("/update/:courseId", updateCourse);

router.param("userId", userById);
router.param("courseId", courseById);

module.exports = router;
