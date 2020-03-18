import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'

class About extends React.Component {


    render() {
        return (
            <div className="About">
                <h1>About Blogger 2020</h1>
                <div className= "about-paragraph">
                <p>Blogger 2020 is a newly designed app for the new generation of bloggers. </p>
                <p>Keep up to date with your family, friends, and co-workers latest thoughts & opinions.</p>
                </div>
                <div className = "sign-in">
                <Link to="/login/sign_in">Sign In</Link>
                </div>
                <div className="sign-in">
                <Link to="/login/signup">Sign Up now</Link>
                <br></br>
                </div>
            </div>

        )
    }

}

export default About