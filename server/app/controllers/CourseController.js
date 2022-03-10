const Course = require('../models/Course')
const User = require('../models/User')


class CourseController {

    //[get]  /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                if(!course) {
                    return res.status(422).json({error: "Does not exist "})
                }
                res.json(course)
            })
            .catch(next)
    }

    // [post] /course/create
    create(req, res, next) {
        const {
            name, 
            price
        } = req.body

        if(!name || !price ) {
            return res.status(442).json({error: "Please add all fields "})
        }
        const course = new Course({
            name,
            price
        })
        course.save()
            .then(result => {
                res.json({course: result})
            })
            .catch(err => {
                console.log(err)
            })
    }

    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id})
            .then(() => res.json({message: 'Delete successfully'}))
            .catch(next)
    }
}

module.exports = new CourseController()
