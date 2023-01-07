import React, { useState } from "react";

const AddUsersItem = (props) => {
    const [formData, setFormData] = useState({name: "" , username: "" , email: "" })
    const addUserFrom = () => {
        props.addUser({...formData})
        setFormData({name: "" , username: "" , email: "" })
    }
    return (
        <div>
            <input placeholder="Enter title" onChange={(e)=>setFormData({...formData,name: e.target.value})} value={formData.name} className="input"/>
            <input placeholder="Enter body" onChange={(e)=>setFormData({...formData,username: e.target.value})} value={formData.username} className="input"/>
            <input placeholder="Enter body" onChange={(e)=>setFormData({...formData,email: e.target.value})} value={formData.email} className="input"/>
            <button type="Add" onClick={()=>addUserFrom()} className="btn">Add</button>
        </div>
    )
}
export default AddUsersItem