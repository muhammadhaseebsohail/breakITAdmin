var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Expsresds' });
  res.send('hello bluehost');
});
router.post('/api', function(req, res, next) {
  // res.render('index', { title: 'Expsresds' });
  console.log(req);

   res.send('ok').statusCode(200);
 }); 


module.exports = router;
