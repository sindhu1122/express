
'use strict';
const models=require('../models')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.User.bulkCreate([
      {
        firstName: 'acssd'
      },
      {
        firstName: 'wedw'
      }
    ])
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};