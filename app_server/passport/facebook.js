var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose = require('mongoose');
var fbConfig = require('../models/fb');
var fbConfig = require('../models/usuarios');
var usuario = mongoose.model('userInfo', usuarioSchema);

// db Connection
const dbURI = process.env.MLAB_URI;
mongoose.connect(dbURI);

module.exports = function(passport) {

    passport.use('facebook', new FacebookStrategy({
        clientID        : fbConfig.appID,
        clientSecret    : fbConfig.appSecret,
        callbackURL     : fbConfig.callbackUrl,
        profileFields   : ['id', 'displayName', 'email']
    },

    // facebook will send back the tokens and profile
    function(access_token, refresh_token, profile, done) {

  	console.log('PERFIL USUARIO : ', profile);

		// asynchronous
		process.nextTick(function() {

			// busca en la base de datos el usuario que coincida con el id de facebook
	        usuario.findOne({ 'id' : profile.id }, function(err, user) {

	        	// si hay un error, detener todo y retornarlo
	        	// esto es, un error conectandose a la db
	            if (err)
	                return done(err);

				  // si encontro al usuaio lo loguea
	            if (user) {
	                return done(null, user);
	            } else {

	        // si no hay un usuadio con ese id entonces lo crea
	                var nuevoUsuaio = new usuario();

					// setea los datos del modelo de usuario con lo retornado por facebook
	                nuevoUsuaio.id              = profile.id;
	                nuevoUsuaio.access_token    = access_token;
	                nuevoUsuaio.username        = profil.displayName;
                  if(profile.emails !== undefined){
                    nuevoUsuaio.fb.email = profile.emails[0].value; //puede existir mas de un email, usa el primero
                  }
                  nuevoUsuaio.puntaje = 0;

					// guarda el nuevo usuario en la db y lo retorna. Si ocurre un error lo informa
                  nuevoUsuaio.save(function(err) {
	                    if (err)
	                        throw err;
	                    return done(null, newUser);
	                });
	            }
	        });
        });

    }));
};
