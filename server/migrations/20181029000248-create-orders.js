'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      paypal_confirmation: {
        type: Sequelize.STRING
      },
      total_price: {
        type: Sequelize.DECIMAL(10,2)
      },
      order_date: {
        type: Sequelize.DATE
      },
      order_status: {
        type: Sequelize.ENUM,
        values:["CF","CC","PN"] //cf confimred, cc cancel pn pending
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
    return queryInterface.dropTable('Orders');
  }
};