var FacebookStrategy = require('passport-facebook').Strategy;
var usuario = require('../models/usuarios');
var fbConfig = require('../models/fb');

// db Connection
var mongoose = require('mongoose');
const dbURI = process.env.MLAB_URI;
mongoose.connect(dbURI);

module.exports = function(passport) {

    passport.use('facebook', new FacebookStrategy({
        clientID        : fbConfig.appID,
        clientSecret    : fbConfig.appSecret,
        callbackURL     : fbConfig.callbackUrl
    },

    // facebook will send back the tokens and profile
    function(access_token, refresh_token, profile, done) {

  	console.log('PERFIL USUARIO : ', profile);

		// asynchronous
		process.nextTick(function() {

			// find the user in the database based on their facebook id
	        usuario.findOne({ 'id' : profile.id }, function(err, user) {

	        	// if there is an error, stop everything and return that
	        	// ie an error connecting to the database
	            if (err)
	                return done(err);

				// if the user is found, then log them in
	            if (user) {
	                return done(null, user); // user found, return that user
	            } else {
	                // if there is no user found with that facebook id, create them
	                var nuevoUsuaio = new usuario();

					// set all of the facebook information in our user model
	                nuevoUsuaio.id    = profile.id; // set the users facebook id
	                nuevoUsuaio.access_token = access_token; // we will save the token that facebook provides to the user
	                nuevoUsuaio.username  = profil.displayName;
                  if(profile.emails !== undefined){
                    nuevoUsuaio.fb.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
                  }
                  nuevoUsuaio.puntaje = 0; //setea el puntaje a cero
                  
					// save our user to the database
	                nuevoUsuaio.save(function(err) {
	                    if (err)
	                        throw err;

	                    // if successful, return the new user
	                    return done(null, newUser);
	                });
	            }
	        });
        });
    }));
};
