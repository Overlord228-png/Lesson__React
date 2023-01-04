import React from 'react'

const CommentsList = (props) => {
    return (
        <div className="comment__list">
            {
                props.comments.map((comment,idx) =>
                    <div key={idx}>
                        <h2>{idx+1}{comment.title}</h2>
                        <p>{comment.body}</p>
                        <button type="" onClick={()=>props.deleteComment(comment.title)}>delete</button>
                    </div>
                )
            }
        </div>
    )
}
export default CommentsList