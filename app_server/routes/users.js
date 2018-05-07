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

//Handle Logout
router.get('/logut', function(req, res) {
  req.logout();
  res.redirect('/index');
});

module.exports = router;
