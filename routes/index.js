var express = require('express');
var router = express.Router();

var DatabseConnection=require('../public/connection/DatabseConnection');

/* GET home page. */
DatabseConnection.init();

router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Expsresds' });
  res.send('helsldo');
});
router.get('/api', function(req, res, next) {
  // res.render('index', { title: 'Expsresds' });
   res.send('Backend of break it.');
 }); 


module.exports = router;
