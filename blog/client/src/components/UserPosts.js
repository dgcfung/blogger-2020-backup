import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { readAllUserPosts } from '../api-helper'

function UserPosts(props) {
    const [post, setPost] = useState()

    let id = props.match.params.user_id

    function handleClick() {
        props.history.push(`/posts/${id}/create`);
    }

    const readPosts = async () => {
        let posts = await readAllUserPosts(id)
        setPost(posts)
    }

    useEffect(() => {

        readPosts()
    }, [])

    const deletePost = async (id) => {
        let del = await axios({
            method: 'delete',
            url: `http://localhost:3000/posts/${id}`,

            headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` }

        })
        readPosts()
    }


    return (
        // read all posts
        <div className="Posts">
            <h1>User Posts</h1>
            <button type="button" onClick={handleClick}> Create New Post
            </button>
            {post && post.map(post => (
                <div>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/${post.id}`}>Post</Link>
                    <br></br>
                    <Link to={`/posts/${id}/${post.id}/edit`} >Edit Post</Link>
                    <br></br>
                    <button onClick={() => { deletePost(post.id) }}>Delete Post</button>
                    <br></br>
                    <br></br>
                </div>

            ))}

        </div>

    );
}


export default UserPosts