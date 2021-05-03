const { Router } = require('express')
const AuthController = require('../controllers/AuthController')

module.exports = (app) => {
  const router = Router()
  router.get('/user', AuthController.user)

  app.use('/v1/', router)
}
