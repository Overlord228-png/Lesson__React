import React from "react";

const UsersList = (props) => {
    return (
        <div className="">
            {
                props.users.map((user,idx)=>
                    <div key={idx}>
                        <h2>{idx+1}{user.name}</h2>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <button type="" onClick={()=>props.deleteUser(user.name)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}
export default UsersList