import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded credentials for demonstration
        const adminCredentials = { username: 'admin', password: 'admin123' };
        const userCredentials = { username: 'user', password: 'user123' };

        if (username === adminCredentials.username && password === adminCredentials.password) {
            // Redirect to the admin dashboard on successful login
            navigate('/admin-dashboard');
        } else if (username === userCredentials.username && password === userCredentials.password) {
            // Redirect to the user dashboard on successful login
            navigate('/user-dashboard');
        } else {
            // Set error message for invalid credentials
            setError('Invalid username or password');
        }
    };

    const styles = {
        container: {
            maxWidth: '400px',
            margin: '20px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        button: {
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
        },
        input: {
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '4px',
        },
        error: {
            color: 'red',
            marginBottom: '10px',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
            {error && <div style={styles.error}>{error}</div>}
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
}

export default Login;