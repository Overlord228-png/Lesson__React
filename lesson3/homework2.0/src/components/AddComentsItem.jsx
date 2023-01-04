import React from "react"
import { useState } from "react"


const AddComentsItem = (props) => {

    const [FromData, setFromData] = useState({title: "", body: ""})

    const addComentsFrom = () =>{
        props.addComentsItem({...FromData})
        setFromData({title: "", body: ""})
    }

    return(
        <div className="">
            <input placeholder="Enter title" onChange={(e)=>setFromData({...FromData,body: e.target.value})} value={FormData.body} className="input" />
            <input placeholder="Enter body" onChange={(e)=>setFromData({...FromData,body: e.target.value})} value={FormData.body} className="input" />
            <button type="Add" onClick={()=>addComentsFrom()} className="btn__add">Add</button>
        </div>
    )
}
export default AddComentsItem