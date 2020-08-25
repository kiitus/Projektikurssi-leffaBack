import React from 'react'
const ShowReview = ({review}) => {

    const margin = {
        margin: 20
    }
    return (
        <div style={margin}>
            <div>
                <b>Rating:</b> {review.rating}
                
            </div>
            <div>
                <b>Review: </b> {review.review}
                
            </div>
            <div>
                <b>Author:</b> {review.user}  {review.date}
            </div>

        </div>
    )
}
export default ShowReview
