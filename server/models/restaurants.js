'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    type_restaurant: DataTypes.ENUM,
    time_schedule: DataTypes.STRING,
    restaurant_description: DataTypes.STRING,
    rate: DataTypes.DECIMAL
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here
  };
  return Restaurants;
};