import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import axios from 'axios';
import StudentList from '../components/StudentList';

function UserDashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/students', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudents(res.data);
      } catch (error) {
        alert('Error fetching students');
      }
    };
    fetchStudents();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <StudentList students={students} setStudents={setStudents} role="user" />
    </Box>
  );
}

export default UserDashboard;