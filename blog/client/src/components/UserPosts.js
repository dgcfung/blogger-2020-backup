import React from 'react'
// import {BrowserRouter, Link} from 'react-router-dom'
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link
} from 'react-router-dom'
import { readAllUserPosts } from '../api-helper'

function UserPosts(props) {
    let id = props.match.params.user_id
    const linkId = `/posts/${id}/create`

    function handleClick() {
        props.history.push(`/posts/${id}/create`);
    }

    return (

        <div className="Posts">
            <h1>User Posts</h1>
            <button type="button" onClick={handleClick}> Create New Post
    </button>
        </div>

    );
}


export default UserPosts