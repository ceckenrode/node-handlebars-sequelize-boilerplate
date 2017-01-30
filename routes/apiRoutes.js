var testApiController = require('../controllers/testApi');
module.exports = function(app) {
  app.get('/test', testApiController.index);
};
