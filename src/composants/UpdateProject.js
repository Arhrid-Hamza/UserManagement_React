import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateProject() {
    const { id } = useParams(); // Get the project ID from the URL parameters
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [employee, setEmployee] = useState('');
    const [department, setDepartment] = useState('');

    // Fetch the project data when the component mounts
    useEffect(() => {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const project = projects.find(proj => proj.id === parseInt(id)); // Find the project by ID
        if (project) {
            setName(project.name); // Set the name field
            setEmployee(project.employee); // Set the employee field
            setDepartment(project.department); // Set the department field
        }
    }, [id]);

    // Handle form submission
    const handleClick = (e) => {
        e.preventDefault();
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        const updatedProjects = projects.map(proj => 
            proj.id === parseInt(id) ? { ...proj, name, employee, department } : proj // Update the project
        );
        localStorage.setItem('projects', JSON.stringify(updatedProjects)); // Save updated projects to local storage
        navigate('/projects'); // Navigate back to the projects list
    };

    // Styles for the component
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
            <h2 style={styles.title}>Update Project</h2>
            <form onSubmit={handleClick}>
                <label style={styles.label}>Project Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <label style={styles.label}>Employee Responsible</label>
                <input 
                    type="text" 
                    value={employee} 
                    onChange={(e) => setEmployee(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <label style={styles.label}>Department Responsible</label>
                <input 
                    type="text" 
                    value={department} 
                    onChange={(e) => setDepartment(e.target.value)} 
                    required 
                    style={styles.input}
                />
                <button 
                    type="submit" 
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                >
                    Update Project
                </button>
            </form>
        </div>
    );
}

export default UpdateProject;