var express = require('express');
var databaseExecuter=require('../connection/DatabseConnection');
module.exports = {
    getInfo: function(res,callback)
    {
      console.log(res.query.data)
      let query="Select * from site;";
   
      databaseExecuter.execute(query,function (err, driverResult){ 
         callback (driverResult);

     });
   
} ,
updateSiteTitle: function(res,callback)
{
    console.log(res.body)
  
      let id=res.body.id;
      let name=res.body.title;
      let response = {message:"Something went wrong!", code:"400", status:"false"};
      if(id==undefined || id==null || id=='')
      {
        response['error']="Id cannot be left empty.";
        callback (response);
      }
      else if(name==undefined || name==null || name=='')
      {
        response['error']="Site Title cannot be left empty.";
        callback (response);
      }
      else{

      
      let query="Update site SET siteTitle = '"+name+"' where id = "+id;
      databaseExecuter.execute(query,function (err, databaseResponse){ 
      if(databaseResponse['status']==true)
      {
        databaseResponse['result']=[];
      }
         callback (databaseResponse);

     });
    }
  
} ,
updateSiteDescription: function(res,callback)
{
    console.log(res.body)
  
      let id=res.body.id;
      let name=res.body.description;
      let response = {message:"Something went wrong!", code:"400", status:"false"};
      if(id==undefined || id==null || id=='')
      {
        response['error']="Id cannot be left empty.";
        callback (response);
      }
      else if(name==undefined || name==null || name=='')
      {
        response['error']="Site Description cannot be left empty.";
        callback (response);
      }
      else{

      
      let query="Update site SET description = '"+name+"' where id = "+id;
      databaseExecuter.execute(query,function (err, databaseResponse){ 
      if(databaseResponse['status']==true)
      {
        databaseResponse['result']=[];
      }
         callback (databaseResponse);

     });
    }
  
}

,
updateSitesocialMetaDescription: function(res,callback)
{
    console.log(res.body)
  
      let id=res.body.id;
      let name=res.body.socialMetaDeta;
      let response = {message:"Something went wrong!", code:"400", status:"false"};
      if(id==undefined || id==null || id=='')
      {
        response['error']="Id cannot be left empty.";
        callback (response);
      }
      else if(name==undefined || name==null || name=='')
      {
        response['error']="Site Social Meta Description cannot be left empty.";
        callback (response);
      }
      else{

      
      let query="Update site SET socialMetaDeta = '"+name+"' where id = "+id;
      databaseExecuter.execute(query,function (err, databaseResponse){ 
      if(databaseResponse['status']==true)
      {
        databaseResponse['result']=[];
      }
         callback (databaseResponse);

     });
    }
  
}
,updateMetaDescription: function(res,callback)
{
    console.log(res.body)
  
      let id=res.body.id;
      let name=res.body.meta;
      let response = {message:"Something went wrong!", code:"400", status:"false"};
      if(id==undefined || id==null || id=='')
      {
        response['error']="Id cannot be left empty.";
        callback (response);
      }
      else if(name==undefined || name==null || name=='')
      {
        response['error']=" Meta Description cannot be left empty.";
        callback (response);
      }
      else{

      
      let query="Update site SET metaText = '"+name+"' where id = "+id;
      databaseExecuter.execute(query,function (err, databaseResponse){ 
      if(databaseResponse['status']==true)
      {
        databaseResponse['result']=[];
      }
         callback (databaseResponse);

     });
    }
  
}
//metaText

}
/* GET users listing. */


