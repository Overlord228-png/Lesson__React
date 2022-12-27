import React, { useState } from 'react'

import FormAddPost from './components/FormAddPost';

const App = () => {

  const [posts,setPosts] = useState([])

  const addPost = (post) => {
    setPosts([...posts,post])
  }
  

  return (
    <div>
      <FormAddPost addPost={addPost}/>
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
