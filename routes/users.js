var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   //res.send('respond with a resource');
  //res.render('layout', { title: 'HELLO USER' });
  res.render('index', { title: 'NAJBOLJA OSOBA NA SVETU!' });
});

module.exports = router;
