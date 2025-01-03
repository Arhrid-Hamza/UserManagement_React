// src/App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./composants/Home";
import Login from "./composants/Login";
import AdminDashboard from "./composants/AdminDashboard"; 
import UserDashboard from "./composants/UserDashboard"; 
import Userlist from "./composants/Userlist";
import AddUser from "./composants/AddUser";
import UpdateUser  from "./composants/Updateuser";
import EmployeeList from "./composants/EmployeeList";
import AddEmployee from "./composants/AddEmployee";
import UpdateEmployee from "./composants/UpdateEmployee";
import DepartmentList from "./composants/DepartmentList";
import AddDepartment from "./composants/AddDepartment";
import UpdateDepartment from "./composants/UpdateDepartment";
import ProjectList from "./composants/ProjectList";
import AddProject from "./composants/AddProject";
import UpdateProject from "./composants/UpdateProject";
import Reports from "./composants/Reports";
import AddReport from "./composants/AddReport"; // Import the AddReport component
import Profile from "./composants/Profile";
import Settings from "./composants/Settings";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                
                {/* User Routes */}
                <Route path="/users" element={<Userlist />} />
                <Route path="/add-user" element={<AddUser  />} />
                <Route path="/update-user/:id" element={<UpdateUser  />} />

                {/* Employee Routes */}
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/add-employee" element={<AddEmployee />} />
                <Route path="/update-employee/:id" element={<UpdateEmployee />} />

                {/* Department Routes */}
                <Route path="/departments" element={<DepartmentList />} />
                <Route path="/add-department" element={<AddDepartment />} />
                <Route path="/update-department/:id" element={<UpdateDepartment />} />

                {/* Project Routes */}
                <Route path="/projects" element={<ProjectList />} />
                <Route path="/add-project" element={<AddProject />} />
                <Route path="/update-project/:id" element={<UpdateProject />} />

                {/* Reports Routes */}
                <Route path="/reports" element={<Reports />} />
                <Route path="/add-report" element={<AddReport />} /> {/* Ensure this route is defined */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;