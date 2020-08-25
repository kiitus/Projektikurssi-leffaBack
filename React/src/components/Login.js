import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Login = ({getLoginInformation}) =>   //Compnent for getting sign in information
{
    const style ={
        margin: 22
        }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  //  const history = useHistory()

    const handleLogin = (event) =>
    {
     event.preventDefault()
    
     getLoginInformation(username,password)  //Send informatio to app component

     
     setUsername('')
     setPassword("")
  //   history.push('/')
    }
    return(
<div>

      <Form style={style} onSubmit={handleLogin}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username:</Form.Label>
    <Form.Control type="text" placeholder="Enter username" value={username} onChange={({ target }) => setUsername(target.value)}  />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password" placeholder="Enter password" value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)} />
  </Form.Group>

  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
</div>

    )
}
export default Login