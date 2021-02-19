import React, {useState} from 'react'
import NumericInput from 'react-numeric-input';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Review = ({movie, getReview}) => { //Component for making a review
    const [rating, setRating] = useState(5)
    const [writeReview, setWriteReview] = useState(``)

    const [buttonDisabled, setButtonDisable] = useState(false)

    const reviewAdder = (event) => {
        event.preventDefault()
        if (writeReview.length > 3) {

            setButtonDisable(true) //prevents double click

            // const review ={...movie,rating,review:writeReview}

            const review = {
                Title: movie.Title,
                Year: movie.Year,
                Poster: movie.Poster,
                imdb: movie.imdbRating,
                reviews: []
            }

            review
                .reviews
                .push({rating, review: writeReview})

            getReview(review) //Send review to app component

            setRating(5)
            setWriteReview("")

            setTimeout(() => { //Prevent double  click
                setButtonDisable(false)
            }, 1000)

        }
    }

    const left = {
        display: 'inline-block',
        float: "left",
        marginRight: 110,
        marginLeft: 50
    }
    const margin = {
        marginLeft: 50
    }
 

    if (movie === null) {
        return null
    } else {

        return (
            <div>

                <h2 style={margin}>
                    {movie.Title} {movie.Year}
                </h2>
                <div style={left}>
                    <h3>
                        IMDB-rating:{movie.imdbRating}</h3>
                    <p>
                        <img src={movie.Poster} alt="Poster"/>
                    </p>
                </div>

                <h2>Review movie</h2>
                <Form onSubmit={reviewAdder}>

                    <Form.Group controlId="reviewTextarea">
                        <Form.Row>
                            <Form.Label>Rating</Form.Label>
                            <NumericInput
                                required = {true}
                                min={0}
                                max={10}
                                step={0.1}
                                value={rating}
                                name="rating"
                                onChange={setRating}/>
                        </Form.Row>
                        <Form.Row>

                            <Form.Label>Write a review</Form.Label>
                            <Form.Control
                                placeholder="Write your review here ( min 4 letters)"
                                as="textarea"
                                rows="17"
                                value={writeReview}
                                onChange={({target}) => setWriteReview(target.value)}/>

                            <Button className="float-right"  variant="primary" type="submit" disabled={buttonDisabled}>
                                Save review
                            </Button>
                        </Form.Row>
                    </Form.Group>

                </Form>

            </div>
        )
    }
}

export default Review