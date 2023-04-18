import React, { useState, useEffect } from 'react'
import facade from '../apiFacade'

const LoggedIn = ({user}) => {
    const [dataFromServer, setDataFromServer] = useState("Loading...")
      
    useEffect(() => { 
        const url = user.roles.split(',').includes('user') ? '/api/info/user' : '/api/info/admin';
        facade.fetchData(url).then(data=> setDataFromServer(data.msg));
    }, [])
      
    return (
        <div>
            <h2>Data Received from server</h2>
            <h3>{dataFromServer}</h3>
            <h4>{user.name} with roles: {user.roles}</h4>
        </div>
    )
}

export default LoggedIn
