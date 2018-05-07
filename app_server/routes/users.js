var express = require('express');
var router = express.Router();

var ctrlUserPage = require('../controllers/userPageController');

router.get('/', ctrlUserPage.userPage);

//GET users Page
router.get('/users', ctrlUserPage.isAuthenticated, function(req, res){
	if(req.isAuthenticated())
		res.render('user', { user: req.user });
	else
		res.render('index', {
			title: 'Promun'
		})
});

module.exports = router;
