import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TopBar = ({ onMenuClick }) => {
    const navigate = useNavigate()
    const handleprofile =()=>{
        navigate('/profile')
    }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
          <Menu />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Button onClick={handleprofile} color="inherit">Profile</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
