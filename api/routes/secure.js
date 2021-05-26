const { Router } = require('express')
const AuthController = require('../controllers/AuthController')
const CourseController = require('../controllers/CourseController')

module.exports = (app) => {
  const router = Router()
  router.get('/secure/user', AuthController.user)
  router.get('/courses', CourseController.courses)
  router.get('/secure/courses/all', CourseController.allCourses)
  router.post('/secure/courses', CourseController.uploadVideo)
  router.post('/secure/categories', CourseController.createCategory)

  app.use('/v1/', router)
}
