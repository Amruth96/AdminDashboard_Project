import React, { useState } from 'react';
import { Button, TextField, Grid, Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const UserManagementPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ganesh', email: 'ganesh@gmail.com' },
    { id: 2, name: 'Krishna', email: 'krishna@gmail.com' },
  ]);
  const [open, setOpen] = useState(false); // To manage dialog visibility
  const [newUser, setNewUser] = useState({ name: '', email: '' }); // To manage new user input

  // Open the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the dialog
  const handleClose = () => {
    setOpen(false);
    setNewUser({ name: '', email: '' }); // Reset user input
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Handle Save button click
  const handleSave = () => {
    const newId = users.length + 1; // Simple ID generation
    const userToAdd = { ...newUser, id: newId };
    setUsers([...users, userToAdd]);
    setOpen(false);
    setNewUser({ name: '', email: '' }); // Reset the input fields
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <TopBar />
        <Grid container spacing={3} style={{ padding: '20px' }}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Add User
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        {/* Add User Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New User</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={newUser.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={newUser.email}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default UserManagementPage;
