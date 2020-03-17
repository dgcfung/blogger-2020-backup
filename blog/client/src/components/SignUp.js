import React from 'react'
import { Link } from 'react-router-dom'

function SignUp(props) {
    // create user
    return (
        <>
            <Link to={`/`}>Return to About</Link>
            <h1>Sign Up</h1>
            <form onChange={props.handleChange}>

                <br></br>
                <p>Enter Email:</p>
                <input name="email" type="email" placeholder="email" name='email' value={props.email}></input>
                <br></br>
                <br></br>
                <p>Enter Password:</p>
                <input name="password" type="password" placeholder="password" name='password' value={props.password}></input>
                <br></br>
                <br></br>
                <button className="big-button" onClick={props.handleSubmit}>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp