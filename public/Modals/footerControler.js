var express = require('express');
var databaseExecuter=require('../connection/DatabseConnection');
module.exports = {
    getInfo: function(res,callback)
    {
      //console.log(res.query.data)
      let query="Select * from footer;";
   
      databaseExecuter.execute(query,function (err, driverResult){ 
         callback (driverResult);

     });
   
} ,
updateFooterAddress: function(res,callback)
{
    console.log(res.body)
  
      let id=res.body.id;
      let name=res.body.address;
      let response = {message:"Something went wrong!", code:"400", status:"false"};
      if(id==undefined || id==null || id=='')
      {
        response['error']="Id cannot be left empty.";
        callback (response);
      }
      else if(name==undefined || name==null || name=='')
      {
        response['error']="Address cannot be left empty.";
        callback (response);
      }
      else{

      let query="Update footer SET address = '"+name+"' where id = "+id;
      databaseExecuter.execute(query,function (err, databaseResponse){ 
      if(databaseResponse['status']==true)
      {
        databaseResponse['result']=[];
      }
         callback (databaseResponse);

     });
    }
  
} ,
updateFooterContectNo: function(res,callback)
{
    console.log(res.body)
  
      let id=res.body.id;
      let name=res.body.contactNo;
      let response = {message:"Something went wrong!", code:"400", status:"false"};
      if(id==undefined || id==null || id=='')
      {
        response['error']="Id cannot be left empty.";
        callback (response);
      }
      else if(name==undefined || name==null || name=='')
      {
        response['error']="Contact no cannot be left empty.";
        callback (response);
      }
      else{

      
      let query="Update footer SET contactNo = '"+name+"' where id = "+id;
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
updateLogo: function(res,callback)
{
  
   

  //  callback(imagename);

      let id=res.body.id;
      let image=res.body.image;
      let response = {message:"Something went wrong!", code:"400", status:"false"};
      if(id==undefined || id==null || id=='')
      {
        response['error']="Id cannot be left empty.";
        callback (response);
      }
      else if(image==undefined || image==null || image=='')
      {
        response['error']="image cannot be left empty.";
        callback (response);
      }
      else{

      // create image name 
let imagename="image_"+Math.floor(Date.now() / 1000)+".png";


// move image into a folder 
    var base64Data = image.replace(/^data:image\/png;base64,/, "");

    require("fs").writeFile("public/storage/"+imagename, base64Data, 'base64', function(err) {
    
    });
    
      let query="Update footer SET footerLogo = '"+imagename+"' where id = "+id;
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


