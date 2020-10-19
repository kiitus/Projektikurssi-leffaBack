import React from 'react'

const margin = {
    margin: 20
}
const Information = ({amount}) => {   //Component for information about the site
    return (
        <div style={margin}>
            <h2>Welcome to use THE REVIEWER</h2>
            <p>This is an app for reading and writing reviews for movies. You can read
                reviews without signing in, but to write a review you must make an account for
                the site. You will see the reviews by cliking the title of the movie</p>
            <p>There are {amount} movies reviewed in the site</p>
            <p>
                <b>When you test the site, please write some sensible review</b>
            </p>
            <p>The site has been made using React, MongoDB and Node.js.</p>

        </div>
    )
}

export default Information