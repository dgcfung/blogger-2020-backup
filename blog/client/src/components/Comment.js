import React from 'react'
import {Link} from 'react-router-dom'

function Comment(){

  return(
    <div>
        <h1>Comment</h1>
        <Link to="/posts/comments/create/:user_id"/>
    </div>
  )
}

export default Comment