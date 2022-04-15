const Course = require("../models/Course");
const Part = require("../models/Part");

exports.read = (req, res, next) => {
  res.json(req.part);
};
exports.list = (req, res, next) => {
  Part.find({})
    .then((parts) => {
      res.json(parts);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getPartsByCourseId = (req, res, next) => {
  Part.find({ courseId: req.params.courseId })
    .populate("lessons")
    .then((parts) => {
      res.json(parts);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.partById = (req, res, next, id) => {
  Part.findById(id)
    .populate("lessons")
    .exec((err, part) => {
      if (err || !part) {
        return res.status(400).json({
          error: `Part id ${id} not found `,
        });
      }
      req.part = part;
      next();
    });
};

exports.create = (req, res) => {
  const { topic } = req.body;
  const { courseId } = req.params;
  // res.json({ topic, courseId });
  const part = new Part({ topic, courseId });
  Course.findById({ _id: courseId })
    .then((course) => {
      course.parts.push(part);
      part.save();
      course.save();
      res.json(course);
      //   console.log(course.parts);
      //   res.json(course);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.edit = (req, res) => {
  Part.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.json())
    .catch(next);
};
