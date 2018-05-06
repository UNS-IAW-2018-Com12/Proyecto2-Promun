var mongoose = require('mongoose');
var Grupo = mongoose.model('Grupo');

var userPage = (req, res) => {
  Grupo.find().sort({letra: 'asc'}).then((grupos) => {
    res.render('user', {
      title: 'Promun',
      grupos: grupos
    });
  });
}

module.exports = {
  userPage
};
