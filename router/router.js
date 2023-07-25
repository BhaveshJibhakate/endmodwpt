const express=require("express")
const router=express.Router()
const connection=require("../db/dbconnect.js")

router.get("/employee",(req,resp)=>{
    connection.query("select * from employee2",(err,data)=>{
        if(err){
            resp.status(500).send("error"+JSON.stringify(err))
        }else{
            resp.send(data)
        }
    })
})
router.post("/employee/add",(req,resp)=>{
    var empid=req.body.empid
    var ename=req.body.ename
    var sal=req.body.sal
    connection.query("insert into employee2 values (?,?,?)",[empid,ename,sal],(err,data)=>{
        if(err){
            resp.status(500).send("error"+JSON.stringify(err))
        }else{
            resp.send("Added Successfully");
        }
    })
})

router.put("/employee/update/:empid",(req,resp)=>{
    var empid=req.body.empid
    var ename=req.body.ename
    var sal=req.body.sal
    connection.query("update employee2 set ename=?,sal=? where empid=?",[ename,sal,empid],(err,data)=>{
        if(err){
            resp.status(500).send("error"+JSON.stringify(err))
        }else{
            resp.send('Updated')
        }
    })
})

router.delete("/employee/delete/:empid",(req,resp)=>{
    connection.query("delete from employee2 where empid=?",[req.params.empid],(err,data)=>{
        if(err){
            resp.status(500).send("error"+JSON.stringify(err))
        }else{
            resp.send('deleted successfully')

        }
    })
})

router.get("/employee/:empid",(req,resp)=>{
    connection.query("select * from employee2 where empid=?",[req.params.empid],(err,data)=>{
        if(err){
            resp.status(500).send("error"+JSON.stringify(err))
        }else{
            resp.send(data)
        }
    })
})



module.exports=router;
