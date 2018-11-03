'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addresses_Restaurants = sequelize.define('Addresses_Restaurants', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    zipcode: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  Addresses_Restaurants.associate = function(models) {
    // associations can be defined here
    Addresses_Restaurants.belongsTo(models.Restaurants,{foreignKey:"restaurant_id",as:"restaurant"});

  };
  return Addresses_Restaurants;
};