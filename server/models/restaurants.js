'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    //type_restaurant: DataTypes.ENUM,
    name: DataTypes.STRING,
    type_restaurant:{type:DataTypes.ENUM,values:[1,2,3,4,5,6,7,8,9,10,11]},
    schedule: DataTypes.STRING,
    restaurant_description: DataTypes.STRING,
    rate: DataTypes.DECIMAL(5,1),
    photos: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here
    Restaurants.hasOne(models.Addresses_Restaurants,{foreignKey:"restaurant_id",as:"address_restaurant"});
   
    //Restaurants.hasMany(models.Comments,{foreignKey:"restaurant_id",as:"comment"});
    Restaurants.belongsTo(models.Users,{foreignKey:"user_id",as:"user"});
  };
  return Restaurants;
};