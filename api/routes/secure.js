const { Router } = require('express')
const AuthController = require('../controllers/AuthController')
const CourseController = require('../controllers/CourseController')

module.exports = (app) => {
  const router = Router()
  router.get('/secure/user', AuthController.user)
  router.get('/courses', CourseController.courses)
  router.get('/secure/courses/all', CourseController.allCourses)
  router.post('/secure/videos', CourseController.uploadVideo)
  router.post('/secure/courses', CourseController.createCategory)
  router.get('/secure/videos', CourseController.videos)
  router.put('/secure/courses/:id', CourseController.editCourse)
  router.put('/secure/videos/:id', CourseController.editVideo)
  router.patch('/secure/courses/:id', CourseController.editCourse)
  router.patch('/secure/videos/:id', CourseController.editVideo)
  router.post('/secure/prices', AuthController.setPrice)
  router.get('/prices', AuthController.prices)
  router.post('/secure/users/:id/courses', CourseController.createUserCourse)
  router.get('/secure/users/:id/courses', CourseController.userCourses)

  app.use('/v1/', router)
}
