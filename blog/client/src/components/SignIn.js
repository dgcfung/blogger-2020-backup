import React from 'react'
import { Link } from 'react-router-dom'

function SignIn(props) {


    return (
        <div>
            <h1>Sign In</h1>
            <hr />

            <form onChange={props.handleChange}
                onSubmit={props.handleSubmit}>
                <p>Email:</p>
                <input name="email" type="text" value={props.email} />
                <p>Password:</p>
                <input name="password" type="password" value={props.password} />
                <hr />
                <button className= "big-button">Sign In</button>
               

            </form>
            <br></br>
            <Link to="/login/signup">Not a user? Sign Up here</Link>
        </div>
    )
}

export default SignIn