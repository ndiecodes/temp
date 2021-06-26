'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      saves: {
        type: Sequelize.INTEGER,
        default: 0,
      },
      type: {
        type: Sequelize.STRING,
        default: 'Free',
      },
      amount: {
        type: Sequelize.DOUBLE,
        default: 0.0,
      },
      preferred: {
        type: Sequelize.BOOLEAN,
        default: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Prices')
  },
}
