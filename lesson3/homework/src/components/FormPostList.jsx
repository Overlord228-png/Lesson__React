import React from 'react'

const FromPostList = (props) => {
    return (
        <div className='post__item'>
            <li>
                <button type="" className="btn btn-number">{props.idx}</button>
                    {props.post.title}
                <button type=""  className="btn btn-deleted">Delete</button>
            </li>
        </div>
    )
}

export default FromPostList