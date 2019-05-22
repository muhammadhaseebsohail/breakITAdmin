var mysql = require('mysql');
let connection="0";
//console.log(process.env);

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"sample",
    port: 3306,
    });
module.exports = {
    init: function()
    {
       
        con.connect(function(err) {
        if (err) {
          //  console.log(err)
            connection="0";
       }else{

    
       // console.log("Connected!");
        connection="1";
       }   
    });
} ,
execute: function(query,callback){
    
    
    if(query==undefined || query=="")
    {
        query="SELECT * FROM company";
    }

    con.query(query,
    function (err, result) {
        //here we return the results of the query
        var response = {message:"Something went wrong!", code:"400", status:"false"};
        
        if(err==null){
            response['message']="Request Successfull";
            response['code']=200;
            response['status']=true;
            response['result'] = result;
            callback(err, response); 
        }
        else{
            console.log(err);
            callback(err, response); 

        }
        
       // return JSON.stringify(result);
    }
);   

//console.log("runned ")

    
   // return connection;


}

}