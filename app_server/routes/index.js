var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	// Get index page
	router.get('/', function(req, res) {
		res.render('index', {
			title: 'Promun'
		});
	});

	// redirecciona al usuario a facebook para que se autentifique. Cuando termine,
	// facebook redireccionara al usuario a la all en /login/facebook/callback
	router.get('/login', passport.authenticate('facebook', { scope : 'email' }
	));

	// maneja el callback luego de que facebook autentifique
	router.get('/login/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect : '/user',
			failureRedirect : '/login'
		})
	);

	//Handle Logout
	router.get('/logut', function(req, res) {
	  req.logout();
		res.render('index', {
			title: 'Promun'
		});
	});

	return router;
}
