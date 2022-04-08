const User = require("../models/User");

exports.checkValidOldPassword = (req, res, next) => {
  // User.findById(req.body._id, (err, user) => {
  //   if (user) {
  //     return res.json(user);
  //   } else {
  //     return res.json(err);
  //   }
  // });
  return res.json({ message: "success" });
};

exports.changePassword = (req, res, next) => {
  // User.updateOne({ _id: req.body._id }, req.body, (err, updatedInfo) => {
  //   if (updatedInfo) {
  //     return res.json({ message: "success" });
  //   } else {
  //     return res.json({ message: "failed" });
  //   }
  // });
  return res.json({ message: "success" });
};
