'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrdersDishes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,        
        defaultValue:Sequelize.UUIDV4
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('OrdersDishes');
  }
};