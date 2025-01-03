// src/composants/AddProject.js

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { addProjectAction } from "../config/action";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function AddProject() {
    const [name, setName] = useState("");
    const [employee, setEmployee] = useState(""); // New state for employee
    const [department, setDepartment] = useState(""); // New state for department
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employees = useSelector(state => state.employees); // Get employees from Redux state
    const departments = useSelector(state => state.departments); // Get departments from Redux state

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            id: Date.now(),
            name,
            employee,
            department
        };
        dispatch(addProjectAction(newProject)); // Include employee and department
        // Reset form
        setName("");
        setEmployee("");
        setDepartment("");
        // Redirect to the project list page
        navigate('/projects'); // Change this to the correct path for your project list

        Swal.fire({
            title: 'Project Added!',
            text: 'The project has been added successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/projects'); // Navigate to the projects list
        });
    };

    // Inline styles
    const styles = {
        container: {
            maxWidth: '500px',
            margin: '50px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        title: {
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '1.8em',
            color: '#333',
        },
        label: {
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#555',
        },
        input: {
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1em',
        },
        select: {
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '1em',
        },
        button: {
            width: '100%',
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1em',
            backgroundColor: '#4CAF50',
            color: 'white',
            transition: 'background-color 0.3s',
        },
        buttonHover: {
            backgroundColor: '#45a049',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Add Project</h2>
            <form onSubmit={handleSubmit}>
                <label style={styles.label}>Project Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />
                <label style={styles.label}>Employee Responsible:</label>
                <select
                    value={employee}
                    onChange={(e) => setEmployee(e.target.value)}
                    required
                    style={styles.select}
                >
                    <option value="">Select an employee</option>
                    {employees.map((employee) => (
                        <option key={employee.id} value={employee.name}>{employee.name}</option>
                    ))}
                </select>
                <label style={styles.label}>Department Responsible:</label>
                <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                    style={styles.select}
                >
                    <option value="">Select a department</option>
                    {departments.map((department) => (
                        <option key={department.id} value={department.name}>{department.name}</option>
                    ))}
                </select>
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                >
                    Add Project
                </button>
            </form>
        </div>
    );
}

export default AddProject;