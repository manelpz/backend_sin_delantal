'use strict';
module.exports = (sequelize, DataTypes) => {
  const Addresses_Users = sequelize.define('Addresses_Users', {
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    district: DataTypes.STRING
  }, {});
  Addresses_Users.associate = function(models) {
    // associations can be defined here
  };
  return Addresses_Users;
};