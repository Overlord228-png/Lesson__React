import React from 'react'
import { useState } from 'react'

const AddPost = (props) => {

    const [formData, setFormData] = useState({title:"", body: ""})

    const addPostForm = () => {
        props.addPost({...formData})
        setFormData({title: "", body: ""})
    }

    return(
        <div>
            <input placeholder="Enter title" onChange={(e)=>setFormData({...formData,title: e.target.value})} value={formData.title} className="input" />
            <input placeholder="Enter body" onChange={(e)=>setFormData({...formData,body: e.target.value})} value={formData.body}   className="input" />
            <button type="Add" onClick={()=>addPostForm()} className="btn__add">Add</button>
        </div>
    )
}

export default AddPost