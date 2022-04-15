const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const { ObjectId } = mongoose.Schema.Types;
const Part = new Schema(
  {
    topic: {
      type: String,
    },
    lessons: [{ type: ObjectId, ref: "Lesson" }],
    courseId: {
      type: ObjectId,
      ref: "Course",
    },
    isSelect: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Part", Part);
