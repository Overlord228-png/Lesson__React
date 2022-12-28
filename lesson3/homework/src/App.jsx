import React, { useState } from 'react'
import AddPost from './components/AddPost'
import PostList from './components/FormPostList';

import './App.css';

const App = () => {

  const [posts,setPosts] = useState([])

  const addPost = (post) => {
    setPosts([...posts,post])
  }

  return (
    <div>
      <div className="add__post">
        <AddPost addPost={addPost} />
      </div>
      <div>
      </div>
      {
      /*<div className="post__list">
        <PostList postList={PostList} />
      </div>
      */
      }
    </div>
  )
}
export default App;