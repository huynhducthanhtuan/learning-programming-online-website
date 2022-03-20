const User = require("../models/User");

exports.userInfo = (req, res, next) => {
  res.json(req.profile);
};

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: `User id ${id} not found `,
      });
    }
    req.profile = user;
    next();
  });
};
