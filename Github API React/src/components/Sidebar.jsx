/* eslint-disable no-unused-vars */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div className='bg-blue-300 min-h-screen'>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Search Users'].map((text, index) => (
          <NavLink key={text} to={index === 0 ? '/' : '/search'}>
            <ListItem key={text} disablePadding></ListItem>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon /> : <SearchIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </NavLink>
        ))}
      </List>
      <Divider />
    </Box>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon color='warning' /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)} className='opacity-95'>
        {DrawerList}
      </Drawer>
    </div>
  );
}