import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import backgroundImage from "../../assets/styles/oopsiedy-background.jpg";
import UserService from "../../services/UserService";
import { STORAGE_KEYS } from "../../constants";

const Login = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = await UserService.login(formData);

      // Store required auth data in localStorage.
      localStorage.setItem(STORAGE_KEYS.token, data.token);
      localStorage.setItem(STORAGE_KEYS.type, data.user.type);
      localStorage.setItem(STORAGE_KEYS.firstName, data.user.firstName);

      // Role-based redirect behavior.
      if (data.user.type === "admin") {
        navigate("/dashboard/users", { replace: true });
      } else if (data.user.type === "editor") {
        navigate("/dashboard/articles", { replace: true });
      } else {
        // Safety fallback (backend already blocks viewer login).
        setErrorMsg("Viewer accounts are not allowed to log in.");
      }
    } catch (error) {
      const message =
        error?.response?.data?.message || "Login failed. Please try again.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 8,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: 420,
            width: "100%",
            mx: "auto",
          }}
        >
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
            Welcome Back
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center" mb={3}>
            Sign in to your account
          </Typography>

          {errorMsg && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMsg}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
            <TextField
              name="usernameOrEmail"
              label="Username or Email"
              value={formData.usernameOrEmail}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" disabled={loading} sx={{ py: 1.3 }}>
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </Box>

          <Typography variant="body2" color="text.secondary" textAlign="center" mt={3}>
            Don't have an account?{" "}
            <Link to="/auth/signup" style={{ color: "#b45309", fontWeight: 600 }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
