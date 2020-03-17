import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'

class About extends React.Component {


    render() {
        return (
            <div>
                <Link to= "/posts/all/1">Latest Posts</Link>
                <h1>About Blogger 2020</h1>
                <p>Blogger 2020 is a newly designed app for the new generation</p>
                <Link to="/login/sign_in">Sign In</Link>
                <br></br>
                <Link to="/login/signup">Sign Up</Link>
            </div>

        )
    }

}

export default About