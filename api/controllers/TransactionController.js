const Transaction = require('../models').Transaction
const Price = require('../models').Price
const Helpers = require('../utils/helper')

class TransactionController {
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
        where: { hash: req.params.hash, user_id: req.user.id },
      })

      if (transaction) {
        return res.status(201).json({
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
        where: { id: req.params.id, user_id: req.body.user },
      })

      await transaction.update({
        status: req.body.status,
      })
      return res.status(200).json({
        success: true,
        message: 'Transaction updated successfully',
        transaction,
      })
    } catch (error) {
      return res.status(401).json({
        success: false,
        msg: 'Transaction not created',
        error,
      })
    }
  }
}

module.exports = TransactionController
