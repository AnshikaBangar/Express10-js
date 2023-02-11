const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Anshika@root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
