'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    paypal_confirmation: DataTypes.STRING,
    total_price: DataTypes.DECIMAL(10,2),
    order_date: DataTypes.DATE,
    order_status:{type:DataTypes.ENUM,values:["CF","CC","PN"]},
    
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
    Orders.belongsTo(models.Users,{foreignKey:"user_id",as:"user"});
    //TODO:revisar relaciones
    //Orders.belongsTo(models.Dishes,{foreignKey:"dish_id",as:"dish"});
    //Orders.hasMany(models.OrdersDishes,{foreignKey:"order_id",as:"order"});
    Orders.hasOne(models.Comments,{foreignKey:"order_id",as:"comment"});
    
    Orders.belongsToMany(models.Dishes, {
      through:"OrderRole",
      as:"orders",
      foreignKey: 'order_id',
      as:"dish"
    });


  };
  return Orders;
};