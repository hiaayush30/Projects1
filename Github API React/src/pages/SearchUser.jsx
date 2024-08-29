/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import SearchAppBar from '../components/SearchAppBar'
import { useUsersContext } from '../context/UsersContext';
import UserCard from '../components/UserCard';
import axios from 'axios';


const SearchUser = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState([]);
    const [input, setInput] = useState('');
    const handleInput = (e) => {
        setInput(e.target.value);
    }
    useEffect(() => {
        try {
            axios.get(`https://api.github.com/users`).then(response => {
                setUsers(response.data);
            })
        } catch (err) {
            console.log('Error fetching data::', err);
        }
    }, [])
    useEffect(() => {
        const customUsers = users.filter((user) => {
            return user.login.includes(input.toLowerCase());
        })
        setSearch(customUsers)
    }, [input])
    return (
        <div className='text-white min-h-screen' style={{ backgroundImage: 'url("../../bg3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <SearchAppBar />
            <div className='flex justify-center items-start mt-10'>
                <input value={input} onChange={handleInput} type='text' placeholder='Search User...' className='py-3 px-3 rounded-xl outline-none text-black focus:outline-blue-500'></input>
            </div>
            {search.length == 0 && input.trim().length != 0 && <div className='text-center mt-10 opacity-75'>No matches found!</div>}
            {search.length == 0 && input.trim().length == 0 && <div className='text-center mt-10 opacity-75'>Search to show results!</div>}
            <div className='flex flex-wrap justify-center'>
                {search.map(user => {
                    return <UserCard user={user} key={user.id} />
                })}
            </div>
        </div>
    )
}

export default SearchUser
