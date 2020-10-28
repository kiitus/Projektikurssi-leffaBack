
import axios from 'axios'
const baseUrl = '/api/reviews'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const create = (newReview)=>{
    const config = {
      headers: { Authorization: token },
    }
  
    const request = axios.post(baseUrl,newReview,config)
    return request.then(response => response.data)
  }

  const update = (id,updatedReview)=>
  {
    const config = {
        headers: { Authorization: token },
      }
      console.log(config)
      let request = axios.put(`${baseUrl}/${id}`,updatedReview,config)
      return request.then((response)=>
      {
          return response.data
      })
  }
  export default { setToken,create,update}