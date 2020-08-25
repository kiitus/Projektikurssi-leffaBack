import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearcMovieToReview = ({getSearchedTitle}) => {  //component for form to search movie form api
    const [search, setsearch] = useState("")

    const getMovieAPI = (event) => { //gets movie data from omdbapi
        event.preventDefault()

        getSearchedTitle(search)

        setsearch("")
    }
    const margin = {
        marginRight: 10,
        marginTop: 20
    }

    return (

        <Form style={margin} onSubmit={getMovieAPI}>
            <Form.Group controlId="formBasicMovie">
                <Form.Label>Search movie to review:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Title of the movie"
                    value={search}
                    name="search"
                    onChange={({target}) => setsearch(target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Seach movie
            </Button>
        </Form>

    )
}
export default SearcMovieToReview