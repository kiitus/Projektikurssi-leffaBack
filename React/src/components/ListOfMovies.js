import Movie from './Movie'
import React, {useState} from 'react'

const ListOfMovies = ({movies}) => {    //Component show all movies/ users movies
    const [movieToShow, setMovieToShow] = useState(null)
    const [average, setAverage] = useState(null)

    const select = (movie) => {             //Movie component return selected movie and its avarage rating

        if (movie.title === movieToShow) 
            setMovieToShow(null)
        else {
            setMovieToShow(movie.title)
            setAverage(movie.average)
        }

    }
    const margin = {
        margin: 20
    }
    const marginInner = {
        marginLeft: 20,
        marginTop: 10
    }

    return (
        <div style={margin}>
            <h2>Movies</h2>
            <div style={marginInner}>
                {movies.map((movie, index) => {
                        return <Movie
                            key={index}
                            movie={movie}
                            toShow={movieToShow}
                            selectToShow={select}
                            average={average}/>
                    })}
            </div>
        </div>
    )
}

export default ListOfMovies
