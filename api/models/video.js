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
      Video.belongsTo(models.Category, {
        foreignKey: 'id',
        targetKey: 'id',
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
    },
    {
      sequelize,
      modelName: 'Video',
    }
  )
  return Video
}
