import React, { useState, useEffect } from 'react'
import { updatePost, readUser } from '../api-helper'

function EditPost (props){
// need forms to edit post
console.log(props)
let user_id = props.match.params.user_id
let post_id= props.match.params.post_id
console.log(user_id)
console.log(post_id)
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
    let res = await updatePost(user_id, post_id, formValues)
    if (res.status === 200) {
        props.history.push(`/posts/${user_id}/${post_id}/edit`)
    }

}

const getPostInfo = async()=>{
    let res = await updatePost(user_id, post_id, formValues)
    setFormValues(res)
}

useEffect(() => {
    getPostInfo()

}, [])

return(
<form onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <p>Body:</p>
            <input type="text" name="body" className="post-body" placeholder="Gender" value={formValues.body} />
            <button className="button">Send</button>


        </form>
)

}

export default EditPost