var express = require('express');
var router = express.Router();

var ctrlUserPage = require('../controllers/userPageController');

router.get('/', ctrlUserPage.userPage);

// Get index page
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Promun'
  });
});

module.exports = router;
