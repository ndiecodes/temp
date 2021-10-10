const path = require('path')
const express = require('express')
const passport = require('passport')
const Strategy = require(path.join(__dirname, 'config/passport.js'))

// Create express instance
const app = express()
passport.use(Strategy)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Methods', '*')
  next()
})
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

// Require API routes
const authRoutes = require('./routes/auth.js')

// Import API Routes
app.use('/v1/auth', authRoutes)
app.use('/v1/secure/*', passport.authenticate('jwt', { session: false }))
require(path.join(__dirname, './routes/secure.js'))(app)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

/**
 *
 * //Create a Transaction table => UserID, payment_date, amount, duration
 * //Update User Table with premium_expiration_date, grace_period
 * Create a Form in Admin to Set Pricing => monthly:15, yearly:135, saves: 50%
 * //Create a Table to store Pricing data
 * Integrate Crypto Payment API
 *
 */
