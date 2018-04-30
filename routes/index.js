var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Promun' });
});

router.get('/readme', function(req, res, next) {
  res.render('readme');
})

module.exports = router;
