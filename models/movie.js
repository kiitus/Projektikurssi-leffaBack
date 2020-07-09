const mongoose = require('mongoose')


const movieSchema = mongoose.Schema({
    Title: String,
    Year: String,
    Poster: String,
    imdb: String,

    reviews: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }]
  })

  movieSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })


  

  module.exports = mongoose.model('Movie', movieSchema)