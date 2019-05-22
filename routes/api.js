var express = require('express');
var router = express.Router();
var userModal=require('../public/Modals/userConroler');
var companyModal=require('../public/Modals/companyControler');
var siteModal=require('../public/Modals/siteControler');
var footerModal=require('../public/Modals/footerControler');
/* GET users listing. */
function checkresponse(data){

  if(data==null || data==""){
    return false;
  }
  else{
    return true;
  }

}

router.get('/', function(req, res, next) {

  res.send("userModalalue");

});
router.get('/auth', function(req, res, next) {

  
  let userModalalue=userModal.getUserDetail();

  res.send(userModalalue);

});
router.get('/user/signUp', function(req, res, next) {
  let userModalalue=userModal.myDetail(1);
  res.send(userModalalue);

});
// for logo update of the company 
router.post('/company/updateLogo', function(req, res, next) {

  companyModal.updateLogo(req,function (result){ 
    res.send(result);
  });


});
// for name update of the company
router.post('/company/updateName', function(req, res, next) {
  
    // res.send(req.body);

  companyModal.updateName(req,function (result){ 
    res.send(result);
  });

});
// to get the name and logo of the company
router.get('/company/getInfo',function(req, res, next) {

          companyModal.getLogoAndName(req,function (result){ 
            res.send(result);
          });



});
// get site data
router.get('/site/getInfo',function(req, res, next) {

  siteModal.getInfo(req,function (result){ 
    res.send(result);
  });



});

// update site title 
router.post('/site/updateTitle',function(req, res, next) {

  siteModal.updateSiteTitle(req,function (result){ 
    res.send(result);
  });



});
// update site description
router.post('/site/updateDescription',function(req, res, next) {

  siteModal.updateSiteDescription(req,function (result){ 
    res.send(result);
  });



});
// update site social meta description
router.post('/site/updateSocialMetaDescription',function(req, res, next) {

  siteModal.updateSitesocialMetaDescription(req,function (result){ 
    res.send(result);
  });



});
// update site meta discription
//updateMetaDescription
router.post('/site/updateMetaDescription',function(req, res, next) {

  siteModal.updateMetaDescription(req,function (result){ 
    res.send(result);
  });



});

// footer
// update footer address
router.post('/site/updateFooterAddress',function(req, res, next) {

  footerModal.updateFooterAddress(req,function (result){ 
    res.send(result);
  });

});
// footer contact no
  router.post('/site/updateFooterContactNo',function(req, res, next) {

    footerModal.updateFooterContectNo(req,function (result){ 
      res.send(result);
    });

});
// get footer detail 
router.get('/site/getFooterInfo',function(req, res, next) {

  footerModal.getInfo(req,function (result){ 
    res.send(result);
  });

});
//updateLogo
router.post('/site/updateFooterLogo',function(req, res, next) {

  footerModal.getInfo(req,function (result){ 
    res.send(result);
  });

});

// Get social media links and logo for footer 



module.exports = router;
