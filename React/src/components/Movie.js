import React from 'react'
import ShowReview from './ShowReview'

const Movie = ({movie, selectToShow, toShow, average}) => {  //Component for show one movie
    // const [average, setAverage] = useState(null)

    const show = (title) => {     //Clicked movie title
        //selectToShow(title)

        let total = movie
            .reviews
            .reduce((total, review) => {
                return total + review.rating
            }, 0)

        let average = total / movie.reviews.length
        average = average.toFixed(1)

        //setAverage(average)
        let selectedMovie = {
            title,
            average
        }
        selectToShow(selectedMovie)    //Sends selected movie and it's average to listOfMoives component
    }

    const sameLine = {
        display: 'inline-block',
        float: "left",
        marginRight: 100
    }
    const sameLine2 = {
        //   display:'inline-block',
        marginLeft: 100,
        textAlignVertical: 'top'
    }
    const removeSameline = {
        clear: "both",
        cursor: "pointer"

    }

    const infoUp = {
        verticalAlign: "text-top"
    }

    if (toShow !== movie.Title) {
        return (
            <h3 onClick={()=>show(movie.Title)} style={removeSameline}>
                {movie.Title} {movie.Year}
            </h3>
        )
    }
    if (toShow === movie.Title) {
        return (
            <div>

                <table>
                    <tbody>
                        <tr>
                            <td style={infoUp}>
                                <h3 onClick= {()=>show(movie.Title)} style={removeSameline}>
                                    {movie.Title} {movie.Year}
                                </h3>

                                <div style={sameLine}>

                                    <img src={movie.Poster} alt="Poster"/>
                                </div>
                            </td>
                            <td style={infoUp}>
                                <div style={sameLine2}></div>

                                <h2>IMDB-rating:{movie.imdb}</h2>

                                <h2>Average-rating:{average}</h2>

                                {movie.reviews.map((review, index) => {
                                            return <ShowReview key={index} review={review}/>
                                        })}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Movie
