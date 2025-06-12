import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';

function StudentList({ students, setStudents, setEditingStudent, role }) {
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`, {
        headers: { Authorization: `Bearer ${token} `},
      });
      setStudents(students.filter((student) => student._id !== id));
    } catch (error) {
      alert('Error deleting student');
    }
  };

  return (
    <Table sx={{ maxWidth: 800, mx: 'auto', mt: 5 }}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Grade</TableCell>
          {role === 'admin' && <TableCell>Actions</TableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student._id}>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.age}</TableCell>
            <TableCell>{student.grade}</TableCell>
            {role === 'admin' && (
              <TableCell>
                <Button onClick={() => setEditingStudent(student)} color="primary">
                  Edit
                </Button>
                <Button onClick={() => handleDelete(student._id)} color="secondary">
                  Delete
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default StudentList;