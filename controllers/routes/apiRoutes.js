var express = require('express');
var router = express.Router();
var testApiController = require('../testApi');

router.get('/test', testApiController.testApi);

module.exports = router;
