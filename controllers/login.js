const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')
require('dotenv').config()


loginRouter.post('/', (req, res) => {
  const body = req.body


  User.findOne({ userName: body.username }).then((user) => {
    if (user !== null) {
      bcrypt.compare(body.password,user.passwordHash).then((passCorrect)=>
      {
        if(passCorrect)
        {
          const userForToken = {
            username: user.userName,
            id: user._id,
          }
        
          const token = jwt.sign(userForToken, process.env.SECRET)
          
          res.status(200)
            .send({ token, username: user.userName,id: user._id })
          
        }
        else
        {
          return res.status(401).json({
            error: 'invalid username or password'})
        }
      })

    }
    else
    {
      return res.status(401).json({
        error: 'invalid username or password'})
    }
  })
})

module.exports = loginRouter