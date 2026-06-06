import { useEffect, useMemo, useState } from 'react';
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
  Alert,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import UserService from '../services/UserService';

const defaultForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  type: 'viewer',
  username: '',
  password: '',
  address: '',
};

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [alertMsg, setAlertMsg] = useState({ type: '', text: '' });

  const fetchUsers = async () => {
    try {
      const data = await UserService.getUsers();
      setUsers(data);
    } catch (error) {
      setAlertMsg({ type: 'error', text: 'Failed to load users.' });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const validateForm = (values) => {
    const nextErrors = {};
    const requiredFields = [
      'firstName', 'lastName', 'age', 'gender',
      'contactNumber', 'email', 'type', 'username',
      (!isEditMode ? 'password' : null), 'address',
    ].filter(Boolean);

    requiredFields.forEach((field) => {
      if (!values[field]?.toString().trim()) {
        nextErrors[field] = 'This field is required.';
      }
    });

    if (values.password && values.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }
    if (values.contactNumber && !/^\d{11}$/.test(values.contactNumber)) {
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits.';
    }
    if (values.age && !/^\d+$/.test(values.age)) {
      nextErrors.age = 'Age must contain numbers only.';
    }
    if (values.username && /\s/.test(values.username)) {
      nextErrors.username = 'Username must not contain spaces.';
    }

    return nextErrors;
  };

  const handleOpenAdd = () => {
    setIsEditMode(false);
    setSelectedId(null);
    setFormData(defaultForm);
    setErrors({});
    setAlertMsg({ type: '', text: '' });
    setOpenDialog(true);
  };

  const handleOpenEdit = (user) => {
    setIsEditMode(true);
    setSelectedId(user._id);
    setFormData({
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      age: user.age || '',
      gender: user.gender || '',
      contactNumber: user.contactNumber || '',
      email: user.email || '',
      type: user.type || 'viewer',
      username: user.username || '',
      password: '',
      address: user.address || '',
    });
    setErrors({});
    setAlertMsg({ type: '', text: '' });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSaveUser = async () => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);
      const payload = {
        ...formData,
        age: Number(formData.age),
      };
      if (isEditMode) {
        await UserService.updateUser(selectedId, payload);
      } else {
        await UserService.createUser(payload);
      }
      setOpenDialog(false);
      fetchUsers();
    } catch (error) {
      const msg = error?.response?.data?.message || 'Failed to save user.';
      setAlertMsg({ type: 'error', text: msg });
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    return users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const matchesSearch =
        !search ||
        user.firstName?.toLowerCase().includes(search) ||
        user.lastName?.toLowerCase().includes(search) ||
        user.email?.toLowerCase().includes(search) ||
        user.username?.toLowerCase().includes(search) ||
        fullName.includes(search);

      const matchesType = !typeFilter || user.type === typeFilter;
      const matchesGender = !genderFilter || user.gender === genderFilter;
      const matchesStatus = !statusFilter || user.status === statusFilter;

      return matchesSearch && matchesType && matchesGender && matchesStatus;
    });
  }, [users, searchTerm, typeFilter, genderFilter, statusFilter]);

  const columns = [
    {
      field: 'fullName',
      headerName: 'Full Name',
      minWidth: 180,
      flex: 1,
      valueGetter: (_, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    { field: 'username', headerName: 'Username', minWidth: 130, flex: 0.8 },
    { field: 'email', headerName: 'Email', minWidth: 220, flex: 1.3 },
    { field: 'type', headerName: 'User Type', minWidth: 110, flex: 0.7 },
    { field: 'gender', headerName: 'Gender', minWidth: 100, flex: 0.6 },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 110,
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
      minWidth: 200,
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" onClick={() => handleOpenEdit(params.row)}>
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color={params.row.status === 'active' ? 'warning' : 'success'}
            onClick={async () => {
              const nextStatus = params.row.status === 'active' ? 'inactive' : 'active';
              try {
                await UserService.updateUser(params.row._id, { status: nextStatus });
                fetchUsers();
              } catch {
                setAlertMsg({ type: 'error', text: 'Failed to update status.' });
              }
            }}
          >
            {params.row.status === 'active' ? 'Disable' : 'Enable'}
          </Button>
        </Stack>
      ),
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
                Manage user records with search, filters, and quick actions.
              </Typography>
            </Box>
            <Button variant="contained" onClick={handleOpenAdd}>
              Add User
            </Button>
          </Stack>

          {alertMsg.text && (
            <Alert severity={alertMsg.type} sx={{ mb: 2 }}>
              {alertMsg.text}
            </Alert>
          )}

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} mb={2}>
            <TextField
              fullWidth
              label="Search by name, email, or username"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <TextField
              select
              label="User Type"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              sx={{ minWidth: 140 }}
            >
              <MenuItem value="">All Types</MenuItem>
              <MenuItem value="admin">admin</MenuItem>
              <MenuItem value="editor">editor</MenuItem>
              <MenuItem value="viewer">viewer</MenuItem>
            </TextField>
            <TextField
              select
              label="Gender"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              sx={{ minWidth: 130 }}
            >
              <MenuItem value="">All Genders</MenuItem>
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
              <MenuItem value="other">other</MenuItem>
            </TextField>
            <TextField
              select
              label="Status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              sx={{ minWidth: 130 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="active">active</MenuItem>
              <MenuItem value="inactive">inactive</MenuItem>
            </TextField>
          </Stack>

          <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={filteredUsers}
              getRowId={(row) => row._id}
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
                label="User Type"
                fullWidth
                value={formData.type}
                onChange={(e) => handleFormChange('type', e.target.value)}
                error={Boolean(errors.type)}
                helperText={errors.type}
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
              helperText={isEditMode ? 'Leave blank to keep current password' : errors.password}
            />

            <TextField
              label="Address"
              fullWidth
              value={formData.address}
              onChange={(e) => handleFormChange('address', e.target.value)}
              error={Boolean(errors.address)}
              helperText={errors.address}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveUser} disabled={loading}>
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UsersPage;
