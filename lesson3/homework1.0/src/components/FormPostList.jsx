import React from 'react'

const FromPostList = (props) => {

    return (
        <div className='post__item'>
            {
                props.posts.map((post,idx)=>
                <div key={idx}>
                    <h2>{idx+1} {post.title}</h2>
                    <p>{post.body}</p>
                    <button type="" onClick={()=>props.deletePost(post.title)}>delete</button>
                </div>
                )
            }
        </div>
    )
}

export default FromPostList