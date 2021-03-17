var express = require('express');
var router = express.Router();

const seneca = require('seneca')()
seneca.quiet()

seneca.client(9002)
//http://localhost:3000/register/adduser   --queryPrameters(id,fisrtName,LastName,Username,Password)
router.get("/adduser",(req,res,next)=>{
    seneca.act({component:'register', action:'adduser',id:req.query.id,FirstName:req.query.FirstName,LastName:req.query.LastName,
    UserName:req.query.UserName,password:req.query.password},(err,response)=>{
        if(err) console.log(err)
        res.send(response.message)
    })
})


//http://localhost:3000/register/updateuser   --queryPrameters(id,fisrtName,LastName)
router.post("/updateuser",(req,res,next)=>{
    seneca.act({component:'register', action:'updateuser',id:req.query.id,FirstName:req.query.FirstName,LastName:req.query.LastName},(err,response)=>{
        if(err) console.log(err)
        res.send(response.result)
    })
})

//http://localhost:3000/register/deleteuser --queryPrameters(id)
router.get("/removeuser",(req,res,next)=>{
    seneca.act({component:'register', action:'deleteuser',id:req.query.id}, (err, response)=>{
        if(err) console.log(err)
        res.send(response.message)
    })
})


module.exports = router;

