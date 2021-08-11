const path = require('path')
const passportJWT = require('passport-jwt')
const User = require(path.join(__dirname, '../models')).User

const ExtractJWT = passportJWT.ExtractJwt
const JWTStrategy = passportJWT.Strategy

const JWTOptions = {}

JWTOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
JWTOptions.secretOrKey = process.env.SECRET

const Strategy = new JWTStrategy(JWTOptions, async (JWTPayloads, next) => {
  try {
    const user = await User.findOne({ where: { id: JWTPayloads.id } })
    if (user) {
      return next(null, user)
    }
    return next(null, false)
  } catch (error) {
    return next(error, false)
  }
})

module.exports = Strategy
