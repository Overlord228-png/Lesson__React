import React from 'react'
import { useState } from 'react'

const FormAddPost = (props) => {

    const [formData, setFormData] = useState({title:'',body: ''})

    const addPostForm = () => {
        props.addPost({...formData})
        setFormData({title:'',body:''})
    }


    return (
        <div>
            <input 
                placeholder="Enter title" 
                onChange={(e)=>setFormData({...formData,title: e.target.value})}
                value={formData.title}    
            />
            
            <input 
                placeholder="Enter body" 
                onChange={(e)=>setFormData({...formData,body:e.target.value})}
                value={formData.body} 
            />


            <button type="Add" onClick={()=>addPostForm()} >Add</button>
        </div>
    )
}

export default FormAddPost