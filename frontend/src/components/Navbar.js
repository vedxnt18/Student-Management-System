import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Student Management System
        </Typography>
        {token && role === 'admin' && (
          <Button color="inherit" onClick={() => navigate('/admin')}>
            Admin Dashboard
          </Button>
        )}
        {token && role === 'user' && (
          <Button color="inherit" onClick={() => navigate('/user')}>
            User Dashboard
          </Button>
        )}
        {token ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" onClick={() => navigate('/')}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
  
}

export default Navbar;