import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Alert 
} from '@mui/material';
import backgroundImage from "../../assets/styles/OOPSIEDAISY BACKGROUND.jpg";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setSuccessMsg('');
      try {
        // Fake signup delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Save user to fake db
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const newUser = { id: Date.now(), ...formData, role: 'user' };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        // Auto login
        localStorage.setItem('token', 'fake-jwt-' + Date.now());
        localStorage.setItem('user', JSON.stringify(newUser));
        setSuccessMsg('Account created and logged in!');
        setTimeout(() => {
          navigate('/dashboard/users', { replace: true });
        }, 1500);
      } catch (error) {
        console.error('Signup error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 8,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: 400,
            width: '100%',
            mx: 'auto',
          }}
        >
<Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom fontWeight="bold" color="text.primary">
              Create Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sign up to get started
            </Typography>
          </Box>

          {successMsg && (
            <Alert severity="success" sx={{ mb: 2 }}>{successMsg}</Alert>
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              placeholder="Enter your full name"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.fullName ? 'error.main' : '#f59e0b',
                },
              }}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              placeholder="Enter your email"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.email ? 'error.main' : '#f59e0b',
                },
              }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              placeholder="Create a password (min. 6 characters)"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.password ? 'error.main' : '#f59e0b',
                },
              }}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              placeholder="Confirm your password"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: errors.confirmPassword ? 'error.main' : '#f59e0b',
                },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                borderRadius: 2,
                bgcolor: '#b45309',
                '&:hover': {
                  bgcolor: '#92400e',
                },
                boxShadow: 2,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
              }}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </Button>
          </Box>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{' '}
              <Link
                to="/signin"
                style={{ textDecoration: 'none', color: '#b45309', fontWeight: 600 }}
              >
                Sign In
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUpPage;

