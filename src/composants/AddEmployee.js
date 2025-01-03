// src/composants/AddEmployee.js

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddEmployeeAction } from "../config/action"; // Import the action
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useSelector } from 'react-redux'; // Import useSelector

function AddEmployee() {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState(''); // Initialize department state
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const departments = useSelector(state => state.departments); // Get departments from Redux state

    const handleClick = (e) => {
        e.preventDefault();
        if (!departments.find(dep => dep.name === department)) {
            Swal.fire({
                title: 'Error!',
                text: 'Department does not exist.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        const newEmployee = {
            id: Date.now(),
            name: name,
            department: department
        };
        dispatch(AddEmployeeAction(newEmployee)); // Dispatch the action to add the employee

        Swal.fire({
            title: 'Employee Added!',
            text: 'The employee has been added successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/employees'); // Navigate to the departments list
        });
    };

    const styles = {
        container: {
            maxWidth: '400px',
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
            fontSize: '1.5em',
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
            <h2 style={styles.title}>Add Employee</h2>
            <form onSubmit={handleClick}>
                <label style={styles.label}>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />
                <label style={styles.label}>Department</label>
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
                    Add Employee
                </button>
            </form>
        </div>
    );
}

export default AddEmployee;