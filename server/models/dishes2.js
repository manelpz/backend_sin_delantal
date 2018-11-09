'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes2 = sequelize.define('Dishes2', {
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
  Dishes2.associate = function(models) {
    // associations can be defined here
  };
  return Dishes2;
};