'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      "Addresses_Users",
      "user_id",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }
    )

    queryInterface.addColumn(
      "Addresses_Restaurants",
      "restaurant_id",{
        type:Sequelize.UUID,
        references:{
          model:'Restaurants',
          key:"id"
        }
      }
    )

    queryInterface.addColumn(
      "Comments",
      "order_id",{
        type:Sequelize.UUID,
        references:{
          model:'Orders',
          key:"id"
        }
      }
    )

    queryInterface.addColumn(
      "Dishes",
      "restaurant_id",{
        type:Sequelize.UUID,
        references:{
          model:'Restaurants',
          key:"id"
        }
      }
    )

    queryInterface.addColumn(
      "Restaurants",
      "user_id",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }
    )

    queryInterface.addColumn(
      "Orders",
      "user_id",{
        type:Sequelize.UUID,
        references:{
          model:'Users',
          key:"id"
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
