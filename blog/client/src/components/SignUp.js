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
                <input name="email" type="email" placeholder="email" name='email' value={props.email}></input>
                <input name="password" type="password" placeholder="password" name='password' value={props.password}></input>
                <button onClick={props.handleSubmit}>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp