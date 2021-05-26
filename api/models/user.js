'use strict'
// const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      reset_password_token: DataTypes.STRING,
      reset_password_expires: DataTypes.DATE,
      roles: DataTypes.STRING,
    },
    {
      underscored: false,
      timestamps: true,
      freezeTableName: true,
      tableName: 'users',
    }
  )
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Course, {
      foreignKey: 'user_id',
      sourceKey: 'id',
    })
  }
  User.addScope('defaultScope', {
    attributes: { exclude: ['password'] },
  })
  User.addScope('withPassword', {
    attributes: { include: ['password'] },
  })
  return User
}
