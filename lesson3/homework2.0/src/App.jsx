import React, {useState, useEffect} from 'react';
import AddComentsItem from './components/AddComentsItem'
import ComentsList from './components/ComponentsList'

import './App.css';

const App = () => {
  const [comments, setComments] = useState([])

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      console.log(response);
      if(response.status === 200) {
        console.log("good")
      }
      return response.json();
    })
    .then((comments) => {
      const commentsFinish = comments.slice()
      setComments(commentsFinish)
    })
  }, [])
  // == Для сохранения памяти == //
  /*
  function Timer() {
    const [comments, setComments] = useState(0)
    useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/comments")
      let timer = setTimeout(() => {
      setComments((comments) => comments + 1);
      }, 1000);
      return () => clearTimeout(timer)
    }, [])
    return <h1>I've rendered {count} times!</h1>;
  }
  */

  const addComentsItem = (comment) => {
    setComments([...comments, comment])
  }

  const deleteComments = (title) => {
    const newComments = comments.filter(comment => comment.title !== title)
    setComments(newComments)
  }

  return (
    <div className='block__content'>
      <div className='add__comments-item'>
        <AddComentsItem addComentsItem={addComentsItem}/>
      </div>
      <div>
        <ComentsList deleteComments={deleteComments} comments={comments}/>
      </div>
    </div>
  );
}

export default App;
