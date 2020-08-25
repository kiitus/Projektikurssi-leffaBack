import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/users'
const baseUrl = '/api/users'

const register = (new_user)=>{
  
    return axios.post(baseUrl,new_user).then((response)=>
    {
        return response.data
    }
    )
  }
  
  export default { register}