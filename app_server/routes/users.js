var express = require('express');
var router = express.Router();

var ctrlUserPage = require('../controllers/userPageController');

//Asegura que los usuarios que intentan interactuar con la app esten autenticados
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}

router.get('/', ensureAuthenticated, ctrlUserPage.userPage);

module.exports = router;
