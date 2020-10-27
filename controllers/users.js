const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')



usersRouter.post("/",(req,res)=>       //Create new user
{
   const body = req.body
    const saltRounds = 10

    
 if(body.password.length > 3)    //Password long enough
 {
  bcrypt.hash(body.password, saltRounds).then((hash)=>   //hash the password
  {

                      //New user information
    const user=new User({
        userName: body.userName,
        name:body.name,
        passwordHash:hash
    })
    user.save().then((result)=>{      //Save to new user
    
        res.status(201).json(result)
    }).catch((error)=>
    {
        res.status(400).json({message:error.message})
       

    })
  })
}
else
res.status(400).json({message:"Password is too short"})
  
})

module.exports = usersRouter