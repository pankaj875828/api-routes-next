'use client'
import React, { useEffect, useState } from 'react'
import '../../../style.css'

export default function updateUser({ params }) {
    const id = params.userId
    const [inputValue, setInputValue] = useState({})

    async function fetchUser(id) {
        const data = await fetch(`http://localhost:3000/api/users/${id}`);
        const resData = await data.json();
        return resData.result
    }

    useEffect(() => {
        async function getUser() {
            const user = await fetchUser(id);
            setInputValue(user)
        }
        getUser();
    }, [])

    function handleChange(identifier, event) {
        setInputValue((prevValue) => {
            return {
                ...prevValue,
                [identifier]: event.target.value
            }
        })
    }

    async function handleUpdateUser() {
        const data = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(inputValue)
        });
        const resData = await data.json();
        if (resData.success) {
            alert('update user successfully!')
        } else {
            alert('update user not successs!!')
        }
    }

    return (
        <div>
            <h2>Update User</h2>
            <input className='input-field' defaultValue={inputValue.name} type="text" onChange={(event) => handleChange('name', event)} placeholder='Enter Name' name='name' />
            <input className='input-field' defaultValue={inputValue.email} type="text" onChange={(event) => handleChange('email', event)} placeholder='Enter Email' name='email' />
            <input className='input-field' defaultValue={inputValue.age} type="text" onChange={(event) => handleChange('age', event)} placeholder='Enter Age' name='age' />
            <button className='btn' onClick={handleUpdateUser}>Update User</button>
        </div>
    )
}
