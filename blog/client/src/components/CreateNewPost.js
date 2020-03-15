import React, {useState} from 'react'
import {createPost} from '../api-helper'


function CreateNewPost (props){
    console.log(props)
    let id = props.match.params.user_id
    
    const [formValues, setFormValues] = useState({
        title: '',
        body: ''
    })
    // const [created, createPost] = useState(false)


    const handleChange =(e)=> {
        let {name, value} = e.target
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        let res = await createPost(id, formValues)
        console.log(res)
        if(res.status === 201){
            console.log(res.status)
            let postId= res.data.id
            console.log(postId)
        props.history.push(`/posts/${id}/${postId}`)
        }

    }
    


    return(
        <div>
        <h1>Create New Post</h1>
        <form onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <p>Title:</p>
            <input name="title" className="post-title" placeholder="Title" value ={formValues.title}/>
            <p>Text:</p>
            <input name="body" className="post-body" placeholder="Body" value= {formValues.body}/>

            <button className="button">Send</button>


        </form>
        </div>
    )
}

export default CreateNewPost
