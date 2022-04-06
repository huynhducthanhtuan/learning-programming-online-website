const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const { ObjectId } = mongoose.Schema.Types;

const Course = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      goal: String,
      achievement: [{ type: String }],
    },
    price: {
      type: Number,
      required: true,
    },

    creator: {
      type: ObjectId,
      ref: "User",
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
    },
    sold: {
      type: Number,
      default: 0,
    },
    rate: {
      type: Number,
      default: 1,
    },
    parts: [
      {
        topic: String,
        lessons: [{ type: ObjectId, ref: "Lesson", autopopulate: true }],
      },
    ],
   
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);
// add plugin
mongoose.plugin(slug);
const topSchema = mongoose.Schema({ nested: Course });
topSchema.plugin(require("mongoose-autopopulate"));
// Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model("Course", Course);
