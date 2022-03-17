const Course = require("../models/Course");

class SiteController {
  // [get] / : get all courses
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        if (!courses) {
          return res.status(404).json({ error: "Invalid courses" });
        }
        res.send({ courses });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
