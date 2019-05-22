var express = require('express');
var databaseExecuter=require('../connection/DatabseConnection');
module.exports = {
    getUserDetail: function()
    {
      let query="Select * from users;";
      let response=databaseExecuter.execute(query);

      return response;
} ,
myDetail: function(id)
{

  return "my Details";
  
} 

}
/* GET users listing. */


