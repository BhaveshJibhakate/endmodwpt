var mysql=require("mysql")

const mysqlconnection=mysql.createConnection({
"host":"127.0.0.1",
"user":"root",
"password":"root123",
"port":3306,
"database":"bhavesh"
})

mysqlconnection.connect((err)=>{
    if(err){
        console.log("error occurred"+JSON.stringify(err))
    }else{
        console.log("connection done")
    }
})

module.exports=mysqlconnection;
