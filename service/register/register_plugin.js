//Create cart function for adding Functionality
module.exports = function register(options){
    
    this.add({component:'register', action:'adduser'},(args,reply)=>{
        const users = this.make$('UserADD')
        
        users.id = args.id
        users.firstName = args.FirstName
        users.lastName = args.LastName
        users.username = args.UserName
        users.password = args.password

        users.save$({},(err,user)=>{
            if(err) console.log(err)
            // console.log(user)
            reply(null,{message:"User Added Sucessfully!!!!"})
        })
    })

    this.add({component:'register', action:'updateuser'},(args,reply)=>{
           
        var UpdateID = args.id 
        var users = this.make$('UserADD',{id:UpdateID})
           
        users.firstName = args.FirstName
        users.lastName = args.LastName

        users.save$({},(err,user)=>{
            if(err) console.log(err)
            reply(null,{result:"User Updated Sucessfully!!!"})
        })      
    })

    this.add({component:'register', action:'deleteuser'},(args, reply)=>{
        const users = this.make$('UserADD')

        users.remove$({},(err)=>{
                if(err) console.log(err)
                reply(null,{message:'User is removed Sucessfully!!!'})

        })
    })
} 