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

	/* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('index');
	});

	/*
	// Handle Login POST
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/users',
		failureRedirect: '/',
		failureFlash : true
	}));
	*/

	/*
	//GET Registration Page
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});
	*/

	/*
	//Handle Registration POST
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/signup',
		failureFlash : true
	}));
	*/

	/*
	//GET Home Page
	router.get('/home', isAuthenticated, function(req, res){
		res.render('home', { user: req.user });
	});
	*/

	/*
	//Handle Logout
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
	*/


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

	return router;
}
