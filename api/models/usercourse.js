'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // UserCourse.hasOne(models.Course, {
      //   foreignKey: 'course_id',
      //   sourceKey: 'id',
      // })
      UserCourse.belongsTo(models.User, {
        foreignKey: 'id',
        sourceKey: 'id',
      })
      // UserCourse.hasOne(models.Video, {
      //   foreignKey: 'current_video_id',
      //   sourceKey: 'id',
      // })
    }
  }
  UserCourse.init(
    {
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'UserCourse',
    }
  )
  return UserCourse
}
