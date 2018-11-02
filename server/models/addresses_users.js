'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addresses_Users = sequelize.define('Addresses_Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    district: DataTypes.STRING
  }, {});
  Addresses_Users.associate = function(models) {
    // associations can be defined here
    Addresses_Users.belongsTo(models.Users,{foreignKey:"user_id",as:"user"});
  };
  return Addresses_Users;
};