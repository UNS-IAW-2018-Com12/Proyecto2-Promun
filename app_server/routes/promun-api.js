var express = require('express');
var router = express.Router();

var ctrlAPI = require('../controllers/apiController');

//Funcion para proteccion de rutas
function authenticate(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
}

//Rutas de la aplicacion
router.post('/agregarPronostico', authenticate, (req, res, next) => {
    ctrlAPI.addPronostico;
});

router.post('/borrarPronostico', authenticate, (req, res, next) => {
    ctrlAPI.deletePronostico;
});

router.post('/agregarPronosticoFaseFinal', authenticate, (req, res, next) => {
    ctrlAPI.addPronosticoFaseFinal;
});

router.get('/descripcion/:equipo', authenticate, (req, res, next) => {
    ctrlAPI.getDescripcionEquipo;
});

module.exports = router;
