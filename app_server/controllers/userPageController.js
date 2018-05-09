var mongoose = require('mongoose');
var Grupo = mongoose.model('Grupo');
var Usuario = mongoose.model('Usuario');
var PartidoFaseFinal = mongoose.model('PartidoFaseFinal');

// req.isAuthenticated()
var userPage = (req, res) => {
  if (req.isAuthenticated()) {
    Grupo.find().sort({letra: 'asc'}).then((grupos) => {
      Usuario.find({tipo: 'user'}, {username: 1, puntaje: 1}).sort({puntaje: -1}).then((usuarios) => {
        PartidoFaseFinal.find().sort({nro_partido: 'asc'}).then((partidos) => {
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
  else {
    res.redirect('/login');
  }
}

module.exports = {
  userPage
};
