var express = require('express');
var router = express.Router();

var ctrlAPI = require('../controllers/apiController');

//Asegura que los usuarios que intentan interactuar con la app esten autenticados
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}

router.post('/agregarPronostico', ensureAuthenticated, ctrlAPI.addPronostico);

router.post('/borrarPronostico', ensureAuthenticated, ctrlAPI.deletePronostico);

router.post('/agregarPronosticoFaseFinal', ensureAuthenticated, ctrlAPI.addPronosticoFaseFinal);

router.get('/descripcion/:equipo', ensureAuthenticated, ctrlAPI.getDescripcionEquipo);

module.exports = router;
