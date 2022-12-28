import React, { useState } from 'react'

const FromPostList = (props) => {
    const [posts,setPosts] = useState([])
    return (
        <div className='post__item'>
            {
                posts.map((post,idx)=>
                <div>
                    <h2>{idx+1}) {post.title}</h2>
                    <p>{post.body}</p>
                </div>
                )
            }
            <li>
                <button type="" className="btn btn-number">{props.idx}</button>
                    {props.post.title}
                <button type=""  className="btn btn-deleted">Delete</button>
            </li>
        </div>
    )
}

export default FromPostList