import React from 'react'

async function fetchUser(id) {
    const data = await fetch(`http://localhost:3000/api/users/${id}`);
    const resData = await data.json();
    return resData.result
}

export default async function UserDetails({ params }) {
    const users = await fetchUser(params.userId)
    return (
        <div>
            <h1>User Details Page</h1>
            <h4>ID: {users.id}</h4>
            <h4>Name: {users.name}</h4>
            <h4>Age: {users.age}</h4>
            <h4>Email: {users.email}</h4>
        </div>
    )
}
