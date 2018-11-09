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
    
    //TODO: revisar relaciones
    //Dishes.hasMany(models.Orders,{foreignKey:"dish_id",as:"order"});
    //Dishes.hasMany(models.OrdersDishes,{foreignKey:"dish_id",as:"dish"});
    Dishes.belongsToMany(models.Orders, {
      through:"OrderRole",
      as:"dishes",
      foreignKey: 'dish_id',
      as:"order"
    });


  };
  return Dishes;
  
};