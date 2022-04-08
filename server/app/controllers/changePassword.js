const User = require("../models/User");
const { isAuthenticated } = require("./auth");

exports.checkValidOldPassword = (req, res, next) => {
  const { userId, oldPassword } = req.body;

  User.findOne({ _id: userId }, (err, user) => {
    // Nếu ko có user với _id đó
    if (err || !user) {
      return res.json({
        message: "Account not found",
      });
    } else {
      // Nếu password sai
      if (!user.authenticate(oldPassword)) {
        return res.json({
          message: "Old password is not valid",
        });
      }

      // Nếu password trùng khớp với user đó -> thực thi callback func
      next();
    }
  });
};

exports.changePassword = (req, res, next) => {
  // User.updateOne(
  //   { _id: req.body._id },
  //   { password: req.body.newPassword },
  //   (err, updatedInfo) => {
  //     if (updatedInfo) {
  //       return res.json({ message: "Change password success" });
  //     } else {
  //       return res.json({ message: "Change password failed" });
  //     }
  //   }
  // );
  // Cần mã hóa password trước khi cập nhật vào DB
  // hashed_password, salt
};
