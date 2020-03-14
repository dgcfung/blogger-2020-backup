import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'

class About extends React.Component {


    render() {
        return (
            <div>
                <h1>About Blogger</h1>
                <Link to="/login/sign_in">Sign In</Link>
                <Link to="/login/signup">Sign Up</Link>
            </div>

        )
    }

}

export default About