import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import Widgets from '../components/Widgets';
import { Box, Container } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
        <Container>
          <Widgets />
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardPage;
