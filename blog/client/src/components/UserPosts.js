import React, { useEffect, useState } from 'react'
// import {BrowserRouter, Link} from 'react-router-dom'
import axios from 'axios'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link
} from 'react-router-dom'
import { readAllUserPosts } from '../api-helper'

function UserPosts(props) {

    const [post, setPost] = useState()

    console.log(props)
    let id = props.match.params.user_id
    const linkId = `/posts/${id}/create`

    function handleClick() {
        props.history.push(`/posts/${id}/create`);
    }

    // const readPosts = async () => {
    //     let posts = await readAllUserPosts(id)
    //     console.log(posts)
    //     // need to map posts
    // }

    useEffect(() => {
        const readPosts = async () => {
            let posts = await readAllUserPosts(id)
            setPost(posts)
        }
        readPosts()
    }, [])

    console.log(post, 'line 38')

    const deletePost = async (id) => {
        let del = await axios({
            method: 'delete',
            url: `http://localhost:3000/posts/${id}`,
            headers: {Authorization: `Bearer ${localStorage.getItem('authToken')}` }
        })
    }


    
    return (

        <div className="Posts">
            <h1>User Posts</h1>
            {post && post.map(post => (
                <div>{post.body}
                <button onClick={deletePost(post.id)}>Delete Post</button>
                </div>
                
            ))}
            <button type="button" onClick={handleClick}> Create New Post
            </button>
        </div>

    );
}


export default UserPosts