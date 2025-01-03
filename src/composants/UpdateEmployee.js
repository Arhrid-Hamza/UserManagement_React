// src/composants/UpdateEmployee.js

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useSelector } from 'react-redux'; // Import useSelector

function UpdateEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [department, setDepartment] = useState(''); // Initialize department state
    const departments = useSelector(state => state.departments); // Get departments from Redux state
    const employees = useSelector(state => state.employees); // Get employees from Redux state
    const employee = employees.find(emp => emp.id === parseInt(id));

    useEffect(() => {
        if (employee) {
            setName(employee.name);
            setDepartment(employee.department);
        }
    }, [id, employee]);

    const handleClick = (e) => {
        e.preventDefault();
        const updatedEmployees = employees.map(emp =>
            emp.id === parseInt(id) ? { ...emp, name, department } : emp
        );
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));

        // Show SweetAlert notification
        Swal.fire({
            title: 'Employee Updated!',
            text: 'The employee details have been updated successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/employees'); // Navigate to the employees list
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
            <h2 style={styles.title}>Update Employee</h2>
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
                    Update Employee
                </button>
            </form>
        </div>
    );
}

export default UpdateEmployee;