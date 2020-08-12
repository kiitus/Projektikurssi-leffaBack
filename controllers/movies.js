const moviesRouter = require('express').Router()
const Movie = require('../models/movie')
const User = require('../models/user')
const Review = require('../models/review')

const jwt = require('jsonwebtoken')
const review = require('../models/review')


const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

moviesRouter.get('/', (request, response) => {
    Movie
      .find({}).populate(`reviews`)   //(`reviews`,{ rating: 1})
      .then(movies => {
        response.json(movies)
      })
  })

  
  moviesRouter.get('/:id', (request, response) => {
    let id = request.params.id;

    User.findById(id).populate({
      path: 'movies',
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: 'reviews' }
    
    }).then((user) =>
  {
      response.json(user)
    })
    //User.findById(id).populate({path:"movies",populate:{path:"reviews"}}).then((user)=>
   
    
   /* .populate({
      path: 'friends',
      // Get friends of friends - populate the 'friends' array for every friend
      populate: { path: 'friends' }
  });
    /*
    Movie
      .find({}).populate(`reviews`)   //(`reviews`,{ rating: 1})
      .then(movies => {
        response.json(movies)
      })
      */
  })
  
  moviesRouter.post('/', (request, response) => {
    const body = request.body
  
    const token = getTokenFrom(request)

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    
   

   Movie.findOne({ Title: body.Title}).then((movie)=>
    {
    /*  if(movie !== null)
      {
      User.findById(decodedToken.id).then((finded_user)=>
      {
        //Tarkistetaan onko arvostelu jo tiedoissa
        const index = finded_user.movies.findIndex((userMovie)=>
        {
      
         return userMovie.toString() ===movie.id.toString()
        })

        if(index !== -1)
        {
          console.log("tarkistus")
          return response.status(401).json({error: 'review was created in another browser'}).end();
      
        }
      })
    }
  */
    
     
     body.rating = body.reviews[0].rating
      body.review = body.reviews[0].review
     
    

      const review = new Review ({
        rating: body.rating,
        review: body.review,
        date: (new Date()).toLocaleDateString('en-GB'),
        user: decodedToken.username})

       return  review.save().then((saved_review)=>
        {
          if(movie===null)
          {
            
            let new_movie = new Movie({
              Title: body.Title,
              Year: body.Year,
              Poster: body.Poster,
              imdb:body.imdb,
              review:[]})
              
              new_movie.reviews.push(saved_review.id)
              
              new_movie.save().then((saved_movie)=>
              {
                console.log(saved_movie.imdb)
                User.findById(decodedToken.id).then((finded_user)=>
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
          {
            movie.reviews.push(saved_review.id)
            movie.save().then((saved_movie)=>
            {
              User.findById(decodedToken.id).then((finded_user)=>
              {
                //Tarkistetaan onko arvostelu jo tiedoissa
                const index = finded_user.movies.findIndex((movie)=>
                {
              
                 return movie.toString() ===saved_movie.id.toString()
                })
                
              
                if(index === -1)
                {
                  finded_user.movies.push(saved_movie.id)
                  finded_user.save().then(()=>
                  {
                  
                    return response.status(201).json(saved_review)
                  })
                }
                else
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

moviesRouter.delete('/:id',(req,res)=>
{

  const body = req.body


  const token = getTokenFrom(req)

  const decodedToken = jwt.verify(token, process.env.SECRET)


  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  
  Movie.findById(req.params.id).then((movie)=>
  {
  
    if(movie === null)
    {
     return res.status(401).json({error: 'review to delete doesnt excist'});
    }
    
    if(decodedToken.id.toString()!==movie.user.toString())
    {
    return res.status(401).json({error: 'review was created by someone else'});
    }
    
    
      User.findById({_id:decodedToken.id}).then((user)=>
      {
      
        let filter = user.movies.filter((movie)=>
        {
         return movie.toString() !== req.params.id.toString();
        })
        user.movies = filter;
        user.save().then(() =>
        {
      
          Movie.findByIdAndDelete({_id:req.params.id}).then(()=>
          {
            res.status(204).end()
          })
          
        })
      })
    
    }).catch((error)=>
  {
    return res.status(401).json({error:error.message})
  })
  

  /*  try{
        console.log("Ennen poisoa")
   await Blog.findByIdAndDelete({_id:req.params.id})
        res.status(204).end()
      }
      catch(error)
      {
          console.log(error)
    }
    */

})

moviesRouter.put("/:id",(req,res)=>{
  const body = req.body

  const token = getTokenFrom(req)

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: 'token missing or invalid' })
    }



//testi
  const review = {
    rating: body.rating,
    review: body.review,
    date: (new Date()).toLocaleDateString('en-GB'),
    user: decodedToken.username
  }

 
  Review.findByIdAndUpdate(req.params.id,review, { new: true }).then((chancedReview)=>
  {
  return res.status(201).json(chancedReview)
  }).catch((error)=>
  {
    return res.status(401).json({error:error.message})
  })
  

})


/*moviesRouter.put("/:id",async(req,res)=>
{
    const body = req.body

    const movie = {
      title: body.title,
      year: body.year,
      poster: body.poster,
      imdb:body.imdb,
      rating: body.rating,
      review: body.rating,
      date:body.date}


  try {
    const chancedMovie = await Movie.findByIdAndUpdate(req.params.id, movie, { new: true })
    res.json(chancedMovie)
  } catch (error) {
      console.log(error)
  }
})
*/
module.exports = moviesRouter