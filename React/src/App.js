import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

import ListOfMovies from './components/ListOfMovies'
import Review from './components/Review'
import Login from './components/Login'
import Information from './components/Information'
import SignUp from './components/SignUp'
import Notification from './components/Notification'
import SearchMovieToReview from './components/SearchMovieToReview'
import movieService from './services/movies'
import loginService from './services/login'
import registerService from './services/register'
import reviewService from './services/review'

const App = () => {
  const [movies, setMovies] = useState([]) //All movies with their reviews
  const [movieToReview,setMovieToReview] = useState(null) //Movie from API to revies
  const [user, setUser] = useState(null) //Logged in user
  const [errorMessage,setErrorMessage] = useState(null)//Error messages
  const [usersMovies, setUsersMovies] = useState([]) //Movies of logged in user with their reviews
  
  

 const sortByTitle = ((a,b) =>{
    if(a.Title > b.Title)
    {
      return 1
    }
    else if (b.Title  > a.Title)
    {
      return -1
    }
    else
    {
      return 0
    }
  })

  useEffect(() => {     //Gets all reviews from server when user entters in the site
    movieService.getAll().then(movies =>
      {

       movies.sort(sortByTitle); 
      setMovies( movies )
    
      }
    )  
  }, [])


  useEffect(() => {   //Handels logged in user when user entters to the site
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    reviewService.setToken(user.token)

    if(user)  //Gets logged in users reviewed movies
    {
      movieService.getUsersMovies(user.id).then((data)=>
      {
        if(data !==null)
        {
        data.movies.sort(sortByTitle)
        setUsersMovies(data.movies)
        }
      })
    }
    }
  }, [])

 
const logout = ()=>{

  window.localStorage.removeItem('loggedAppUser')
  setUser(null)
  reviewService.setToken(null);
  setUsersMovies([])

}
  const searchFromAPI = (search)=>    //Gets movie data from omdbapi
  {
  //  event.preventDefault()
    
    movieService.searchMovie(search).then((response)=>
    {
      
     if (response.data.Response!=="False")
     {
     setMovieToReview(response.data)
     }
     else
    {
      setMovieToReview(null)
    }
   //  setsearch("")
    }).catch((error)=>
    {
    console.log(error)
    })
  }
  const makeReview =(review) =>   //Handels review made by review component
  {
   
    let ownMovieIndex = usersMovies.findIndex((movie)=>{ //Has users already reviewed this movie 
    return movie.Title === review.Title      
    })
    let MovieIndex = movies.findIndex((movie)=>  //Has someone reviewed this movie
    {
      return movie.Title === review.Title
    })
    let reviewIndex = -1;
    if(ownMovieIndex !== -1)  //If user has already reviewed this movie
    {

      reviewIndex = usersMovies[ownMovieIndex].reviews.findIndex((review)=>  //Which reviews is his
      {
        return review.user === user.username   
      })


      if(window.confirm(`You have already reviewed this movie. Update the review?`)) //Do we overwrite the review
      {
       reviewService.update(usersMovies[ownMovieIndex].reviews[reviewIndex].id,review.reviews[0]).then((updatedReview)=>
       {
         //Let's update the review to users and all reviews
        let tmpUsers = usersMovies.concat()
        let tmpMovies = movies.concat()

    
        tmpUsers[ownMovieIndex].reviews[reviewIndex] = updatedReview
        tmpMovies[MovieIndex].reviews[reviewIndex] = updatedReview

        setUsersMovies(tmpUsers)
        setMovies(tmpMovies)

       }).catch((error)=>
        {
        console.log(error.response.data)
         })
     }
    }
    if(ownMovieIndex === -1)  // Logged in user hasn't reviewed the movie
    {
      reviewService.create(review).then((newReview)=>
      {
         if(MovieIndex === -1) //No one has reviewed the movie
         {
           review.reviews.length = 0 //Change the review from form to the one in database(includes date and user)
            review.reviews.push(newReview)

          //Updates the review to all reviews state
          let movieArray = movies.concat(review)

           movieArray.sort(sortByTitle)
         setMovies(movieArray)
         }
         else   //Movie is already reviewed by someone, so jus add review to that movie
         {
          let movieArray =movies.concat()
                   
          movieArray[MovieIndex].reviews.push(newReview)
          setMovies(movieArray)
         }

         let ownMovieArray
       
         if(MovieIndex ===-1)  // add review to users review state
          ownMovieArray = usersMovies.concat(review) //brand new movie reviewed
         else      
         ownMovieArray =usersMovies.concat(movies[MovieIndex]) //someone has already reviewed movie
         
         ownMovieArray.sort(sortByTitle)
        setUsersMovies(ownMovieArray)
        })
       
      }
       setMovieToReview(null)
    }

  


  const login =(username,password) =>
  {
  
    loginService.login({username,password}).then((user)=>{
    
      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(user)
      ) 
      reviewService.setToken(user.token)
    
      movieService.getUsersMovies(user.id).then((data)=> //Gets logged in users reviewed movies 
      {
        data.movies.sort(sortByTitle)
        setUsersMovies(data.movies)
      })
      setUser(user)

    }).catch((error)=>{setErrorMessage(
    
      `${error.response.data.error}`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 6000)
  })

  }
 

const getSignUpIformation = (username,password,password2)=>{  //New user registeres in the site
  if(password === password2)
  {

     registerService.register({userName:username,password}).then((user)=>
    {
      login(user.userName,password)  
    
    }).catch((error)=>
    {
      
      console.log(error.response)
      setErrorMessage(error.response.data.message)
      setTimeout(() => {
        setErrorMessage(null)
      }, 6000)

     return false
    })
  }else
  {
    setErrorMessage("Passwords didn't match")
    setTimeout(() => {
      setErrorMessage(null)
    }, 6000)
    return false
  }
}


const padding = {
  padding: 15
}


return(

<div className="container">
  <Router>
     
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/reviews">all reviews</Link>
        <Link style={padding} to="/your_reviews">movies reviewed by you</Link>
        <Link style={padding} to="/make_review">make review</Link>
      {user ?
      null :  
      <Link style={padding} to="/sign_up">Sign up</Link>}
        {user
      ? <em>{user.username} logged in <button onClick={logout}> Logout</button></em>
      : <span>You are not logged in</span>
     // : <Link style={padding} to="/login">login</Link>
    }
      </div>

      <Switch>
        <Route path="/sign_up">
          {!user?        //Notice ! mark, if not logged in show sign up form, when signs in show make review
          <div>
          <Notification message={errorMessage}/>
          <SignUp getSignUpIformation={getSignUpIformation} />
          </div>
          :<div><SearchMovieToReview getSearchedTitle={searchFromAPI}/> 
          <Review movie={movieToReview} getReview={makeReview} />
          </div>}
        </Route>
        <Route path="/reviews">
          <ListOfMovies  movies={movies} />
        </Route>
        <Route path="/your_reviews">
          {user?                              //Requires logged in to show users movies(reviews)
          <ListOfMovies movies={usersMovies} />
          :<div><Notification message={errorMessage}/>
          <Login getLoginInformation={login}/>
          </div>}
        </Route>
        <Route path="/make_review">
          {user?                //requires logged in the make review
           <div ><SearchMovieToReview getSearchedTitle={searchFromAPI}/>
        <Review movie={movieToReview} getReview={makeReview} />
        </div>
        :<div>
          <Notification message={errorMessage} />
          <Login getLoginInformation={login}/></div>}
        </Route>
        <Route path="/login">       
        <Login getLoginInformation={login}/>
        </Route>
       < Route path="/">
       <Information amount={movies.length}/>
        </Route>
      </Switch>

      <footer style={{clear:'both',marginTop:40,bottom:0,
    padding:20,backgroundColor:"grey"}}>
        <i>Teemu Hallinen, Ohjelmistosuunnittelu täydennyskoulutus SeAMK 2019-2020</i>
      </footer>
    </Router>
    </div>
   
)
  
}
export default App