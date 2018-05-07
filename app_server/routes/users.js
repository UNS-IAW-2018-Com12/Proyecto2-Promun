var express = require('express');
var router = express.Router();

var ctrlUserPage = require('../controllers/userPageController');

router.get('/', ctrlUserPage.userPage);

module.exports = router;
