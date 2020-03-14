import React from 'react'
import { loginUser } from '../api-helper'

function SignUp(props) {
    
    return (
        <>
            <h1>Sign Up</h1>
            <form onChange={props.handleChange}>
                <input name="email" type="email" placeholder="email" name='email' value={props.email}></input>
                <input name="password" type="password" placeholder="pass" name='password' value={props.password}></input>
                <button onClick={props.handleSubmit}>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp