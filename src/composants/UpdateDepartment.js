import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'; // Import SweetAlert2

function UpdateDepartment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');

    useEffect(() => {
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        const department = departments.find(dep => dep.id === parseInt(id));
        if (department) {
            setName(department.name);
        }
    }, [id]);

    const handleClick = (e) => {
        e.preventDefault();
        const departments = JSON.parse(localStorage.getItem('departments')) || [];
        const updatedDepartments = departments.map(dep => 
            dep.id === parseInt(id) ? { ...dep, name } : dep
        );
        localStorage.setItem('departments', JSON.stringify(updatedDepartments));

 // Show SweetAlert notification
        Swal.fire({
            title: 'Department Updated!',
            text: 'The department has been updated successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/departments'); // Navigate to the departments list
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
            <h2 style={styles.title}>Update Department</h2>
            <form onSubmit={handleClick}>
                <label style={styles.label}>Department Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                >
                    Update Department
                </button>
            </form>
        </div>
    );
}

export default UpdateDepartment;