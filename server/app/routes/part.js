const express = require("express");
const router = express.Router();
const {
  create,
  edit,
  partById,
  read,
  list,
  getPartsByCourseId,
} = require("../controllers/part");

router.get("/:partId", read);
router.get("/", list);
router.post("/create/:courseId", create);
router.get("/read/:courseId", getPartsByCourseId);
// router.post("/edit/:partId", edit);

router.param("partId", partById);
module.exports = router;
