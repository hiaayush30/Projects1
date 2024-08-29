/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useSingleUser } from '../context/SingleUserContext'
import HandleError from '../components/HandleError';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Progress from '../components/Progress';

const backgroundStyle = {
    backgroundImage: `url("../../github.jpeg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1
};

const SingleUser = () => {
    const theme = useTheme();
    const { url } = useSingleUser();
    const [user, setUser] = useState({})
    const [imgurl, setImgurl] = useState('');
    useEffect(() => {
        axios.get(url).then(response => {
            setUser(response.data);
            setImgurl(response.data.avatar_url)
        })
    }, [url])

    if (url.trim().length == 0) {
        return (
            <HandleError />
        )
    } else return (
        <div>
            <div style={backgroundStyle} className='min-h-screen flex justify-center items-center'>
                <div className='flex max-md:flex-col justify-center items-center rounded-lg'>
                    {imgurl.length == 0 ? <div className='m-5'><Progress /></div> :
                        <img src={imgurl} className='m-10 hover:shadow-black hover:shadow-2xl  hover:scale-110 transition-all rounded-lg max-md:max-h-64 max-h-96'></img>}
                    <div className='flex flex-col justify-start items-center'>
                        <div className='text-white text-3xl mb-3'>{user.name}</div>
                        {user.location && <div className='text-white text-3xl mb-3'>Lives in {user.location}</div>}
                        <div className='text-white text-3xl mb-3'>Github username: <span className='text-red-500'>{user.login}</span></div>
                        <div>
                            <Button variant="contained" color='success'><a target='_blank' href={user.html_url}>Github <GitHubIcon /></a></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUser
