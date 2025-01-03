import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DeleteEmployeeAction } from "../config/action"; // Ensure this import matches your action file
import Swal from 'sweetalert2'; // Import SweetAlert2

function EmployeesList() {
    const employees = useSelector(state => state.employees);
    const departments = useSelector(state => state.departments); // Get departments from Redux state
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const employee = employees.find(emp => emp.id === id);
        const department = departments.find(dep => dep.name === employee.department);
        if (department) {
            Swal.fire({
                title: 'Error!',
                text: 'Cannot delete employee. Department still exists.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
        // Show SweetAlert confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(DeleteEmployeeAction(id)); // Dispatch the action to delete the employee
                Swal.fire(
                    'Deleted!',
                    'The employee has been deleted.',
                    'success'
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'The employee is safe :)',
                    'error'
                );
            }
        });
    };

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
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
        },
        button: {
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            color: 'white',
        },
        returnButton: {
            backgroundColor: '#4CAF50', // Different color for return button
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
            <div style={styles.buttonContainer}>
                <Link to="/add-employee">
                    <button style={{ ...styles.button, ...styles.addButton }}>Add Employee</button>
                </Link>
                <button 
                    onClick={() => navigate('/admin-dashboard')} 
                    style={{ ...styles.button, ...styles.returnButton }}
                >
                    Return to Admin Dashboard
                </button>
            </div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Employee ID</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Department</th> {/* Added Department Column */}
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td style={styles.td}>{employee.id}</td>
                            <td style={styles.td}>{employee.name}</td>
                            <td style={styles.td}>{employee.department}</td> {/* Displaying Department */}
                            <td>
                                <Link to={`/update-employee/${employee.id}`}>
                                    <button style={styles.editButton}>Edit</button>
                                </Link>
                                <button style={styles.deleteButton} onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeesList;