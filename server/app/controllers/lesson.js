const Lesson = require("../models/Lesson");
const Part = require("../models/Part");

exports.create = (req, res, next) => {
  const { title, videoId } = req.body;
  const { partId } = req.params;

  const lesson = new Lesson({
    title,
    videoId: `https://www.youtube.com/embed/${videoId}`,
    partId,
  });
  Part.findById(partId)
    .then((part) => {
      part.lessons.push(lesson);
      part.save();
      lesson.save();
      res.json(part);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.read = (req, res, next) => {
  res.json(req.lesson);
};
exports.getLessonsByPartId = (req, res, next) => {
  //   console.log(req.params.partId);
  Lesson.find({ partId: req.params.partId })
    .then((lessons) => {
      res.json(lessons);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.list = (req, res, next) => {
  Lesson.find({}).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({
        error: "Not found Lesson",
      });
    }
    res.json(data);
  });
};

exports.lessonById = (req, res, next, id) => {
  Lesson.findById(id).exec((err, lesson) => {
    if (err || !lesson) {
      return res.status(400).json({
        error: `Lesson Id ${id} not found`,
      });
    }
    req.lesson = lesson;
    next();
  });
};
exports.comment = (req, res, next) => {
  const comment = {
    text: req.body.text,
    commentedBy: req.profile._id,
  };
  Lesson.findByIdAndUpdate(
    req.body.lessonId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.commentedBy", "_id name")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
};
