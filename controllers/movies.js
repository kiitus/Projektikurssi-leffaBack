const moviesRouter = require('express').Router()
const Movie = require('../models/movie')
const User = require('../models/user')
const Review = require('../models/review')



const jwt = require('jsonwebtoken')


const getTokenFrom = request => {   //Handels token

  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

moviesRouter.get('/', (request, response) => {    //Gets all movies and those reviews
    Movie
      .find({}).populate(`reviews`)   //(`reviews`,{ rating: 1})
      .then(movies => {
        response.json(movies)
      })
  })

  
  moviesRouter.get('/:id', (request, response) => {  //Gets movies reviewed by specific user
    let id = request.params.id;

    const token = getTokenFrom(request)     //Checks token

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }


    if(decodedToken.expire < Date.now())
    {
      return response.status(401).json({message:"Your log in was expired"})
    }


    User.findById(id).populate({
      path: 'movies',
      populate: { path: 'reviews' }
    
    }).then((user) =>
    {
      response.json(user)
    })

  })
  




module.exports = moviesRouter