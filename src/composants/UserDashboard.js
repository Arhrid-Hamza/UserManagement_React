import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function UserDashboard() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]); // État pour stocker les utilisateurs

    const handleLogout = () => {
        // Effacer les données d'authentification de l'utilisateur (si nécessaire)
        localStorage.removeItem('userToken'); // Ajustez en fonction de votre implémentation d'authentification
        navigate('/login'); // Rediriger vers la page de connexion
    };

    // Récupérer les utilisateurs depuis le local storage
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('utilisateurs')) || []; // Récupérer les utilisateurs
        setUsers(storedUsers); // Mettre à jour l'état avec les utilisateurs récupérés
    }, []);

    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f9f9f9',
            fontFamily: 'Arial, sans-serif',
        },
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        },
        title: {
            fontSize: '1.5em',
        },
        navLink: {
            color: 'white',
            textDecoration: 'none',
            margin: '0 15px',
            transition: 'color 0.3s',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
        th: {
            backgroundColor: '#f2f2f2',
            padding: '10px',
            textAlign: 'left',
            borderBottom: '1px solid #ddd',
        },
        td: {
            padding: '10px',
            borderBottom: '1px solid #ddd',
        },
        welcomeMessage: {
            marginTop: '20px',
            fontSize: '1.2em',
            color: '#333',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.navbar}>
                <div style={styles.title}>User  Dashboard</div>
                <div>
                    <Link to="/profile" style={styles.navLink}>Profile</Link>
                    <Link to="/settings" style={styles.navLink}>Settings</Link>
                    <Link to="/" onClick={handleLogout} style={styles.navLink}>Log Out</Link>
                </div>
            </div>
            <h2 style={styles.welcomeMessage}>Welcome to Your Dashboard</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>User  ID</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td style={styles.td}>{user.id}</td>
                                <td style={styles.td}>{user.name}</td>
                                <td style={styles.td}>{user.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={styles.td}>No users available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserDashboard;