const Lesson = require('../models/Lesson')


exports.read = (req, res, next) => {
    res.json(req.lesson)
}

exports.list = (req, res, next) => {
    Lesson.find({})
        .exec((err, data) => {
            if(err || !data) {
                return res.status(400).json({
                    error: "Not found Lesson"
                })
            }
            res.json( data)
        })
}


exports.lessonById = (req, res, next, id) => {
    Lesson.findById(id) 
        .exec((err, lesson) => {
            if(err || !lesson) {
                return res.status(400).json({
                    error: `Lesson Id ${id} not found`
                })
            }
            req.lesson = lesson
            next()
        })
}
exports.comment = (req, res, next) => {
 
    const comment = {
        text:req.body.text,
        commentedBy: req.profile._id
    }
    Lesson.findByIdAndUpdate(req.body.lessonId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.commentedBy", "_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
} 