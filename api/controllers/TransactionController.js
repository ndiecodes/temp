/* eslint-disable camelcase */
const Transaction = require('../models').Transaction
const User = require('../models').User
const Price = require('../models').Price
const Helpers = require('../utils/helper')

class TransactionController {
  static async transactions(req, res) {
    try {
      const page = req.query.page || 0
      const size = req.query.size || 10
      const transactions = await Transaction.findAll({
        offset: page,
        limit: size,
        include: [
          {
            model: User,
            required: true,
          },
        ],
      })

      if (transactions) {
        return res.status(200).json({
          success: true,
          message: 'Transactions retrieved successfully',
          transactions,
        })
      } else
        return res.status(404).json({
          success: false,
          message: 'Transactions not found',
        })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error Occured, Please try again',
      })
    }
  }

  static async create(req, res) {
    // eslint-disable-next-line camelcase
    const { user, type } = req.body

    const price = await Price.findOne({
      where: { type },
    })

    if (!price) {
      return res.status(200).json({
        success: false,
        message: 'Type does not exist',
      })
    }

    const transaction = await Transaction.findOne({
      where: { user_id: user, status: 'Pending' },
    })

    if (
      transaction &&
      new Date(transaction.createdAt).toDateString() ===
        new Date().toDateString()
    ) {
      return res.status(200).json({
        success: true,
        message: 'Transaction retrieved successfully',
        transaction,
      })
    }

    const newtransaction = await Transaction.create({
      user_id: user,
      hash: Helpers.getRanHex(32),
      type: price.type,
      amount: price.amount,
      status: 'Pending',
    })
    if (newtransaction) {
      return res.status(201).json({
        success: true,
        message: 'Transaction Created successfully',
        newtransaction,
      })
    }

    return res.status(401).json({
      success: false,
      msg: 'Transaction not created',
    })
  }

  static async getByHash(req, res) {
    try {
      const transaction = await Transaction.findOne({
        where: { hash: req.params.hash },
      })

      if (transaction) {
        return res.status(200).json({
          success: true,
          message: 'Transaction retrieved successfully',
          transaction,
        })
      } else
        return res.status(404).json({
          success: false,
          message: 'Transaction not found',
        })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error Occured, Please try again',
        error,
      })
    }
  }

  static async update(req, res) {
    try {
      const transaction = await Transaction.findOne({
        where: { id: parseInt(req.params.id), user_id: req.body.user },
      })

      if (transaction.status === 'Approved') {
        return res.status(411).json({
          success: false,
          message: 'Transaction already approved',
          transaction,
        })
      }

      if (transaction.status === 'Rejected') {
        return res.status(411).json({
          success: false,
          message: 'Transaction already rejected',
          transaction,
        })
      }

      const { status } = req.body

      if (status === 'Approved') {
        const user = await User.findOne({
          where: {
            id: transaction.user_id,
          },
        })

        let expiredDate = user.premium_expiration_date
        if (!expiredDate) {
          expiredDate = new Date()
        }

        let gracePeriodDate = user.grace_period
        if (!gracePeriodDate) {
          gracePeriodDate = new Date()
        }

        const newExpiredDate = new Date(
          expiredDate.setMonth(expiredDate.getMonth() + 6)
        )

        const newGracePeriodDate = new Date(
          gracePeriodDate.setMonth(gracePeriodDate.getMonth() + 6)
        )

        const premium_expiration_date = newExpiredDate
          .toJSON()
          .slice(0, 19)
          .replace('T', ' ')

        const grace_period = newGracePeriodDate
          .toJSON()
          .slice(0, 19)
          .replace('T', ' ')

        await user.update({
          premium_expiration_date,
          grace_period,
        })
      }

      await transaction.update({
        status,
      })
      return res.status(200).json({
        success: true,
        message: 'Transaction updated successfully',
        transaction,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: 'Transaction not updated',
        error,
      })
    }
  }
}

module.exports = TransactionController
