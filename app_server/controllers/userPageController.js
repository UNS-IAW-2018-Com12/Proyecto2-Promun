var mongoose = require('mongoose');
var Grupo = mongoose.model('Grupo');
var Usuario = mongoose.model('Usuario');
var PartidoFaseFinal = mongoose.model('PartidoFaseFinal');

var userPage = (req, res) => {
    console.log("BIENVENIDO!!" + req.username);
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

module.exports = {
  userPage
};
