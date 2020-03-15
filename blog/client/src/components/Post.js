import React from 'react'

function Post(props) {
    let id = props.match.params.user_id
    return (
        <div className="single-post">
            <h1>Posts</h1>
            <div className="single-comment">
                <h1>comments</h1>
            </div>

        </div>
    )
}

export default Post
