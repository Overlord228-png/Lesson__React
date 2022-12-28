import React, { useState } from 'react'
import FormPostList from './components/FormPostList';
import AddPost from './components/AddPost';
import './App.css';

const App = () => {
  const [posts,setPosts] = useState([])

  const addPost = (post) => {
    setPosts([...posts,post])
  }
  return (
    <div className="App">
      <AddPost />
      <FormPostList />
      <div>
        {
          posts.map((post,idx)=>
          <div>
            <h2>{idx+1}) {post.title}</h2>
            <p>{post.body}</p>
          </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
