import axios from 'axios'
const baseUrl = '/api/movies'


let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getUsersMovies = (id) =>
{
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.get(`${baseUrl}/${id}`,config)
  return request.then(response => response.data)
}


const searchMovie = (title) =>
{
  const address = `https://www.omdbapi.com/?t=${title}&apikey=d20392f7`
  return axios.get(address).then((response) =>
  {
   return response
  })
}

export default { setToken, getAll, getUsersMovies, searchMovie}