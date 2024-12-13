import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UserManagementPage from './pages/UserManagementPage';
import ReportsPage from './pages/ReportsPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/users" element={<UserManagementPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/reports" element={<ReportsPage />} />
    </Routes>
  );
}

export default App;
