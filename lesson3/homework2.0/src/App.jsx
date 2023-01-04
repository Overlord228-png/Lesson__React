import React, { useState, useEffect } from 'react'
import AddComentsItem from './components/AddComentsItem'
import CommentsList from './components/CommentsList'

import './App.css';

const App = () => {
  const [comments,setComments] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      console.log(response)
      if(response.status === 200) {
        console.log('good')
      }
      return response.json()
    })
    .then((comments)=>{
      const commentsFinish = comments.slice(0, 50);
      setComments(commentsFinish)
    })
  }, [])

  const addComment = (comment) => {
    setComments([...comments, comment])
  }
  const deleteComment = (title) => {
    const newComments = comments.filter(comment => comment.title !== title)
    setComments(newComments)
  }
  return (
    <div>
      <div className="">
        <AddComentsItem addComment={addComment}/>
      </div>
      <div>
        <CommentsList deleteComment={deleteComment} comments={comments}/>
      </div>
      
    </div>
  )
}
export default App;