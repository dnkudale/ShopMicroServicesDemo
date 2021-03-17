
module.exports = function Login(options){

    this.add({component:'login', action:'getuser'},(args,reply)=>{
        const users = this.make('users')
    
        const na = args.name
        const pa = args.password

        users.list$( {name:na,password:pa}, function(err,user){
            if(err) console.log(err)
                
            if(user.length == 0){
                reply(null, {result:"Username or Password is incorrect!!!"})
            }else{
                reply(null, {result:"Login Sucessfully"})
            }
        }) 
    })
}