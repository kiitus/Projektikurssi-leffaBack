const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    rating: Number, 
    review: String,
    date:String,
    user: String

  })

    reviewSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

  module.exports = mongoose.model('Review', reviewSchema)