import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      navigate(res.data.role === 'admin' ? '/admin' : '/user');
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
        role,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', role);
      navigate(role === 'admin' ? '/admin' : '/user');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Login / Register
      </Typography>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Role"
        select
        SelectProps={{ native: true }}
        fullWidth
        margin="normal"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </TextField>
      <Button variant="contained" onClick={handleLogin} sx={{ mt: 2, mr: 2 }}>
        Login
      </Button>
      <Button variant="outlined" onClick={handleRegister} sx={{ mt: 2 }}>
        Register
      </Button>
    </Box>
  );
}

export default Login;