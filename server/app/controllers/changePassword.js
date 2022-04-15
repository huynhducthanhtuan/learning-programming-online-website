const User = require("../models/User");
const { isAuthenticated } = require("./auth");

exports.checkValidOldPassword = (req, res, next) => {
  const { userId, oldPassword } = req.body;

  User.findOne({ _id: userId }, (err, user) => {
    // Nếu ko có user với _id đó
    if (err || !user) {
      return res.json({
        error: "Account not found",
      });
    } else {
      // Nếu password sai
      if (!user.authenticate(oldPassword)) {
        return res.json({
          error: "Old password is not valid",
        });
      }

      // Nếu password trùng khớp với user đó -> thực thi callback func
      next();
    }
  });
};

exports.changePassword = (req, res, next) => {
  // Lấy ra user đó theo _id
  User.findById(req.body.userId, (error, user) => {
    // Nếu user đó tồn tại
    if (user) {
      // Tạo 1 User mới chứa thông tin của user cũ và password mới
      const updatedUserInfo = new User({
        ...user._doc,
        password: req.body.newPassword,
      });

      // Cập nhật mật khẩu mới
      user.updateOne(updatedUserInfo, (error, updatedUser) => {
        if (updatedUser) {
          return res.json({ message: "Change password success" });
        } else {
          return res.json({ error });
        }
      });
    } else {
      return res.json({ error });
    }
  });
};
