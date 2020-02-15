'use strict';
module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define('Data', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Data.associate = function(models) {
    // associations can be defined here
  };
  return Data;
};