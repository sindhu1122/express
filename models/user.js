'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: "Mohitha",
    lastName: "Sindhu",
    email: "essk1998@gmail.com"
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};