var express = require('express');
var router = express.Router();
var userModal=require('../public/Modals/userConroler');
/* GET users listing. */
router.get('/', function(req, res, next) {
  let userModalalue=userModal.getUserDetail();

  res.send(userModalalue);

});
router.get('/me', function(req, res, next) {
  let userModalalue=userModal.myDetail(1);
  res.send(userModalalue);

});

module.exports = router;
