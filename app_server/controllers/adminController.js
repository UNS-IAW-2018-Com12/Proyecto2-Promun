var mongoose = require('mongoose');
var Grupo = mongoose.model('Grupo');
var PartidoFaseFinal = mongoose.model('PartidoFaseFinal');

var adminPage = (req, res) => {
  Grupo.find().sort({letra: 'asc'}).then((grupos) => {
      PartidoFaseFinal.find().sort({nro_partido: 'asc'}).then((partidos) => {
        res.render('admin', {
          title: 'Promun',
          grupos: grupos,
          partidosFaseFinal: partidos
        });
      });
    });
}

module.exports = {
  adminPage
};
