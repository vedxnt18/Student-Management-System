# Student-Management-System
CRUD Admin-User Management System

<h3>A full-stack web application for managing student records with role-based access control, a responsive dashboard, and a RESTful API. Built with React, Node.js, Express, and MongoDB, this project implements a CRUD system with authentication using JSON Web Tokens (JWT).</h3>

<hr>

<h3>Features </h3>
Role-Based Access Control: 
<br>Admin: Can create, read, update, and delete (CRUD) student records.
<br>User: Can only view student records.
<br>Responsive UI: Built with Material-UI for a modern, mobile-friendly dashboard.
<br>Authentication: Secure user registration and login using JWT.
<br>CRUD Operations: Manage student records (name, email, age, grade) via a RESTful API.
<br>Dynamic Dashboard: Separate dashboards for admin and user roles.
<br>Error Handling: Basic validation and error messages for user inputs and API requests.

<hr>

<h3>Tech Stack</h3>
Frontend:
<br>React (v18.x)
<br>Material-UI (v5.x)
<br>Axios (for API requests)
<br>React Router (for navigation)
<br>Backend:
<br>Node.js (v18.x or later)
<br>Express (v4.x)
<br>MongoDB (v6.x or later)
<br>Mongoose (v8.x)
<br>JSON Web Tokens (JWT) for authentication
<br>Bcrypt.js for password hashing
<br>Environment:MongoDB (local or MongoDB Atlas)
<br>Node.js runtime

<hr>

<h2>Folder Structure </h2>
student-management-system/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection setup
│   ├── models/
│   │   ├── User.js            # User schema (username, password, role)
│   │   └── Student.js         # Student schema (name, email, age, grade)
│   ├── routes/
│   │   ├── auth.js            # Authentication routes (register, login)
│   │   └── student.js         # Student CRUD routes
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── .env                   # Environment variables
│   ├── server.js              # Express server entry point
│   └── package.json           # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js       # Login and registration form
│   │   │   ├── Navbar.js      # Navigation bar
│   │   │   ├── StudentForm.js # Form for creating/updating students
│   │   │   └── StudentList.js # Table to display students
│   │   ├── pages/
│   │   │   ├── Home.js        # Home page (login/register)
│   │   │   ├── AdminDashboard.js # Admin dashboard
│   │   │   └── UserDashboard.js  # User dashboard
│   │   ├── App.js             # Main app with routing
│   │   ├── App.css            # Basic styles
│   │   └── index.js           # React entry point
│   └── package.json           # Frontend dependencies
├── README.md                  # Project documentation

<hr>

<h2>Usage</h2>
1.Register Users:
<br><br>Navigate to the home page (/) and register an admin user (e.g., username: admin1, password: password, role: admin).
<br><br>Register a user (e.g., username: user1, password: password, role: user).
2.Log In:
<br><br>Log in as an admin to access the Admin Dashboard (/admin).
<br><br>Log in as a user to access the User Dashboard (/user).
3.Admin Actions:
<br><br>Use the Admin Dashboard to add, edit, or delete students (e.g., name: John Doe, email: john@example.com, age: 20, grade: A).
<br><br>Verify that the student list updates dynamically.
4.User Actions:
<br><br>Use the User Dashboard to view the student list (read-only, no edit/delete options).
5.Test Responsiveness:
<br><br>Resize the browser or test on a mobile device to confirm the UI adapts to different screen sizes.

<hr>
