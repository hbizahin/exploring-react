import { useEffect, useState } from "react";
export default function Users(){
    const [users, setUsers]  = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}

// 1. decleare a state to hold the data
// 2.useEffect with call back and dependency
// 3. use fetch to load the data