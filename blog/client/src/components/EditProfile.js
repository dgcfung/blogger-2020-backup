import React, { useState, useEffect } from 'react'
import { updateUser, readUser } from '../api-helper'

function EditProfile(props) {
    let id = props.match.params.user_id
    const [formValues, setFormValues] = useState({
        age: '',
        gender: '',
        location: '',
        interests: '',
        password: ''
    })


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

    const getUserInfo = async()=>{
        let res = await readUser(id)
        setFormValues(res)
    }

    useEffect(() => {
        getUserInfo()

    }, [])

    return (
        <form onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <h1>Edit Profile</h1>
            <p>Age:</p>
            <input type="text" name="age" className="post-title" placeholder="Age" value={formValues.age} />
            <p>Gender:</p>
            <input type="text" name="gender" className="post-body" placeholder="Gender" value={formValues.gender} />
            <p>Location:</p>
            <input type="text" name="location" className="post-title" placeholder="Location" value={formValues.location}></input>
            <p>Interests</p>
            <input type="text" name="interests" className="post-body" placeholder="Interests" value={formValues.interests}></input>
            <p>Password</p>
            <input type="password" name="password" className="post-body" placeholder="password" value={formValues.password}></input>
            <button className="button">Send</button>

        </form>


    )
}

export default EditProfile