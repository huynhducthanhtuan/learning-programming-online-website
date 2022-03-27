const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
const { ObjectId } = mongoose.Schema.Types;
const mongooseDelete = require("mongoose-delete");

const Course = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      goal: String,
      // achievement: [{ text: String }],
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
        ref: 'Category',
        
    },
    image: {
        type: String,   
    },
    sold: {
      type: Number,
      default: 0
    },
    // parts: [
    //   {
    //     topic: String,
    //     lessons: [{ type: ObjectId, ref: "Lesson" }],
    //   },
    // ],
    // rates: [{
    //     numberStar: Number,
    //     ratedBy: {type: ObjectId, ref: 'User'}
    // }],
    slug: { type: String, slug: 'name', unique: true },
   
    }, 
    { timestamps: true,},
)
// add plugin
mongoose.plugin(slug);
// Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model("Course", Course);
