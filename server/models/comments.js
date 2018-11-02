'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    text_comment: DataTypes.STRING
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
    Comments.belongsTo(models.Orders,{foreignKey:"order_id",as:"order"});
  };
  return Comments;
};