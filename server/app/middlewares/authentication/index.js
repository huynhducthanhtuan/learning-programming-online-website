const expressJwt = require("express-jwt");

//protected routes
exports.requireSignIn = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  //set userProperty:  auth: id authentication
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  //check param (req. profile)  == req. auth
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    res.status(403).json({
      error: "Access denied",
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "Admin resource! Access denied",
    });
  }
  next();
};
