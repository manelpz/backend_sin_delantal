'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {

    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true,
          notEmpty: {
              args: true,
              msg: "Email must be provided"
          }
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: DataTypes.STRING,
    paypal_id: DataTypes.STRING
  }, {});


  let cryptPassword = (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if(err) reject(err)
        bcrypt.hash(password, salt, (err, new_hash) => {
          if(err)reject(err)
          resolve(new_hash)
        })
      }) 
    })
  }

  Users.beforeCreate((user, options) => {

    return cryptPassword(user.password).then((new_hash) => {
      user.password = new_hash
    }).catch(e => console.log(e))
  
  })

  Users.prototype.comparePassword = function (testPassword) {
    let password =  this.password
    return new Promise(function(resolve,reject){
        bcrypt.compare(testPassword,password,function(err,result){
          if(err) reject(err)
          resolve(result)
        
        })
    })
  }

  Users.associate = function(models) {
    // associations can be defined here
    Users.hasOne(models.Addresses_Users,{foreignKey:"user_id",as:"address_user"});
    Users.hasOne(models.Orders,{foreignKey:"user_id",as:"order"});
    Users.hasMany(models.Restaurants,{foreignKey:"user_id",as:"restaurant"});
  };
  return Users;
};