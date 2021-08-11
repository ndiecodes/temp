'use strict'
// const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define(
    'Course',
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      summary: DataTypes.STRING,
      slug: DataTypes.STRING,
      banner: DataTypes.STRING,
      premium: DataTypes.BOOLEAN,
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
    Course.hasMany(models.Video, {
      foreignKey: 'category_id',
      sourceKey: 'id',
    })
    Course.hasMany(models.UserCourse, {
      foreignKey: 'course_id',
      sourceKey: 'id',
    })
  }

  return Course
}
