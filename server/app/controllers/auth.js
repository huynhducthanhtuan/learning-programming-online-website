const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.signup = (req, res) => {
  const user = new User(req.body);

  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err),
      });
    }

    user.salt = undefined;
    user.hashed_password = undefined;

    res.json({
      user,
    });
  });
};

exports.signin = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Account not found. Please signup.",
      });
    } else {
      // if user is found make sure email and password match
      // use authenticate method in user model
      if (!user.authenticate(password)) {
        return res.status(401).json({
          error: "Email and password doesn't match.",
        });
      }

      //token
      const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);

      // cookie expire
      res.cookie("t", token, { expire: new Date() + 9999 });

      // return response with user and token to client
      const { _id, role } = user;

      return res.json({
        token: token,
        user: {
          _id,
          role,
        },
      });
    }
  });
};

exports.signout = (req, res, next) => {
  res.clearCookie("t");
  res.json({ message: "Sign out success !!" });
};

exports.isAuthenticated = (req, res, next) => {
  if (typeof window == "undefined") {
    return false;
  } else {
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  }
};
