import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import axios from 'axios';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';

function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

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
        Admin Dashboard
      </Typography>
      <StudentForm
        student={editingStudent}
        setStudents={setStudents}
        students={students}
        setEditingStudent={setEditingStudent}
      />
      <StudentList
        students={students}
        setStudents={setStudents}
        setEditingStudent={setEditingStudent}
        role="admin"
      />
    </Box>
  );
}

export default AdminDashboard;