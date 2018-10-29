'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    name: DataTypes.STRING,
    dish_description: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  Dishes.associate = function(models) {
    // associations can be defined here
  };
  return Dishes;
  
};