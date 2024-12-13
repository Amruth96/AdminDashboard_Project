import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReportsPage = () => {
  // Report data
  const reportData = [
    { name: 'January', sales: 4000, expenses: 2400 },
    { name: 'February', sales: 3000, expenses: 1398 },
    { name: 'March', sales: 2000, expenses: 9800 },
    { name: 'April', sales: 2780, expenses: 3908 },
    { name: 'May', sales: 1890, expenses: 4800 },
  ];

  const userData = [
    { id: 1, name: 'Ganesh', totalSales: 1500, orders: 30 },
    { id: 2, name: 'Krishna', totalSales: 2200, orders: 50 },
    { id: 3, name: 'Ram', totalSales: 2800, orders: 40 },
  ];

  // Function to handle the button click and show the alert
  const handleDownload = () => {
    alert("Download successful");
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <TopBar />
        <Grid container spacing={3} style={{ padding: '20px' }}>
          {/* Report Chart */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Monthly Sales vs Expenses
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={reportData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                    <Bar dataKey="expenses" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Report Table */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  User Sales Report
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>User Name</TableCell>
                        <TableCell>Total Sales</TableCell>
                        <TableCell>Orders</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {userData.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.totalSales}</TableCell>
                          <TableCell>{user.orders}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Button to download reports */}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" sx={{ padding: '10px 20px' }} onClick={handleDownload}>
              Download Reports
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ReportsPage;
