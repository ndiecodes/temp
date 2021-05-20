'use strict'
// const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    'Course',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      current: DataTypes.STRING,
    },
    {
      underscored: false,
      timestamps: true,
      freezeTableName: true,
      tableName: 'courses',
    }
  )
  Course.associate = function (models) {
    // associations can be defined here
    // Course.hasMany(models.Course, {
    //   foreignKey: 'use_id',
    //   sourceKey: 'id',
    // })
  }

  return Course
}
