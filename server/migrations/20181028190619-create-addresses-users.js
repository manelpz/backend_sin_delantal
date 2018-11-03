'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses_Users', {
      id: {
        allowNull: false,        
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      street: {
        type: Sequelize.TEXT
      },
      number: {
        type: Sequelize.INTEGER
      },
      zipcode: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Addresses_Users');
  }
};