var express = require('express');
var router = express.Router();
var api = require('../routes/api')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
