import React from 'react'

function EditPost (props){
    return(
        <div>
        <h1>Edit post</h1>
        <form>
            <p>Title</p>
            <input className="post-title" placeholder="Title"/>
            <p>Body</p>
            <input className="post-body" placeholder="Body"/>
            <button className="button">Send</button>

        </form>
        </div>
    )
}

export default EditPost