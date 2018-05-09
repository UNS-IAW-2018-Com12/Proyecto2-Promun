var express = require('express');
var router = express.Router();

var ctrlAPI = require('../controllers/apiController');

router.post('/agregarPronostico', ctrlAPI.addPronostico);

router.post('/borrarPronostico', ctrlAPI.deletePronostico);

router.post('/agregarPronosticoFaseFinal', ctrlAPI.addPronosticoFaseFinal);

router.get('/descripcion/:equipo', ctrlAPI.getDescripcionEquipo);

router.post('/cargarResultado', ctrlAPI.cargarResultadoGrupo);

router.post('/cerrarPartido', ctrlAPI.cerrarPartidoGrupo);

module.exports = router;
