const seneca = require('seneca')()
const entities = require('seneca-entity')
const mongostore = require('seneca-mongo-store')

seneca.quiet()

seneca.use(entities);
seneca.use(mongostore,{
    name:'cnsdb',
    host:'localhost',
    port:27017
})

seneca.use('register_plugin')

seneca.ready(()=>{
    console.log("Login Service is ready at port 9002");
    seneca.listen(9002);
})


