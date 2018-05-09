var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
      req.session.destroy();
      req.logout();
      res.redirect('/');
});

module.exports = router;
