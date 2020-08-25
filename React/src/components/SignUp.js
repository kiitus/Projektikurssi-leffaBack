import React, {useState} from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = ({getSignUpIformation}) => {     //Component for making a account
    const margin = {
        margin: 22
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSingUp = (event) => {
        event.preventDefault()

        console.log(getSignUpIformation(username, password, password2))

        setUsername('')
        setPassword("")
        setPassword2("")
    }
    return (
        <div>

            <Form style={margin} onSubmit={handleSingUp}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={({target}) => setUsername(target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        name="Password"
                        onChange={({target}) => setPassword(target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword2">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter same password"
                        value={password2}
                        name="Password2"
                        onChange={({target}) => setPassword2(target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign up
                </Button>
            </Form>

        </div>
    )
}

export default SignUp