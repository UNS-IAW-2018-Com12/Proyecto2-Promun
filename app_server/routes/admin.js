var express = require('express');
var router = express.Router();

var ctrlAdminPage = require('../controllers/adminController');


router.get('/', ctrlAdminPage.adminPage);

module.exports = router;
