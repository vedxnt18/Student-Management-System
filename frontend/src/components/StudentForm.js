import { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

function StudentForm({ student, setStudents, students }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    grade: '',
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      if (student) {
        // Update student
        const res = await axios.put(
          `http://localhost:5000/api/students/${student._id}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setStudents(students.map((s) => (s._id === student._id ? res.data : s)));
      } else {
        // Create student
        const res = await axios.post('http://localhost:5000/api/students', formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudents([...students, res.data]);
      }
      setFormData({ name: '', email: '', age: '', grade: '' });
    } catch (error) {
      alert('Error saving student');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          {student ? 'Update' : 'Add'} Student
        </Button>
      </form>
    </Box>
  );
}

export default StudentForm;