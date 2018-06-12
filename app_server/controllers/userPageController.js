var mongoose = require('mongoose');
var Grupo = mongoose.model('Grupo');
var Usuario = mongoose.model('Usuario');
var PartidoFaseFinal = mongoose.model('PartidoFaseFinal');

var userPage = (req, res) => {
    console.log("BIENVENIDO!!" + req.username);
    Grupo.find().sort({letra: 'asc'}).then((grupos) => {
      Usuario.findOne({ 'id' : profile.id}).sort({puntaje: -1}).then((usuario) => {
        PartidoFaseFinal.find().sort({nro_partido: 'asc'}).then((partidos) => {
          res.render('user', {
            title: 'Promun',
            grupos: grupos,
            usuario: usuario,
            partidosFaseFinal: partidos
          });
        });
      });
    });
}

module.exports = {
  userPage
};
