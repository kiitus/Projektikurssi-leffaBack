import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'
import Review from './components/Review'
import Login from './components/Login'
import SearchMovieToReview from './components/SearchMovieToReview'
import movieService from './services/movies'
import loginService from './services/login'

const App = () => {
  const [movies, setMovies] = useState([])
 // const [search, setsearch] = useState('')
  const [movieToReview,setMovieToReview] = useState(null)
 // const [username, setUsername] = useState('') 
 // const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [errorMessge,setErrorMessage] = useState(null)
  

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

  useEffect(() => {
    movieService.getAll().then(movies =>
      {
       console.log(movies) 
       movies.sort(sortByTitle); 
      setMovies( movies )
    
      }
    )  
  }, [])


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    movieService.setToken(user.token)

    }
  }, [])

 /* const handleLogin = (event)=>{
    event.preventDefault()
    loginService.login({username,password}).then((user)=>{
      console.log(user)
      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      ) 
      movieService.setToken(user.token)
      setUser(user)
      setUsername("")
      setPassword("")
    }
    ).catch((error)=>{ 
    setErrorMessage(
      `${error.response.data.error}`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 2000)
  })
} 
*/
const logout = ()=>{

  window.localStorage.removeItem('loggedBlogAppUser')
  setUser(null)
  movieService.setToken(null);

}
  const searchFromAPI = (search)=>    //Haetaan eolkuvan tiedot omdbapi:sta
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
  const makeReview =(review) =>   //Käsitellään Review komponentilla tehty arvostelu
  {
   // event.preventDefault()
   // const review ={...movieToReview,rating}
  
 //  review = {...review,user:user.username}
    review.reviews[0].user = user.username

    movieService.create(review).then((newReview)=>
    {
      const index = movies.findIndex((movie)=>
      {
       return movie.Title ===review.Title
      })
      
      if(index === -1)
      {
      
      setMovies(movies.concat(review))    //Kaataa ohjelman jos tekee toisen arvoselun samalla istunnolla
      }
      else
      {
        let newArray = [...movies]
        //newArray[index] = {...newArray[index].reviews.push(newReview)}

       
        newArray[index].reviews.push(newReview)
       
        setMovies(newArray)
       
      }
      setMovieToReview(null)
    })
 
  }

  const login =(username,password) =>
  {

    loginService.login({username,password}).then((user)=>{
      console.log(user)
      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      ) 
      movieService.setToken(user.token)
      setUser(user)
    })
  }

  if(user === null )
  {
    return (
    
   <Login getLoginInformation={login}/>
    )
      }
  
  


  return (
    <div>
      <h3>Logged in as {user.username} <button onClick={logout}> Logout</button></h3>
   
 <SearchMovieToReview getSearchedTitle={searchFromAPI}/>


<Review movie={movieToReview} getReview={makeReview} />



<h2>Movies</h2>
{movies.map((movie,index)=>
{
return <Movie key={index} movie={movie} />
})

}
</div>
  )
}

export default App