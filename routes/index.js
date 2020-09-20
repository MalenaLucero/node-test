var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/numeros', function(req, res, next) {
  //res.send --> texto plano
  //res.render --> HTML
  //res.sendStatus --> status code
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  const id = Math.floor(Math.random() * 10) + 1;   
  res.json({id: id})
});

module.exports = router;
