import React, { useState, useEffect } from 'react'
import AddPost from './components/AddPost'
import FormPostList from './components/FormPostList'

import './App.css';

const App = () => {

  const [posts,setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log(response)
      if(response.status === 200) {
        console.log('good')
      }
      return response.json()
    })
    .then((posts)=>{
      const postsFinish = posts.slice(0, 50);
      setPosts(postsFinish)
    })    
  }, [])


  const addPost = (post) => {
    setPosts([...posts,post])
  }

  const deletePost = (title) => {
    const newPosts = posts.filter(post=>post.title !== title)
    setPosts(newPosts)
  }

  return (
    <div>
      <div className="add__post">
        <AddPost addPost={addPost} />
      </div>
      <div>
        <FormPostList deletePost={deletePost} posts={posts} />
      </div>
      
    </div>
  )
}
export default App;