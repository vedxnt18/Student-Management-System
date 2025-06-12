<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3 {
            color: #1a1a1a;
        }
        h1 {
            font-size: 2.5em;
            border-bottom: 2px solid #1a1a1a;
            padding-bottom: 10px;
        }
        h2 {
            font-size: 1.8em;
            margin-top: 20px;
        }
        h3 {
            font-size: 1.4em;
            margin-top: 15px;
        }
        ul, ol {
            margin: 10px 0;
            padding-left: 20px;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', Courier, monospace;
        }
        pre {
            background-color: #f4f4f4;
            padding: 15px;
            border-radius: 4px;
            overflow-x: auto;
            font-family: 'Courier New', Courier, monospace;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Student Management System</h1>
    <p>A full-stack web application for managing student records with role-based access control, a responsive dashboard, and a RESTful API. Built with <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>, this project implements a CRUD system with secure authentication using JSON Web Tokens (JWT).</p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#api-endpoints">API Endpoints</a></li>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#troubleshooting">Troubleshooting</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="features">Features</h2>
    <ul>
        <li><strong>Role-Based Access Control</strong>:
            <ul>
                <li><strong>Admin</strong>: Full CRUD (Create, Read, Update, Delete) operations for student records.</li>
                <li><strong>User</strong>: Read-only access to view student records.</li>
            </ul>
        </li>
        <li><strong>Responsive UI</strong>: Modern, mobile-friendly dashboard built with Material-UI.</li>
        <li><strong>Authentication</strong>: Secure user registration and login using JWT.</li>
        <li><strong>CRUD Operations</strong>: Manage student details (name, email, age, grade) via a RESTful API.</li>
        <li><strong>Dynamic Dashboards</strong>: Separate interfaces for admin and user roles.</li>
        <li><strong>Error Handling</strong>: Basic input validation and error messaging for user interactions and API requests.</li>
    </ul>

    <h2 id="tech-stack">Tech Stack</h2>
    <ul>
        <li><strong>Frontend</strong>:
            <ul>
                <li>React (v18.x)</li>
                <li>Material-UI (v5.x)</li>
                <li>Axios (for API requests)</li>
                <li>React Router (for navigation)</li>
            </ul>
        </li>
        <li><strong>Backend</strong>:
            <ul>
                <li>Node.js (v18.x or later)</li>
                <li>Express (v4.x)</li>
                <li>MongoDB (v6.x or later)</li>
                <li>Mongoose (v8.x)</li>
                <li>JSON Web Tokens (JWT) for authentication</li>
                <li>Bcrypt.js for password hashing</li>
            </ul>
        </li>
        <li><strong>Environment</strong>:
            <ul>
                <li>MongoDB (local or MongoDB Atlas)</li>
                <li>Node.js runtime</li>
            </ul>
        </li>
    </ul>

    <h2 id="project-structure">Project Structure</h2>
    <pre><code>
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
    </code></pre>

    <h2 id="installation">Installation</h2>
    <h3>Prerequisites</h3>
    <ul>
        <li><strong>Node.js</strong> (v18.x or later)</li>
        <li><strong>MongoDB</strong> (local installation or MongoDB Atlas account)</li>
        <li><strong>Git</strong> (to clone the repository)</li>
        <li><strong>npm</strong> (included with Node.js)</li>
    </ul>

    <h3>Steps</h3>
    <ol>
        <li><strong>Clone the Repository</strong>:
            <pre><code>git clone https://github.com/your-username/student-management-system.git
cd student-management-system</code></pre>
        </li>
        <li><strong>Set Up the Backend</strong>:
            <pre><code>cd backend
npm install</code></pre>
            <p>Create a <code>.env</code> file in the <code>backend</code> directory with the following content:</p>
            <pre><code>PORT=5000
MONGO_URI=mongodb://localhost:27017/student-management
JWT_SECRET=your_jwt_secret_key</code></pre>
            <ul>
                <li>Replace <code>MONGO_URI</code> with your MongoDB connection string (local or MongoDB Atlas).</li>
                <li>Replace <code>JWT_SECRET</code> with a secure, random string (e.g., a 32-character random string).</li>
            </ul>
        </li>
        <li><strong>Set Up the Frontend</strong>:
            <pre><code>cd ../frontend
npm install</code></pre>
        </li>
        <li><strong>Start MongoDB</strong>:
            <p>Ensure MongoDB is running locally:</p>
            <pre><code>mongod</code></pre>
            <p>Or configure a MongoDB Atlas cluster and update the <code>MONGO_URI</code> in <code>.env</code>.</p>
        </li>
        <li><strong>Run the Backend</strong>:
            <pre><code>cd backend
npm start</code></pre>
            <p>The backend server will start at <code>http://localhost:5000</code>.</p>
        </li>
        <li><strong>Run the Frontend</strong>:
            <p>In a new terminal:</p>
            <pre><code>cd frontend
npm start</code></pre>
            <p>The frontend will open in your browser at <code>http://localhost:3000</code>.</p>
        </li>
    </ol>

    <h2 id="usage">Usage</h2>
    <ol>
        <li><strong>Register Users</strong>:
            <ul>
                <li>Navigate to the home page (<code>/</code>) and register an <strong>admin</strong> user (e.g., username: <code>admin1</code>, password: <code>password</code>, role: <code>admin</code>).</li>
                <li>Register a <strong>user</strong> (e.g., username: <code>user1</code>, password: <code>password</code>, role: <code>user</code>).</li>
            </ul>
        </li>
        <li><strong>Log In</strong>:
            <ul>
                <li>Log in as an admin to access the Admin Dashboard (<code>/admin</code>).</li>
                <li>Log in as a user to access the User Dashboard (<code>/user</code>).</li>
            </ul>
        </li>
        <li><strong>Admin Actions</strong>:
            <ul>
                <li>Use the Admin Dashboard to add, edit, or delete students (e.g., name: <code>John Doe</code>, email: <code>john@example.com</code>, age: <code>20</code>, grade: <code>A</code>).</li>
                <li>Verify that the student list updates dynamically.</li>
            </ul>
        </li>
        <li><strong>User Actions</strong>:
            <ul>
                <li>Use the User Dashboard to view the student list (read-only, no edit/delete options).</li>
            </ul>
        </li>
        <li><strong>Test Responsiveness</strong>:
            <ul>
                <li>Resize the browser or test on a mobile device to confirm the UI adapts to different screen sizes.</li>
            </ul>
        </li>
    </ol>

    <h2 id="api-endpoints">API Endpoints</h2>
    <h3>Authentication</h3>
    <ul>
        <li><strong>POST</strong> <code>/api/auth/register</code>
            <p>Register a new user.</p>
            <p><strong>Body</strong>: <code>{ "username": "string", "password": "string", "role": "admin|user" }</code></p>
            <p><strong>Response</strong>: <code>{ "token": "jwt_token" }</code></p>
        </li>
        <li><strong>POST</strong> <code>/api/auth/login</code>
            <p>Log in a user.</p>
            <p><strong>Body</strong>: <code>{ "username": "string", "password": "string" }</code></p>
            <p><strong>Response</strong>: <code>{ "token": "jwt_token", "role": "admin|user" }</code></p>
        </li>
    </ul>

    <h3>Students (Protected Routes)</h3>
    <ul>
        <li><strong>POST</strong> <code>/api/students</code> (Admin only)
            <p>Create a new student.</p>
            <p><strong>Headers</strong>: <code>{ "Authorization": "Bearer &lt;token&gt;" }</code></p>
            <p><strong>Body</strong>: <code>{ "name": "string", "email": "string", "age": number, "grade": "string" }</code></p>
            <p><strong>Response</strong>: <code>{ "student": { ... } }</code></p>
        </li>
        <li><strong>GET</strong> <code>/api/students</code> (Admin/User)
            <p>Get all students.</p>
            <p><strong>Headers</strong>: <code>{ "Authorization": "Bearer &lt;token&gt;" }</code></p>
            <p><strong>Response</strong>: <code>[ { "student": { ... } }, ... ]</code></p>
        </li>
        <li><strong>PUT</strong> <code>/api/students/:id</code> (Admin only)
            <p>Update a student.</p>
            <p><strong>Headers</strong>: <code>{ "Authorization": "Bearer &lt;token&gt;" }</code></p>
            <p><strong>Body</strong>: <code>{ "name": "string", "email": "string", "age": number, "grade": "string" }</code></p>
            <p><strong>Response</strong>: <code>{ "student": { ... } }</code></p>
        </li>
        <li><strong>DELETE</strong> <code>/api/students/:id</code> (Admin only)
            <p>Delete a student.</p>
            <p><strong>Headers</strong>: <code>{ "Authorization": "Bearer &lt;token&gt;" }</code></p>
            <p><strong>Response</strong>: <code>{ "message": "Student deleted" }</code></p>
        </li>
    </ul>

    <h2 id="screenshots">Screenshots</h2>
    <p><em>Add screenshots to showcase the application. Example placeholders:</em></p>
    <ul>
        <li><strong>Login Page</strong>: <img src="screenshots/login.png" alt="Login Page"></li>
        <li><strong>Admin Dashboard</strong>: <img src="screenshots/admin-dashboard.png" alt="Admin Dashboard"></li>
        <li><strong>User Dashboard</strong>: <img src="screenshots/user-dashboard.png" alt="User Dashboard"></li>
    </ul>
    <p><em>To include screenshots, create a <code>screenshots</code> folder, add images, and update the links above.</em></p>

    <h2 id="troubleshooting">Troubleshooting</h2>
    <ul>
        <li><strong>MongoDB Connection Errors</strong>:
            <ul>
                <li>Ensure MongoDB is running locally or that the <code>MONGO_URI</code> in <code>.env</code> is correct.</li>
                <li>If you see deprecated warnings for <code>useNewUrlParser</code> or <code>useUnifiedTopology</code>, confirm that <code>config/db.js</code> does not include these options (fixed in the latest code).</li>
            </ul>
        </li>
        <li><strong>CORS Issues</strong>:
            <ul>
                <li>Verify that the backend allows CORS from <code>http://localhost:3000</code> (already configured in <code>server.js</code>).</li>
            </ul>
        </li>
        <li><strong>JWT Errors</strong>:
            <ul>
                <li>Ensure the <code>JWT_SECRET</code> in <code>.env</code> is set and matches across all requests.</li>
            </ul>
        </li>
        <li><strong>Dependencies</strong>:
            <ul>
                <li>Update dependencies if you encounter version conflicts:</li>
                <pre><code>cd backend
npm install mongoose@latest express@latest bcryptjs@latest jsonwebtoken@latest cors@latest dotenv@latest
cd ../frontend
npm install axios@latest react-router-dom@latest @mui/material@latest @emotion/react@latest @emotion/styled@latest</code></pre>
            </ul>
        </li>
    </ul>

    <h2 id="contributing">Contributing</h2>
    <p>Contributions are welcome! To contribute:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch (<code>git checkout -b feature/your-feature</code>).</li>
        <li>Make changes and commit (<code>git commit -m "Add your feature"</code>).</li>
        <li>Push to the branch (<code>git push origin feature/your-feature</code>).</li>
        <li>Open a Pull Request.</li>
    </ol>
    <p>Please follow the existing code style and include tests where applicable.</p>

    <h2 id="license">License</h2>
    <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
</body>
</html>