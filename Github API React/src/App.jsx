/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css'
import SearchAppBar from './components/SearchAppBar'
import UserCard from './components/UserCard';
import { useUsersContext } from './context/UsersContext';
import Progress from './components/Progress'
import axios from 'axios';
import Button from '@mui/material/Button';

const backgroundStyle = {
  backgroundImage: `url("../bg3.jpg")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 1.0
};

function App() {
  const { users, setUsers } = useUsersContext();
  const [lastUserId, setLastUserId] = useState(0);

  useEffect(() => {
    try {
      axios.get('https://api.github.com/users?since=${lastUserId}&per_page=4').then(response => {
        setUsers(response.data);
        setLastUserId(response.data.length);
      })
    } catch (err) {
      console.log('Error fetching data::', err);
    }
  }, [])

  //pagination
  const fetchUsers = () => {
    try {
      axios.get(`https://api.github.com/users?since=${lastUserId}&per_page=4`).then(response => {
        setUsers([...users, ...response.data]);
      })
    } catch (err) {
      console.log('Error fetching data::', err);
    }
  }
  useEffect(() => {
    setLastUserId(id => users.length);
  }, [users, setUsers])

  return (
    <div className='min-h-screen bg-zinc-800' style={backgroundStyle}>
      <SearchAppBar />
      <div>
        {users.length == 0 && <Progress />}
      </div>
      <div className='flex flex-wrap justify-center'>
        {users.map(user => {
          return <UserCard user={user} key={user.id} />
        })
        }
      </div>
      <div className='text-center'>
        <Button size="small" color="primary" variant='contained' onClick={fetchUsers}>
          Load More...
        </Button>
      </div>
    </div>
  )
}

export default App
