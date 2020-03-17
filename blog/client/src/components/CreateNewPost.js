import React, { useState } from 'react'
import { createPost } from '../api-helper'
import { useHistory } from 'react-router-dom'


function CreateNewPost(props) {
    let history = useHistory()
    let id = props.match.params.user_id

    const [formValues, setFormValues] = useState({
        title: '',
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
        let res = await createPost(id, formValues)
        if (res.status === 201) {
            let postId = res.data.id
            history.push(`/posts/all/${id}`)
        }

    }



    return (
        <div>
            <h1>Create New Post</h1>
            <form onChange={handleChange}
                onSubmit={handleSubmit}
            >

                <p>Text:</p>
                <input name="body" className="text-body" placeholder="Body" value={formValues.body} />
                <br></br>

                <button className="big-button">Send</button>


            </form>
        </div>
    )
}

export default CreateNewPost
