import React, { useState, useEffect, useMemo } from 'react'
import AddComentsItem from './components/AddComentsItem'
import CommentsList from './components/CommentsList'

import './App.css';

const App = () => {
  const [ comments , setComments ] = useState([])
  const [ search, setSearches ] = useState('') // == поиск по имени === //

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
      const commentsFinish = comments.slice();
      setComments(commentsFinish)
    })
  }, [])

  const addComment = (comment) => {
    setComments([...comments, comment])
  }
  const deleteComment = (name) => {
    console.log(name)
    const newComments = comments.filter(comment => comment.name !== name)
    setComments(newComments)
  }

  // == поиск по имени === //
  const searchItems = () => {
    let newCommItems = []
    for (const comment of comments) {
      console.log(1)
      if(comment.name.startsWith(search)){
        newCommItems.push(comment)
      }
    }
    return newCommItems
  }
  const searchedComments = useMemo(searchItems, [search, comments])
  //const searchedComments = searchItems()
  
  const [increment,setIncrement] = useState(0)

  return (
    <div>
      <h1 onClick={()=>setIncrement(increment+1)}>{increment}</h1>
      <div className="">
        <AddComentsItem addComment={addComment}/>
      </div>
        <input onChange={(e)=>setSearches(e.target.value)} placeholder="search" value={search} />
        <CommentsList deleteComment={deleteComment} comments={searchedComments}/>
    </div>
  )
}
export default App;