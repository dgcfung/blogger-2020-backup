import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { readUser } from '../api-helper'
import axios from 'axios'

function Profile(props) {
    let history = useHistory()
    let id = props.match.params.user_id

    const [user, setUser] = useState({})


    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        let user = await readUser(id)
        setUser(user)
    }


    // delete user
    const deleteUser = async () => {
        let del = await axios({
            method: 'delete',
            url: `http://localhost:3000/users/${id}`,
            headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }
        })
        history.push(`/`)
    }

    return (
        <div className= "Profile">
            <Link to="/">About</Link>
            <h1>Profile</h1>
            <p>Blogger 2020 Member ID:</p>
            {id}
            <br></br>
            <br></br>
            <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/4080540331548233623-256.png"/>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>
            <p>Gender: {user.gender}</p>
            <p>Interests: {user.interests}</p>
            <Link to={`/profile/${id}/edit`}>Edit Profile</Link>
            <br></br>
            <Link to={`/posts/all/${id}`}>My Posts</Link>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={deleteUser}>Delete account</button>
            {/* anonymous arrow, in this circumstance allows parenthesis with function, prevents crash */}



        </div>


    )


}

export default Profile
