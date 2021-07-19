'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, {
        foreignKey: 'user_id',
        sourceKey: 'id',
      })
    }
  }
  Transaction.init(
    {
      user_id: DataTypes.INTEGER,
      payment_date: DataTypes.DATE,
      type: DataTypes.STRING,
      amount: DataTypes.DOUBLE,
      hash: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Transaction',
    }
  )
  return Transaction
}
