'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    dish_description: DataTypes.STRING,
    price: DataTypes.DECIMAL(5,1),
    photos: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Dishes.associate = function(models) {
    // associations can be defined here
    Dishes.belongsTo(models.Restaurants,{foreignKey:"restaurant_id",as:"restaurant"});
    Dishes.hasMany(models.Orders,{foreignKey:"dish_id",as:"order"});
  };
  return Dishes;
  
};