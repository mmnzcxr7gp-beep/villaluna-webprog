import React, { useMemo, useState } from 'react';
import usersJson from '../assets/users.json';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  TextField,
  MenuItem,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const defaultForm = {
  id: null,
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  role: '',
  username: '',
  password: '',
  address: '',
  status: 'active',
};

const UsersPage = () => {
  // Main users state loaded from users.json.
  const [users, setUsers] = useState(usersJson);

  // Search and filter states.
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Dialog/form states.
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState({});

  const validateForm = (values) => {
    const nextErrors = {};

    // Required fields check.
    const requiredFields = [
      'firstName',
      'lastName',
      'age',
      'gender',
      'contactNumber',
      'email',
      'role',
      'username',
      'password',
      'address',
    ];

    requiredFields.forEach((field) => {
      if (!values[field]?.toString().trim()) {
        nextErrors[field] = 'This field is required.';
      }
    });

    // Password: at least 8 characters.
    if (values.password && values.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    // Contact number: exactly 11 digits.
    if (values.contactNumber && !/^\d{11}$/.test(values.contactNumber)) {
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits.';
    }

    // Age: numbers only.
    if (values.age && !/^\d+$/.test(values.age)) {
      nextErrors.age = 'Age must contain numbers only.';
    }

    // Username: no spaces.
    if (values.username && /\s/.test(values.username)) {
      nextErrors.username = 'Username must not contain spaces.';
    }

    return nextErrors;
  };

  const handleOpenAddDialog = () => {
    setIsEditMode(false);
    setFormData(defaultForm);
    setErrors({});
    setOpenDialog(true);
  };

  const handleOpenEditDialog = (selectedUser) => {
    setIsEditMode(true);
    setFormData(selectedUser);
    setErrors({});
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveUser = () => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    if (isEditMode) {
      // Update existing user.
      setUsers((prev) => prev.map((u) => (u.id === formData.id ? { ...formData } : u)));
    } else {
      // Add new user with next id.
      const nextId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
      setUsers((prev) => [...prev, { ...formData, id: nextId }]);
    }

    setOpenDialog(false);
  };

  const handleToggleStatus = (selectedUser) => {
    const nextStatus = selectedUser.status === 'active' ? 'inactive' : 'active';
    setUsers((prev) => prev.map((u) => (u.id === selectedUser.id ? { ...u, status: nextStatus } : u)));
  };

  // Filter users instantly while typing and selecting filters.
  const filteredUsers = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const matchesSearch =
        !search ||
        user.firstName.toLowerCase().includes(search) ||
        user.lastName.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search) ||
        user.username.toLowerCase().includes(search) ||
        fullName.includes(search);

      const matchesRole = !roleFilter || user.role === roleFilter;
      const matchesGender = !genderFilter || user.gender === genderFilter;
      const matchesStatus = !statusFilter || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesGender && matchesStatus;
    });
  }, [users, searchTerm, roleFilter, genderFilter, statusFilter]);

  const columns = [
    { field: 'id', headerName: 'ID', minWidth: 70, flex: 0.4 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      minWidth: 180,
      flex: 1,
      valueGetter: (_, row) => `${row.firstName} ${row.lastName}`,
    },
    { field: 'username', headerName: 'Username', minWidth: 130, flex: 0.8 },
    { field: 'email', headerName: 'Email', minWidth: 220, flex: 1.3 },
    { field: 'role', headerName: 'Role', minWidth: 120, flex: 0.7 },
    { field: 'gender', headerName: 'Gender', minWidth: 120, flex: 0.7 },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 120,
      flex: 0.7,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'active' ? 'success' : 'default'}
          size="small"
          sx={{ textTransform: 'capitalize' }}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 220,
      flex: 1.2,
      sortable: false,
      renderCell: (params) => {
        const row = params.row;
        return (
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="outlined" onClick={() => handleOpenEditDialog(row)}>
              Edit
            </Button>
            <Button
              size="small"
              variant="contained"
              color={row.status === 'active' ? 'warning' : 'success'}
              onClick={() => handleToggleStatus(row)}
            >
              {row.status === 'active' ? 'Disable' : 'Enable'}
            </Button>
          </Stack>
        );
      },
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: '#f8fafc', minHeight: '100vh' }}>
      <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={2}
            mb={3}
          >
            <Box>
              <Typography variant="h4" fontWeight={700} color="primary.main">
                User Management
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage users, search records, apply filters, and update account status.
              </Typography>
            </Box>

            <Button variant="contained" onClick={handleOpenAddDialog}>
              Add User
            </Button>
          </Stack>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mb={2}>
            <TextField
              fullWidth
              label="Search by first name, last name, email, or username"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <TextField
              select
              label="Role"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              sx={{ minWidth: 160 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="admin">admin</MenuItem>
              <MenuItem value="editor">editor</MenuItem>
              <MenuItem value="viewer">viewer</MenuItem>
            </TextField>

            <TextField
              select
              label="Gender"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              sx={{ minWidth: 160 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
              <MenuItem value="other">other</MenuItem>
            </TextField>

            <TextField
              select
              label="Status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              sx={{ minWidth: 160 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="active">active</MenuItem>
              <MenuItem value="inactive">inactive</MenuItem>
            </TextField>
          </Stack>

          <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10, 20]}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 10, page: 0 },
                },
              }}
              sx={{
                borderRadius: 2,
                '& .MuiDataGrid-columnHeaders': {
                  bgcolor: '#eff6ff',
                },
              }}
            />
          </Box>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>{isEditMode ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                label="First Name"
                fullWidth
                value={formData.firstName}
                onChange={(e) => handleFormChange('firstName', e.target.value)}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />
              <TextField
                label="Last Name"
                fullWidth
                value={formData.lastName}
                onChange={(e) => handleFormChange('lastName', e.target.value)}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
              />
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                label="Age"
                fullWidth
                value={formData.age}
                onChange={(e) => handleFormChange('age', e.target.value)}
                error={Boolean(errors.age)}
                helperText={errors.age}
              />
              <TextField
                select
                label="Gender"
                fullWidth
                value={formData.gender}
                onChange={(e) => handleFormChange('gender', e.target.value)}
                error={Boolean(errors.gender)}
                helperText={errors.gender}
              >
                <MenuItem value="male">male</MenuItem>
                <MenuItem value="female">female</MenuItem>
                <MenuItem value="other">other</MenuItem>
              </TextField>
            </Stack>

            <TextField
              label="Contact Number"
              fullWidth
              value={formData.contactNumber}
              onChange={(e) => handleFormChange('contactNumber', e.target.value)}
              error={Boolean(errors.contactNumber)}
              helperText={errors.contactNumber}
            />

            <TextField
              label="Email"
              fullWidth
              value={formData.email}
              onChange={(e) => handleFormChange('email', e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                select
                label="Role"
                fullWidth
                value={formData.role}
                onChange={(e) => handleFormChange('role', e.target.value)}
                error={Boolean(errors.role)}
                helperText={errors.role}
              >
                <MenuItem value="admin">admin</MenuItem>
                <MenuItem value="editor">editor</MenuItem>
                <MenuItem value="viewer">viewer</MenuItem>
              </TextField>

              <TextField
                label="Username"
                fullWidth
                value={formData.username}
                onChange={(e) => handleFormChange('username', e.target.value)}
                error={Boolean(errors.username)}
                helperText={errors.username}
              />
            </Stack>

            <TextField
              label="Password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={(e) => handleFormChange('password', e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />

            <TextField
              label="Address"
              fullWidth
              value={formData.address}
              onChange={(e) => handleFormChange('address', e.target.value)}
              error={Boolean(errors.address)}
              helperText={errors.address}
            />

            <FormControlLabel
              control={
                <Switch
                  checked={formData.status === 'active'}
                  onChange={(e) => handleFormChange('status', e.target.checked ? 'active' : 'inactive')}
                />
              }
              label="Active Status"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveUser}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UsersPage;
