import React from "react";

const ComentsList = (props) => {
    return (
    <div className=''>
        {
            props.comments.map((comment,idx)=>
            <div key={idx}>
                <h2>{idx+1} {comment.title}</h2>
                <p>{comment.body}</p>
                <button type="" onClick={()=>props.deleteComments(comment.title)}>delete</button>
            </div>
            )
        }
    </div>
    )
}

export default ComentsList