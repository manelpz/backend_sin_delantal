'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdersDishes = sequelize.define('OrdersDishes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    }
  }, {});
  OrdersDishes.associate = function(models) {
    // associations can be defined here
    OrdersDishes.belongsTo(models.Orders,{foreignKey:"order_id",as:"order"});
    OrdersDishes.belongsTo(models.Dishes,{foreignKey:"dish_id",as:"dish"});
  };
  return OrdersDishes;
};