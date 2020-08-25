import axios from 'axios'
// const baseUrl = 'http://localhost:3001/api/login'
const baseUrl = '/api/login'

const login = (credentials) =>{
    return axios.post(baseUrl,credentials).then((response)=>
     {
         return response.data
     })
 }
 
 
 export default { login }