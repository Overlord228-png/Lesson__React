import React, { useState , useMemo } from "react";

const SearchUser = () => {
    // == поиск по имени === //
    const [ search, setSearches ] = useState('')
    const [ users , setUsers ] = useState([])

    const searchName = () => {
        let newUserItem = [];
        for(const user of users) {
            console.log("good")
            if(user.name.startsWith(search)){
                newUserItem.push(user)
            }
        }
        return newUserItem
    }
    const searchedUsers = useMemo(searchName, [search, users])
    return(
        <div>
            <input onChange={(e)=>setSearches(e.target.value)} placeholder="search" value={search} user={searchedUsers}/>
        </div>
    )
}
export default SearchUser