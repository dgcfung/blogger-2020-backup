import React, { useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { readUser, getUser, destroyUser } from '../api-helper'
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
            headers: {Authorization: `Bearer ${localStorage.getItem('authToken')}` }
        })
        console.log('User deleted')
        history.push(`/`)
    }

    return (
        <div>

            <h1>Profile</h1>
            {id}
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
