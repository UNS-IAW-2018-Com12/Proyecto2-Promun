var express = require('express');
var router = express.Router();

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
			successRedirect : '/users',
			failureRedirect : '/login'
		})
	);

	// maneja el logout
	router.get('/logut', function(req, res) {
	  req.logout();
		res.render('index', {
			title: 'Promun'
		});
	});

	return router;
}
