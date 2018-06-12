var mongoose = require('mongoose');
var Grupo = mongoose.model('Grupo');
var Usuario = mongoose.model('Usuario');
var PartidoFaseFinal = mongoose.model('PartidoFaseFinal');

var userPage = (req, res) => {
    console.log("BIENVENIDO!!" + req.user);
    Grupo.find().sort({letra: 'asc'}).then((grupos) => {
      Usuario.find().sort({puntaje: -1}).then((usuarios) => {
        Usuario.findOne({'id' : req.user.id}).then((usuario) => {
          PartidoFaseFinal.find().sort({nro_partido: 'asc'}).then((partidos) => {
            res.render('user', {
              title: 'Promun',
              grupos: grupos,
              usuarios : usuarios,
              usuario: usuario,
              partidosFaseFinal: partidos
            });
          });
        });
      });
  });
}

module.exports = {
  userPage
};
