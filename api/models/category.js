'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Video, {
        foreignKey: 'category_id',
        sourceKey: 'id',
      })
    }
  }
  Category.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      premium: DataTypes.BOOLEAN,
      summary: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Category',
    }
  )
  return Category
}
