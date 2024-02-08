import Link from 'next/link';
import React from 'react'
import '../style.css'
import Delete from '@/util/delete';

async function fetchUsers() {
    const data = await fetch('http://localhost:3000/api/users');
    const resData = await data.json();
    return resData.result
}

export default async function Users() {
    const users = await fetchUsers();
    return (
        <div>
            <h1>Users Page</h1>
            {
                users.map((user) => (
                    <div key={user.id} className='update-user'>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>&nbsp;
                        <Link href={`/users/${user.id}/update`}>Edit</Link>
                        <h2>
                            <Delete id={user.id} />
                        </h2>
                    </div>
                ))
            }
        </div>
    )
}
