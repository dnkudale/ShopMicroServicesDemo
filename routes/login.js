var express = require('express');
var router = express.Router();

const seneca = require('seneca')()
seneca.quiet()

seneca.client(9001)
//http://localhost:3000/login/getuser   --queryPrameters(name and password)
router.get("/getuser",(req,res,next)=>{
    seneca.act({component:'login', action:'getuser',name:req.query.name,password:req.query.password},(err,response)=>{
        if(err) console.log(err)
        res.send(response.result)
    })
})

module.exports = router;

