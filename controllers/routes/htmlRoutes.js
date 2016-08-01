var express = require('express');
var router = express.Router();
var homeController = require('../home');

router.get('/', homeController.renderHome);
module.exports = router;
