const express = require("express");
const router = express.Router();
const { requireSignIn } = require("../middlewares/authentication");
const {
  lessonById,
  read,
  list,
  comment,
  create,
  getLessonsByPartId,
} = require("../controllers/lesson");
const { userById } = require("../controllers/user");

router.get("/", list);
router.get("/:lessonId", read);
router.get("/read/:partId", getLessonsByPartId);

router.put("/comment/:userId", requireSignIn, comment);
router.post("/create/:partId", create);

router.param("lessonId", lessonById);
router.param("userId", userById);
module.exports = router;
