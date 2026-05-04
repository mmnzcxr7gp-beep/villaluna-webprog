import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'role', headerName: 'Role', flex: 0.5 },
  { field: 'status', headerName: 'Status', flex: 0.5 },
  { field: 'lastLogin', headerName: 'Last Login', flex: 1 },
];

const fallbackRows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-07-20' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', lastLogin: '2024-07-19' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Moderator', status: 'Inactive', lastLogin: '2024-07-15' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', lastLogin: '2024-07-21' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Admin', status: 'Active', lastLogin: '2024-07-22' },
  { id: 6, name: 'Admin', email: 'any@ex.com', role: 'Admin', status: 'Active', lastLogin: '2024-07-23' },
];

const UsersPage = () => {
  const [rows, setRows] = useState(fallbackRows);

  useEffect(() => {
    const loadUsers = () => {
      try {
        const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if (storedUsers.length > 0) {
          const mappedRows = storedUsers.map((u) => ({
            id: u.id,
            name: u.fullName || u.email.split('@')[0],
            email: u.email,
            role: u.role || 'User',
            status: 'Active',
            lastLogin: new Date().toISOString().split('T')[0],
          }));
          setRows(mappedRows);
        }
      } catch (error) {
        console.error('Error loading users:', error);
      }
    };

    loadUsers();

    const handleStorage = () => loadUsers();
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" mb={3}>
        Users Management
      </Typography>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              bgcolor: '#f5f5f5',
            },
            borderRadius: 2,
            boxShadow: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default UsersPage;
