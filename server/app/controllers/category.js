const Category = require("../models/Category");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.list = (req, res, next) => {
  Category.find({}).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({
        error: "Not found category",
      });
    }
    res.json(data);
  });
};

exports.create = (req, res, next) => {
  const category = new Category(req.body);
  // console.log("category api ", category)
  if (category.name == "") {
    return res.status(400).json({
      error: "Please add category field",
    });
  }
  Category.findOne({ name: category.name }).exec((err, data) => {
    if (data) {
      return res.status(400).json({
        error: "Category should be unique",
      });
    } else {
      category.save((err, category) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        res.json({ category });
      });
    }
  });
};
exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: `Category Id ${id} not found`,
      });
    }
    req.category = category;
    next();
  });
};
