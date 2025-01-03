import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function AdminDashboard() {
    const navigate = useNavigate();
    const employees = useSelector(state => state.employees);
    const departments = useSelector(state => state.departments);


    const handleLogout = () => {
        localStorage.removeItem('userToken'); 
        navigate('/'); 
    };

    const data = [
        {
            name: 'Employees',
            value: employees.length,
        },
        {
            name: 'Departments',
            value: departments.length,
        },
    ];


    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f0f4f8', // Light background color
            fontFamily: 'Arial, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Center items horizontally
            justifyContent: 'center', // Center items vertically
        },
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#4CAF50', // Green color for navbar
            color: 'white',
            padding: '10px 20px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            width: '100%', // Make navbar full width
        },
        title: {
            fontSize: '1.8em',
        },
        navLink: {
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            transition: 'color 0.3s',
        },
        dashboardContainer: {
            marginTop: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '1200px', // Set a max width for the dashboard
            width: '100%', // Make it responsive
        },
        card: {
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            textAlign: 'center',
            transition: 'transform 0.2s',
        },
        cardTitle: {
            fontSize: '1.5em',
            marginBottom: '10px',
            color: '#4CAF50',
        },
        cardButton: {
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#2196F3', // Blue color for buttons
            color: 'white',
            transition: 'background-color 0.3s',
        },
        cardButtonHover: {
            backgroundColor: '#1976D2', // Darker blue on hover
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.navbar}>
                <div style={styles.title}>Admin Dashboard</div>
                <div>
                    <Link to="/users" style={styles.navLink}>Manage Users</Link>
                    <Link to="/employees" style={styles.navLink}>Manage Employees</Link>
                    <Link to="/departments" style={styles.navLink}>Manage Departments</Link>
                    <Link to="/projects" style={styles.navLink}>Manage Projects</Link>
                    <Link to="/reports" style={styles.navLink}>View Reports</Link>
                    <Link to="/" onClick={handleLogout} style={styles.navLink}>Log Out</Link>
                </div>
            </div>
            <h2 style={{ marginTop: '20px', textAlign: 'center' }}>Management Overview</h2>
            <div style={styles.dashboardContainer}>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Users</h3>
                    <p>Manage all user accounts and permissions.</p>
                    <Link to="/users">
                        <button 
                            style={styles.cardButton} 
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.cardButtonHover.backgroundColor}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.cardButton.backgroundColor}
                        >
                            View Users
                        </button>
                    </Link>
                </div>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Employees</h3>
                    <p>Manage employee records and details.</p>
                    <Link to="/employees">
                        <button 
                            style={styles.cardButton} 
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.cardButtonHover.backgroundColor}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.cardButton.backgroundColor}
                        >
                            View Employees
                        </button>
                    </Link>
                </div>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Departments</h3>
                    <p>Organize and manage departments.</p>
                    <Link to="/departments">
                        <button 
                            style={styles.cardButton} 
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.cardButtonHover.backgroundColor}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.cardButton.backgroundColor}
                        >
                            View Departments
                        </button>
                    </Link>
                </div>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Projects</h3>
                    <p>Track and manage ongoing projects.</p>
                    <Link to="/projects">
                        <button 
                            style={styles.cardButton} 
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.cardButtonHover.backgroundColor}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.cardButton.backgroundColor}
                        >
                            View Projects
                        </button>
                    </Link>
                </div>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>Reports</h3>
                    <p>Generate and view various reports.</p>
                    <Link to="/reports">
                        <button 
                            style={styles.cardButton} 
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.cardButtonHover.backgroundColor}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.cardButton.backgroundColor}
                        >
                            View Reports
                        </button>
                    </Link>
                </div>
                <h3 style={{ textAlign: 'center' }}>Employee and Department Overview</h3>
                <BarChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#4CAF50" />
                </BarChart>
            </div>
        </div>
    );
}

export default AdminDashboard;