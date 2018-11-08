'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdersDishes = sequelize.define('OrdersDishes', {
    order_id: DataTypes.STRING,
    dish_id: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  OrdersDishes.associate = function(models) {
    // associations can be defined here
  };
  return OrdersDishes;
};