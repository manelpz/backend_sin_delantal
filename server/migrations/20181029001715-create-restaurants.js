'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      type_restaurant: {
        type: Sequelize.ENUM,
        values:[1,2,3,4,5,6,7,8,9,10,11]  //1 = "Alitas y Pollo" 2= "China" 3= "Ensaladas" 4= "Hamburguesas" 5="India" 6= "Italiana" 7 ="Mexicana" 8 ="Pescados y Mariscos" 9= "Pizzas" 10= "Sushi y Japonesa" 11= "Otros"
      },
      time_schedule: {
        type: Sequelize.STRING
      },
      restaurant_description: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.DECIMAL(5,1)
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
    return queryInterface.dropTable('Restaurants');
  }
};
