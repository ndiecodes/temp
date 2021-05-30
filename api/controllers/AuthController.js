const path = require('path')
const bcrypt = require('bcrypt')
const User = require(path.join(__dirname, '../models')).User
// const crypto = require('crypto')
const jwt = require('jsonwebtoken')
// const { Op } = require('sequelize')
const jwtDecode = require('jwt-decode')
// const Mail = require('../config/mail')
// const forgotPassword = require('../../templates/mail/forgotPassword')

class Auth {
  static async register(req, res) {
    try {
      // Store all in User table
      req.body.password = await Auth._hashPassword(req.body.password)

      const result = await User.create(req.body)
      if (result) {
        result.password = null
        return res.status(201).json({
          success: true,
          message: 'New user created successfully',
          user: result,
        })
      } else
        return res.status(500).json({
          success: false,
          message: 'Internal Server Error Occured, Please try again',
        })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error Occured, Please try again',
      })
    }
  }

  static async login(req, res) {
    const { email, password } = req.body
    const user = await User.scope('withPassword').findOne({
      where: {
        email,
      },
    })

    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        // const expiresIn = '1h'
        const payload = {
          id: user.id,
        }
        const token = jwt.sign(payload, process.env.SECRET)
        delete user.password
        return res.json({
          success: true,
          message: 'Logged in successfully',
          user,
          token,
          tokenType: 'Brearer ',
        })
      }
    }
    return res.status(401).json({
      success: false,
      msg: 'Password/email combination is incorrect',
    })
  }

  //   static async forgotPassword(req, res) {
  //     const { email } = req.body

  //     const user = await User.findOne({ where: { email } })
  //     if (user) {
  //       const token = await Auth.generateToken()
  //       const date = new Date()
  //       user.reset_password_token = token
  //       user.reset_password_expires = date.setMinutes(date.getMinutes() + 60)
  //       await user.save()
  //       const message = {
  //         to_name: user.name,
  //         link: await Auth._generateEmailLink(email, token),
  //       }

  //       // create message
  //       const mailOptions = {
  //         from: `"${process.env.APP_NAME}" <profaili@profaili.com>`,
  //         to: email,
  //         subject: `${process.env.APP_NAME} Password Reset`,
  //         html: forgotPassword(message),
  //       }

  //       Mail.sendMail(mailOptions, (error, info) => {
  //         if (error) {
  //           return res.status(500).json({
  //             success: false,
  //             message: 'Internal Server Error Occured, Please try again',
  //             error,
  //           })
  //         } else
  //           return res.status(200).json({
  //             success: true,
  //             message: 'Email sent successfully',
  //             info,
  //           })
  //       })
  //     } else
  //       return res.status(404).json({
  //         success: false,
  //         message: 'Email not found',
  //       })
  //   }

  //   static async resetPassword(req, res) {
  //     const { email, password, token } = req.body
  //     const user = await User.findOne({
  //       where: {
  //         email,
  //         reset_password_token: token,
  //         reset_password_expires: { [Op.gt]: Date.now() },
  //       },
  //     })
  //     if (user) {
  //       user.password = await Auth._hashPassword(password)
  //       user.reset_password_token = null
  //       user.reset_password_expires = null
  //       if (await user.save()) {
  //         delete user.password
  //         delete user.reset_password_token
  //         delete user.reset_password_expires
  //         return res.status(200).json({
  //           success: true,
  //           message: 'Password updated successfully',
  //           user,
  //         })
  //       }
  //     }
  //     return res.status(422).json({
  //       success: false,
  //       message: 'Password reset token is invalid or has expired.',
  //     })
  //   }

  //   static async updateProfile(req, res) {
  //     const { name, username, email, phone_number, id } = req.body
  //     const user = await User.findOne({ id: { id } })
  //     user.name = name
  //     user.username = username
  //     user.email = email
  //     user.phone_number = phone_number
  //     if (await user.save()) {
  //       user.password = null
  //       res.status(204).json({
  //         success: true,
  //         message: 'Account updated successfully',
  //         user,
  //       })
  //     } else
  //       return res.status(500).json({
  //         success: false,
  //         message: 'Account failed to update, internal server error',
  //       })
  //   }

  static user(req, res) {
    if (req.user) {
      const user = req.user
      delete user.password
      return res.status(200).json({
        success: true,
        message: 'User retrieved successfully',
        user,
      })
    }
    return res.status(401).json({
      success: false,
      message: 'User unauthorized',
    })
  }

  static async refresh(req, res) {
    const { token } = req.body
    const payload = jwtDecode(token)
    const user = await User.findOne({ where: { id: payload.id } })
    if (user) {
      const payload = {
        id: user.id,
      }
      const token = jwt.sign(payload, process.env.SECRET)
      delete user.password
      return res.json({
        success: true,
        message: 'Logged in successfully',
        user,
        token,
        tokenType: 'Brearer ',
      })
    }
    return res.json({
      success: false,
      message: 'Log in failed',
    })
  }

  //   static async deleteAccount(req, res) {
  //     const user = await User.findOne({ id: { id: req.body.id } })
  //     if (await user.destroy()) {
  //       return res.status(200).json({
  //         success: true,
  //         message: 'Account deleted successfully',
  //         user,
  //       })
  //     } else
  //       return res.status(500).json({
  //         success: false,
  //         message: 'Account failed to delete, internal server error',
  //       })
  //   }

  static logout(req, res) {
    req.logout()
    return res.json({
      success: true,
      message: 'Log out',
    })
  }
  //   static async settings(req, res) {}

  static async _hashPassword(password) {
    const salt = await bcrypt.genSalt(process.env.SALT || 10)
    return await bcrypt.hash(password, salt)
  }

  //   static async generateToken() {
  //     const secret = await crypto.randomBytes(20)
  //     const token = secret.toString('hex')
  //     return token
  //   }

  //   static _generateEmailLink(email, token) {
  //     const url =
  //       process.env.FRONTEND_URL + '/reset/?token=' + token + '&email=' + email
  //     return URL.parse(url).href
  //   }

  //   onRegister = () => {
  //     // create message
  //     const mailOptions = {
  //       from: `"${process.env.APP_NAME}" <profaili@profaili.com>`,
  //       to: email,
  //       subject: `${process.env.APP_NAME} Password Reset`,
  //       html: forgotPassword(message),
  //     }

  //     Mail.sendMail(mailOptions, (error, info) => {
  //       if (error) {
  //         return res.status(500).json({
  //           success: false,
  //           message: 'Internal Server Error Occured, Please try again',
  //           error,
  //         })
  //       } else
  //         return res.status(200).json({
  //           success: true,
  //           message: 'Email sent successfully',
  //           info,
  //         })
  //     })
  //   }
}

module.exports = Auth
