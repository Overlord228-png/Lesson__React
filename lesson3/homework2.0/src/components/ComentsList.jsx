import React from "react";

const ComentsList = (props) => {

    return (
        <div className="comments__list">
            {
                props.posts.map((post,idx) =>
                <div>
                    <h2>{idx+1}{post.title}</h2>
                    <p>{post.body}</p>
                    <button onClick={()=>props.deletePost(post.title)}>Delete</button>
                </div>
                )
            }
        </div>
    )
}

export default ComentsList