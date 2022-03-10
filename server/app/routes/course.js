const express = require('express')
const router = express.Router()
const CourseController = require('../controllers/CourseController')

//detail course
router.get('/:slug', CourseController.show)
router.post('/create', CourseController.create)
router.delete('/delete/:id', CourseController.destroy)

module.exports = router
