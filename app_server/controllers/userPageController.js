var mongoose = require('mongoose');
var Grupo = mongoose.model('Grupo');
var Usuario = mongoose.model('Usuario');
var PartidosFaseFinal = mongoose.model('PartidosFaseFinal');

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

var userPage = (req, res) => {
  Grupo.find().sort({letra: 'asc'}).then((grupos) => {
    Usuario.find({tipo: 'user'}, {username: 1, puntaje: 1}).sort({puntaje: -1}).then((usuarios) => {
      PartidosFaseFinal.find().sort({nro_partido: 'asc'}).then((partidos) => {
        res.render('user', {
          title: 'Promun',
          grupos: grupos,
          usuarios: usuarios,
          partidosFaseFinal: partidos
        });
      });
    });
  });
}

module.exports = {
  userPage
};
