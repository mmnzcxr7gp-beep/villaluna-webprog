import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  MenuItem,
  Stack,
} from "@mui/material";
import backgroundImage from "../../assets/styles/oopsiedy-background.jpg";
import UserService from "../../services/UserService";

const defaultForm = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  type: "viewer",
  username: "",
  password: "",
  address: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation (mirrors UsersPage rules).
    if (formData.password.length < 8) {
      setErrorMsg("Password must be at least 8 characters.");
      return;
    }
    if (!/^\d{11}$/.test(formData.contactNumber)) {
      setErrorMsg("Contact number must be exactly 11 digits.");
      return;
    }
    if (!/^\d+$/.test(formData.age)) {
      setErrorMsg("Age must contain numbers only.");
      return;
    }
    if (/\s/.test(formData.username)) {
      setErrorMsg("Username must not contain spaces.");
      return;
    }

    try {
      setLoading(true);
      await UserService.createUser({
        ...formData,
        age: Number(formData.age),
      });
      setSuccessMsg("Account created successfully. You can now sign in.");
      setTimeout(() => {
        navigate("/auth/signin", { replace: true });
      }, 1200);
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to create account.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 6,
        px: 2,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
            Create Account
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
            Fill in your details to register
          </Typography>

          {successMsg && <Alert severity="success" sx={{ mb: 2 }}>{successMsg}</Alert>}
          {errorMsg && <Alert severity="error" sx={{ mb: 2 }}>{errorMsg}</Alert>}

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} required fullWidth />
                <TextField name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} required fullWidth />
              </Stack>

              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField name="age" label="Age" type="number" value={formData.age} onChange={handleChange} required fullWidth />
                <TextField select name="gender" label="Gender" value={formData.gender} onChange={handleChange} required fullWidth>
                  <MenuItem value="male">male</MenuItem>
                  <MenuItem value="female">female</MenuItem>
                  <MenuItem value="other">other</MenuItem>
                </TextField>
              </Stack>

              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField name="contactNumber" label="Contact Number" value={formData.contactNumber} onChange={handleChange} required fullWidth />
                <TextField name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required fullWidth />
              </Stack>

              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField select name="type" label="User Type" value={formData.type} onChange={handleChange} required fullWidth>
                  <MenuItem value="admin">admin</MenuItem>
                  <MenuItem value="editor">editor</MenuItem>
                  <MenuItem value="viewer">viewer</MenuItem>
                </TextField>
                <TextField name="username" label="Username" value={formData.username} onChange={handleChange} required fullWidth />
              </Stack>

              <TextField name="password" label="Password" type="password" value={formData.password} onChange={handleChange} required fullWidth />
              <TextField name="address" label="Address" value={formData.address} onChange={handleChange} required fullWidth multiline minRows={2} />

              <Button type="submit" variant="contained" disabled={loading} sx={{ py: 1.3 }}>
                {loading ? "Creating Account..." : "Sign Up"}
              </Button>
            </Stack>
          </Box>

          <Typography variant="body2" color="text.secondary" textAlign="center" mt={3}>
            Already have an account?{" "}
            <Link to="/auth/signin" style={{ color: "#b45309", fontWeight: 600 }}>
              Sign In
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
