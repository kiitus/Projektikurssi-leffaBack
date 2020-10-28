const moviesRouter = require('express').Router()
const Movie = require('../models/movie')
const User = require('../models/user')
const Review = require('../models/review')


moviesRouter.get('/', (request, response) => {    //Gets all movies and those reviews
    Movie
      .find({}).populate(`reviews`)   //(`reviews`,{ rating: 1})
      .then(movies => {
        response.json(movies)
      })
  })

  
  moviesRouter.get('/:id', (request, response) => {  //Gets movies reviewed by specific user
    let id = request.params.id;

    User.findById(id).populate({
      path: 'movies',
      populate: { path: 'reviews' }
    
    }).then((user) =>
    {
      response.json(user)
    })

  })
  




module.exports = moviesRouter