
const express=require("express")
const app=express()
const bodyparser=require("body-parser")
const cors=require("cors")
const router=require("./router/router.js")

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());

app.use("/",router);

app.listen(3002,function(){
    console.log("server running at port 3002")
})

module.exports=app;

