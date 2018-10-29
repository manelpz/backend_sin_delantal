'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    paypal_confirmation: DataTypes.STRING,
    total_price: DataTypes.DOUBLE,
    order_date: DataTypes.DATE,
    order_status: DataTypes.ENUM
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
  };
  return Orders;
};