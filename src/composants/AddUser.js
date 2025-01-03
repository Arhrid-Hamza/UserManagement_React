// src/composants/AddUser .js

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddUserAction } from "../config/action"; // Ensure this import matches your action file
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function AddUser () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const newUser  = {
            id: Date.now(), // Use a unique ID based on the current timestamp
            name: name,
            email: email
        };
        dispatch(AddUserAction(newUser )); // Dispatch the action to add the user
        navigate('/users'); // Navigate to the users list page

        Swal.fire({
            title: 'User  Added!',
            text: 'The user has been added successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/users'); // Navigate to the users list
        });
    }

    

    // Inline styles
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
            <h2 style={styles.title}>Add User</h2>
            <form onSubmit={handleClick}>
                <label style={styles.label}>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                    required
                />
                <label style={styles.label}>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />
                <button 
                    type="submit" 
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                >
                    Add User
                </button>
            </form>
        </div>
    );
}

export default AddUser ;