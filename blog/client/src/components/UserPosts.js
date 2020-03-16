import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { readAllUserPosts } from '../api-helper'

function UserPosts(props) {
    console.log(props)
    const [post, setPost] = useState()

    let id = props.match.params.user_id

    function handleClick() {
        props.history.push(`/posts/${id}/create`);
    }

    const readPosts = async () => {
        let posts = await readAllUserPosts(id)
        setPost(posts)
        console.log(posts)
    }

    useEffect(() => {
        
        readPosts()
    }, [])

    const deletePost = async (id) => {
        let del = await axios({
            method: 'delete',
            url: `http://localhost:3000/posts/${id}`,
            // if not ran on localhost:3000
            // user4 can delete user 1's posts
            headers: {Authorization: `Bearer ${localStorage.getItem('authToken')}` }
            
        })
        readPosts()
    }


    return (
        // read all posts
        <div className="Posts">
            <h1>User Posts</h1>
            {post && post.map(post => (
                <div>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                <Link to= {`/posts/${id}/${post.id}`}>Post</Link>
                <br></br>
                <Link to = {`/posts/${id}/${post.id}/edit`} >Edit Post</Link>
                <br></br>
                <button onClick={()=>{deletePost(post.id)}}>Delete Post</button>
                <br></br>
                <br></br>
                </div>
                
            ))}
            <button type="button" onClick={handleClick}> Create New Post
            </button>
        </div>

    );
}


export default UserPosts