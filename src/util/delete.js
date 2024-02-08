'use client'
import React from 'react'

export default function Delete({ id }) {
    async function handleDeleteUser() {
        const data = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE"
        })
        const resData = await data.json();
        if (resData.success) {
            alert('delete user successfully')
        } else {
            alert('user not deleted!!')
        }
    }
    return (
        <button onClick={handleDeleteUser}>Delete</button>
    )
}
