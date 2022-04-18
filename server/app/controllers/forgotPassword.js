const User = require("../models/User");
const nodemailer = require("nodemailer");
require("dotenv").config();

const getRandomCode = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

exports.submitEmail = (req, res, next) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env._0x072126sajkxja3181,
      pass: process.env._0x073126sajkxja3112,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const code = getRandomCode();

  const html = `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Your verification code is:</h4>
                <span style="color: black">${code}</span>
            </div>
        </div>
    `;

  const mainOptions = {
    from: {
      name: "LOP's Support Team",
      address: "baop38391@gmail.com",
    },
    to: req.body.email,
    subject: "Verify code to create new password - LOP",
    html: html,
  };

  transporter.sendMail(mainOptions, (err, info) => {
    if (!err) {
      // Lưu code vào DB
      User.findOne({ email: req.body.email }, (error, user) => {
        if (user) {
          console.log(user);
          user.updateOne({ code: code }, (error, updatedUser) => {
            console.log(user);
            if (updatedUser) {
              return res.json({
                message: "Send code success. Please check your email",
              });
            } else {
              return res.json({ message: "Send code failed" });
            }
          });
        } else {
          return res.json({ message: "Email not found" });
        }
      });
    } else {
      return res.json({ message: "Send code failed" });
    }
  });
};

exports.submitCode = (req, res, next) => {
  User.findOne(
    { email: req.body.email, code: req.body.code },
    (error, user) => {
      if (user) {
        return res.json({ message: "Correct code" });
      } else {
        return res.json({ message: "Wrong code" });
      }
    }
  );
};

exports.resendCode = (req, res, next) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env._0x072126sajkxja3181,
      pass: process.env._0x073126sajkxja3112,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const code = getRandomCode();

  const html = `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Your verification code is:</h4>
                <span style="color: black">${code}</span>
            </div>
        </div>
    `;

  const mainOptions = {
    from: {
      name: "LOP's Support Team",
      address: "baop38391@gmail.com",
    },
    to: req.body.email,
    subject: "Verify code to create new password - LOP",
    html: html,
  };

  transporter.sendMail(mainOptions, (err, info) => {
    if (!err) {
      // Lưu code vào DB
      User.findOne({ email: req.body.email }, (error, user) => {
        if (user) {
          console.log(user);
          user.updateOne({ code: code }, (error, updatedUser) => {
            console.log(user);
            if (updatedUser) {
              return res.json({
                message: "Re-send code success. Please check your email",
              });
            } else {
              return res.json({ message: "Re-send code failed" });
            }
          });
        } else {
          return res.json({ message: "Re-send code failed" });
        }
      });
    } else {
      return res.json({ message: "Re-send code failed" });
    }
  });
};

exports.createNewPassword = (req, res, next) => {
  User.findOne({ email: req.body.email }, (error, user) => {
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
          return res.json({ message: "Create new password success" });
        } else {
          return res.json({ message: "Create new password failed" });
        }
      });
    } else {
      return res.json({ message: "Create new password failed" });
    }
  });
};
