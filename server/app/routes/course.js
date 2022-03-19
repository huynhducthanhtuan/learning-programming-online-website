const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/CourseController");

router.get("/:slug", CourseController.show);
router.post("/create", CourseController.create);
router.post("/search", CourseController.searchCourse);
router.delete("/delete/:id", CourseController.destroy);

module.exports = router;
