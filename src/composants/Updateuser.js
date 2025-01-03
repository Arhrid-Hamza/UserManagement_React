import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateUserAction } from "../config/action";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

function UpdateUser () {
    const { id } = useParams();
    const user = useSelector(state => state.users.find((u) => u.id === parseInt(id)));
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map(u => 
            u.id === parseInt(id) ? { ...u, name, email } : u
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        // Show SweetAlert notification
        Swal.fire({
            title: 'User  Updated!',
            text: 'The user details have been updated successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/users'); // Navigate to the users list
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
            <h2 style={styles.title}>Update User</h2>
            <form onSubmit={handleClick}>
                <label style={styles.label}>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={styles.input}
                />
                <label style={styles.label}>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
                >
                    Update User
                </button>
            </form>
        </div>
    );
}

export default UpdateUser ;