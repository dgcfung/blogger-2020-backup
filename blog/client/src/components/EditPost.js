import React, { useState, useEffect } from 'react'
import { updatePost, readAPost } from '../api-helper'
import { Link } from 'react-router-dom'

function EditPost(props) {
    let user_id = props.match.params.user_id
    let post_id = props.match.params.post_id

    const [formValues, setFormValues] = useState({
        body: ''
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
        let res = await updatePost(post_id, formValues)

        props.history.push(`/posts/all/${user_id}`)

    }

    const getPostInfo = async () => {
        let res = await readAPost(post_id)
        setFormValues(res)
    }

    useEffect(() => {
        getPostInfo()

    }, [])

    return (
        <form onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <Link to={`/posts/all/${user_id}`}>Back to Posts</Link>

            <p>Body:</p>
            <input type="text" name="body" className="post-body" placeholder="Body" value={formValues.body} />
            <button className="form-button">Send</button>


        </form>
    )

}

export default EditPost