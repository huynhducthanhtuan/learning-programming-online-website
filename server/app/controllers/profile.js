const User = require("../models/User");

exports.viewProfile = (req, res, next) => {
  User.findById(req.body._id, (err, user) => {
    if (user) {
      return res.json(user);
    } else {
      return res.json(err);
    }
  });
};

exports.updateProfile = (req, res, next) => {
  User.updateOne({ _id: req.body._id }, req.body, (err, updatedInfo) => {
    if (updatedInfo) {
      return res.json({ message: "success" });
    } else {
      return res.json({ message: "failed" });
    }
  });
};
