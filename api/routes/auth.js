const { Router } = require('express')
const AuthController = require('../controllers/AuthController')

const router = Router()

router.post('/login', AuthController.login)
router.post('/refresh', AuthController.refresh)
router.post('/register', AuthController.register)
// router.get('email/verify/{id}', async function (req, res) {})
router.post('/logout', AuthController.logout)

module.exports = router
