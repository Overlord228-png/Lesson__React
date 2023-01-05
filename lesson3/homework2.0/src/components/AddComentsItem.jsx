import React from 'react'
import { useState } from 'react'

const AddComentsItem = (props) => {
    const [formData, setFormData] = useState({title:"", body: ""})
    const addCommentForm = () => {
        props.addComment({...formData})
        setFormData({title: "", body: ""})
    }
    /*
    const btn = document.querySelector('btn')
    const input = document.querySelector('input')
    btn.onClick = (e) => {
        let find = false;
        for(let i = 0; i < addCommentForm.length; i++) {
            find = true;
            input.style.backgroundColor = 'red'
        }
        if (find === false) {
            if(!input.value.startsWith(' ')) {

            }
        }
    }
    */
    return (
        <div>
            <input placeholder="Enter title" onChange={(e)=>setFormData({...formData,name: e.target.value})} value={formData.name} className="input"/>
            <input placeholder="Enter body" onChange={(e)=>setFormData({...formData,body: e.target.value})} value={formData.body} className="input"/>
            <button type="Add" onClick={()=>addCommentForm()} className="btn">add</button>
        </div>
    )
}

export default AddComentsItem