const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Movie = require('../models/movie')

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        minlength:4,
        unique:true
    }, 
    name: String,
    passwordHash:{
        type:String,
        required:true,  
       },
    movies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }
    ]
  })

  userSchema.plugin(uniqueValidator);

    userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('User', userSchema)