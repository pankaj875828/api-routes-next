'use client'
import React, { useState } from 'react'
import '../style.css'

export default function newUser() {
    const [inputValue, setInputValue] = useState({
        name: '',
        age: '',
        email: ''
    })

    function handleChange(identifier, event) {
        setInputValue((prevValue) => {
            return {
                ...prevValue,
                [identifier]: event.target.value
            }
        })
    }

    async function handleAddUser() {
        const data = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify(inputValue)
        });
        const resData = await data.json();
        if (resData.success) {
            alert('add user created!')
        } else {
            alert('add user not created!')
        }
    }

    return (
        <div>
            <h2>Add User</h2>
            <input className='input-field' type="text" onChange={(event) => handleChange('name', event)} placeholder='Enter Name' name='name' />
            <input className='input-field' type="text" onChange={(event) => handleChange('email', event)} placeholder='Enter Email' name='email' />
            <input className='input-field' type="text" onChange={(event) => handleChange('age', event)} placeholder='Enter Age' name='age' />
            <button className='btn' onClick={handleAddUser}>Add User</button>
        </div>
    )
}
