const express = require('express')
const router = express.Router()
const CourseController = require('../controllers/CourseController')
const requireLogin = require('../middleware/requireLogin')

//detail course
router.get('/:slug', CourseController.show)

// create course
router.post('/create',requireLogin, CourseController.create)
// search course
router.post('/search', CourseController.searchCourse)

// delete course
router.delete('/delete/:id',requireLogin, CourseController.destroy)

module.exports = router
