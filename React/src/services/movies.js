import axios from 'axios'
const baseUrl = '/api/movies'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getUsersMovies = (id) =>
{
  const request = axios.get(`${baseUrl}/${id}`)
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

export default { getAll, getUsersMovies, searchMovie}