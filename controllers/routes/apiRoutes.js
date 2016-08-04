var testApiController = require('../testApi');
module.exports = function(app) {
  app.get('/test', testApiController.testApi);
};
