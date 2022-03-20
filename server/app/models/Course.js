const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator');
const {ObjectId} = mongoose.Schema.Types
const mongooseDelete = require('mongoose-delete');


const Course = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        goal: String,
        achievement:[{text: String}]
    },
    price: {
        type: Number,
        required: true
    },
    parts:[{
        topic: String,
        lessons: [{type: ObjectId, ref: 'Lesson'}]
    }],
    // rates: [{
    //     numberStar: Number,
    //     ratedBy: {type: ObjectId, ref: 'User'}
    // }],
    creator: {
        type: ObjectId,
        ref: 'User'
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true,
    },
    image: {
        type: String,   
    },
    slug: { type: String, slug: 'name', unique: true },
   
    }, 
    { timestamps: true,},
)
// add plugin
mongoose.plugin(slug);
// Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Course);


