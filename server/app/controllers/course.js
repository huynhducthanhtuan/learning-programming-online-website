const Course = require("../models/Course");
const User = require("../models/User");
const Lesson = require("../models/Lesson");

exports.read = (req, res, next) => {
  res.json(req.course);
};

exports.courseById = (req, res, next, id) => {
  Course.findById(id)
    .populate("category")
    .populate("parts", "_id topic lessons isSelect")
    .populate({
      path: "parts",
      populate: { path: "lessons" },
    })
    // .populate("parts.lessons", "_id topic lessons isSelect")
    // .populate("parts.lessons")
    .exec((err, course) => {
      if (err || !course) {
        return res.status(400).json({
          error: `Course id ${id} not found `,
        });
      }
      req.course = course;
      next();
    });
};

exports.deleteCourse = (req, res, next) => {
  Course.findByIdAndDelete({ _id: req.params.courseId })
    .then((courseDeleted) => {
      res.json(courseDeleted);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateCourse = (req, res, next) => {
  const { name, price, pic, category, description } = req.body;
  const { courseId } = req.params.courseId;
  Course.findByIdAndUpdate(
    { _id: req.params.courseId },
    { name, price, image: pic, category, description }
  )
    .then((courseUpdate) => {
      res.json("Update course success");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.listManageCourses = (req, res, next) => {
  Course.find({})
    .then((courses) => {
      res.json(courses);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.create = (req, res, next) => {
  const { name, price, pic, category, description } = req.body;
  console.log("req.body ", req.body);
  if (!name || !price) {
    res.status(422).json({ error: "Pleases add all the fields" });
  }

  const course = new Course({
    name,
    price,
    image: pic,
    category,
    description,
  });
  course
    .save()
    .then((courseSaved) => {
      res.json({ course: courseSaved });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.list = (req, res, next) => {
  const order = req.query.order ? req.query.order : "asc";
  const sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  const limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Course.find({})
    .sort([[sortBy, order]])
    .limit(limit)

    .exec((err, courses) => {
      if (err || !courses) {
        return res.status(400).json({
          error: "List courses not found",
        });
      }
      res.json(courses);
    });
};

exports.listBySearch = (req, res) => {
  var order = req.body.order ? req.body.order : "desc";
  var sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  var limit = req.body.limit ? parseInt(req.body.limit) : 100;
  var skip = parseInt(req.body.skip);
  var findArgs = {};

  const newFilters = req.body.filters;

  for (let key in newFilters.filters) {
    if (newFilters.filters[key].length > 0) {
      if (key === "price") {
        findArgs[key] = {
          $gte: newFilters.filters[key][0],
          $lte: newFilters.filters[key][1],
        };
      } else {
        findArgs[key] = newFilters.filters[key];
      }
    }
  }

  Course.find(findArgs)
    .populate("category")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: "Course not found",
        });
      } else {
        res.json({
          size: data.length,
          courses: data,
        });
      }
    });
};

exports.listSearch = (req, res) => {
  // create query object to handle incoming search
  // and category value, from params
  const query = {};
  // assign search value to query.name filter
  if (req.query.search) {
    query.name = {
      $regex: req.query.search,
      $options: "i",
    };
  }
  Course.find(query, (err, courses) => {
    if (err) {
      return res.status(400).json({
        error: "Not Found Course",
      });
    } else {
      res.json(courses);
    }
  });
};
