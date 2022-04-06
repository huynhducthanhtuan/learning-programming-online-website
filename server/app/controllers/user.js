const User = require("../models/User");

exports.userInfo = (req, res, next) => {
  res.json(req.profile);
};

exports.userById = (req, res, next, id) => {
  User.findById(id)
  .populate('coursesId')
  .exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: `User id ${id} not found `,
      });
    }
    req.profile = user;
    next();
  });
};

exports.registerCourse = (req, res, next) => {

  console.log( req.body.courseId );
  User.findByIdAndUpdate(
    req.profile._id,
    { $push: { coursesId: req.body.courseId } },
    {new: true}
  )
  .then(data => {
    res.json(data)
  })
  .catch(err => console.log(err))

  // res.json(req.profile)
};

exports.getRegisteredCourses = (req, res, next) => {
    Course.find({_id: id})
      .then(course => {
        res.json(course)
      })
      .catch(err => console.log(err))

}
