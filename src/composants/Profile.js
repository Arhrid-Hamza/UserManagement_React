import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    
    // Retrieve the logged-in user's data from local storage
    const user = JSON.parse(localStorage.getItem('userToken')) || { name: 'user', email: 'user@gmail.com' };

    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f9f9f9',
            fontFamily: 'Arial, sans-serif',
        },
        title: {
            fontSize: '1.5em',
            marginBottom: '20px',
        },
        label: {
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        value: {
            marginBottom: '20px',
        },
        button: {
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Profile</h2>
            <div>
                <div style={styles.label}>Name:</div>
                <div style={styles.value}>{user.name}</div>
                <div style={styles.label}>Email:</div>
                <div style={styles.value}>{user.email}</div>
            </div>
            <button style={styles.button} onClick={() => navigate('/user-dashboard')}>Back to Dashboard</button>
        </div>
    );
}

export default Profile;