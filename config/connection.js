var Sequelize = require('sequelize');
var sequelize = new Sequelize('testDB', 'root');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err) {
    console.log('Unable to connect to the database:', err);
  });

var tesData = sequelize.define('testTable', {
  name: Sequelize.STRING,
  date: Sequelize.DATE
});

sequelize.sync();

module.exports = sequelize;
