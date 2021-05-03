const { Router } = require('express')
const AuthController = require('../controllers/AuthController')

const router = Router()

router.post('/login', AuthController.login)
router.post('/register', AuthController.register)
// router.get('/auth/password/', async function (req, res) {})
// router.get('email/verify/{id}', async function (req, res) {})
// router.post('email/resend', async function (req, res) {})

module.exports = router
