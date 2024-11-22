import {Link} from "react-router-dom"
import { useSelector ,useDispatch} from "react-redux"
import { DeleteUserAction } from "../config/action"
function UserList(){
    const users = useSelector(data => data.users)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(DeleteUserAction(id))
    }
    const styles = {
        container: {
            maxWidth: '800px',
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
        },
        addButton: {
            backgroundColor: '#4CAF50',
            color: 'white',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
        },
        th: {
            backgroundColor: '#f2f2f2',
            border: '1px solid #ddd',
            padding: '8px',
            textAlign: 'left',
        },
        td: {
            border: '1px solid #ddd',
            padding: '8px',
            textAlign: 'left',
        },
        editButton: {
            padding: '5px 10px',
            marginRight: '10px',
            marginLeft: '10px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        deleteButton: {
            padding: '5px 10px',
            marginRight: '5px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.container}>
            <p>
                <Link to="/add-user">
                    <button style={{ ...styles.button, ...styles.addButton }}>Add User</button>
                </Link>
            </p>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Id</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Email</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td style={styles.td}>{user.id}</td>
                                <td style={styles.td}>{user.name}</td>
                                <td style={styles.td}>{user.email}</td>
                                <td>
                                    <Link to={`/update-user/${user.id}`}>
                                        <button style={styles.editButton}>Edit</button>
                                    </Link>
                                    <button style={styles.deleteButton} onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;