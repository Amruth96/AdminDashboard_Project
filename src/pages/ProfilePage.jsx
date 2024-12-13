import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Amruth',
    email: 'amruth@gmail.com',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    alert('Profile saved successfully!');
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
        <Container>
          <Typography variant="h4" gutterBottom>
            User Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{ padding: '10px 20px' }}
              >
                Save Profile
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};


export default ProfilePage;
