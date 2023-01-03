import React from "react"
import { useState } from "react"


const AddComentsItem = (props) => {

    const [FromData, setFromData] = useState({title: "", body: ""})

    const addComentsItem = () =>{
        props.addComents({...FromData})
        setFromData({title: "", body: ""})
    }

    return(
        <div className="">
            <input value="" />
            <input value="" />
            <button type="Add" onClick={()=>addComentsItem()} className="btn__add">Add</button>
        </div>
    )
}
export default AddComentsItem