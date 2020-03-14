import React, { useState } from 'react'
import { updateUser } from '../api-helper'
import { Redirect } from 'react-router-dom'

function EditProfile(props) {
    let id = props.match.params.user_id
    const [formValues, setFormValues] = useState({
        age: '',
        gender: '',
        location: '',
        interests: '',
        password: ''
    })
    const [updated, setUpdate] = useState(false)


    const handleChange = (e) => {
        let { name, value } = e.target
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await updateUser(id, formValues)
        if (res.status === 200) {
            props.history.push(`/profile/${id}`)
        }

    }

    return (
        <form onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <h1>Edit Profile</h1>
            <p>email:</p>

            <p>Age:</p>
            <input name="age" className="post-title" placeholder="Age" value={formValues.age} />
            <p>Gender:</p>
            <input name="gender" className="post-body" placeholder="Gender" value={formValues.gender} />
            <p>Location:</p>
            <input name="location" className="post-title" placeholder="Location" value={formValues.location}></input>
            <p>Interests</p>
            <input name="interests" className="post-body" placeholder="Interests" value={formValues.interests}></input>
            <p>Password</p>
            <input type="password" name="password" className="post-body" placeholder="passwor" value={formValues.password}></input>
            <button className="button">Send</button>

        </form>


    )
}

export default EditProfile