const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/CourseController");

//detail course
router.get("/:slug", CourseController.show);

// create course
router.post("/create", CourseController.create);

// search course
router.post("/search", CourseController.searchCourse);

// delete course
router.delete("/delete/:id", CourseController.destroy);

module.exports = router;
