import React, { useState , useEffect } from 'react';
import UsersList from "./components/UsersList"
import AddUsersItem from "./components/AddUsersItem"
import SearchUser from "./components/SearchUser"

import './App.css';

function App() {
  const [ users , setUsers ] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response);
      if (response.status === 200){
        console.log("BE BETTER!")
      }
      return response.json();
    })
    .then((users)=>{
      const usersFinish = users.slice();
      setUsers(usersFinish)
    })
  }, [])

  const addUser = (user) =>{
    setUsers([...users, user])
  }

  const deleteUser = (name) =>{
    const newUser = users.filter(user => user.name !== name)
    setUsers(newUser)
  }

  return (
    <div>
      <div>
        <AddUsersItem addUser={addUser}/>
      </div>
      <div>
        <UsersList deleteUser={deleteUser} users={SearchUser} />
      </div>
    </div>
  );
}

export default App;
