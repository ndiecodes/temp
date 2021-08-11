'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsTo(models.Course, {
        foreignKey: 'category_id',
        targetKey: 'id',
      })

      Video.hasMany(models.UserCourse, {
        foreignKey: 'current_video_id',
        sourceKey: 'id',
      })
    }
  }
  Video.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      summary: DataTypes.TEXT,
      vimeoId: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      premium: DataTypes.BOOLEAN,
      section: DataTypes.STRING,
      slug: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Video',
    }
  )
  return Video
}
