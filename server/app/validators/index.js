exports.userSignUpValidator = (req, res, next) => {
  req.check("name", "Name is required").notEmpty();
  req
    .check("email", "E-mail must be between 3 t 32 characters")
    .matches(/.+@.+\..+/)
    .withMessage("Invalid e-mail")
    .isLength({
      min: 4,
      max: 32,
    });
  req.check("password", "Password is required").notEmpty();
  req
    .check("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};

exports.userUpdateProfileValidator = (req, res, next) => {
  console.log(req);
  req.check("name", "Name is required").notEmpty();
  req
    .check("email", "E-mail must be between 11 to 32 characters")
    .matches(/.+@.+\..+/)
    .withMessage("Invalid e-mail")
    .isLength({
      min: 11,
      max: 32,
    });
  req
    .check("phone_number", "Phone number must be 10 integer characters")
    .matches(/^\d{10}$/)
    .withMessage("Invalid phone number")
    .isLength({
      min: 10,
      max: 10,
    });

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }
  next();
};
