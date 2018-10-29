'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addresses_Restaurants = sequelize.define('Addresses_Restaurants', {
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    district: DataTypes.STRING
  }, {});
  Addresses_Restaurants.associate = function(models) {
    // associations can be defined here
  };
  return Addresses_Restaurants;
};