const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const Lesson = new Schema({
  title: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  comments: [
    {
      text: String,
      commentedBy: { type: ObjectId, ref: "User" },
    },
  ],
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("Lesson", Lesson);
