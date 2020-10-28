const reviewsRouter = require('express').Router()
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


  reviewsRouter.post('/', (request, response) => {  //New review (and movie if not exist)
    const body = request.body
  
    const token = getTokenFrom(request)  //Checks token

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    
   

   Movie.findOne({ Title: body.Title}).then((movie)=> //Find movie to review
    {
  
     body.rating = body.reviews[0].rating
      body.review = body.reviews[0].review
     
    

      const review = new Review ({    //New review
        rating: body.rating,
        review: body.review,
        date: (new Date()).toLocaleDateString('en-GB'),
        user: decodedToken.username})

       return  review.save().then((saved_review)=>
        {
          if(movie===null)   //New movie if doesn't exist
          {
            
            let new_movie = new Movie({
              Title: body.Title,
              Year: body.Year,
              Poster: body.Poster,
              imdb:body.imdb,
              review:[]})
              
              new_movie.reviews.push(saved_review.id)   //Review to movie
              
              new_movie.save().then((saved_movie)=>
              {
                console.log(saved_movie.imdb)
                User.findById(decodedToken.id).then((finded_user)=>   //Movie to user
                {
                  finded_user.movies.push(saved_movie.id)
                  finded_user.save().then(()=>
                  {
                    return  response.status(201).json(saved_review)
                  })
                })
             })
          
          }
          else
          {                                 //Movie already exist
            movie.reviews.push(saved_review.id)    //review to movie
            movie.save().then((saved_movie)=>
            {
              User.findById(decodedToken.id).then((finded_user)=>     //Does movie already in user
              {
                //Tarkistetaan onko arvostelu jo tiedoissa
                const index = finded_user.movies.findIndex((movie)=>
                {
              
                 return movie.toString() ===saved_movie.id.toString()
                })
                
              
                if(index === -1)   // Movie wasn't in user
                {
                  finded_user.movies.push(saved_movie.id)
                  finded_user.save().then(()=>
                  {
                  
                    return response.status(201).json(saved_review)
                  })
                }
                else                        //Movie was in user
                {
                  console.log("Leffaa ei käyttäjän taulukkoon, oli jo")

                  return response.status(201).json(saved_review)
                }

               
              })
            
            })
          }
        })

    
     
  
    })
  })



reviewsRouter.put("/:id",(req,res)=>{      //Update existin review
  const body = req.body

  const token = getTokenFrom(req)     //Checks token

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }



        //Update information to review
  const review = {
    rating: body.rating,
    review: body.review,
    date: (new Date()).toLocaleDateString('en-GB'),
    user: decodedToken.username
  }

        //Updates review
  Review.findByIdAndUpdate(req.params.id,review, { new: true }).then((chancedReview)=>
  {
  return res.status(201).json(chancedReview)
  }).catch((error)=>
  {
    return res.status(401).json({error:error.message})
  })
  

})



module.exports = reviewsRouter