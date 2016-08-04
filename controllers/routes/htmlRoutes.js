var homeController = require('../home');
module.exports = function(app) {
  app.get('/', homeController.renderHome);
};
