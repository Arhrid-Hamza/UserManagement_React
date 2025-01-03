// src/composants/ReportList.js

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Reports() {
    const reports = useSelector(state => state.reports); // Assuming reports are stored in Redux state
    const navigate = useNavigate();

    // Inline styles
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
            backgroundColor: '#4CAF50',
            color: 'white',
        },
        returnButton: {
            backgroundColor: '#4CAF50', // Different color for return button
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
    };

    return (
        <div style={styles.container}>
            <div style={styles.buttonContainer}>
                <Link to="/add-report">
                    <button style={styles.button}>Add Report</button> {/* Ensure this link is correct */}
                </Link>
                <button 
                    onClick={() => navigate('/admin-dashboard')} 
                    style={{ ...styles.button, ...styles.returnButton }}
                >
                    Return to Admin Dashboard
                </button>
            </div>
            <h2 style={{ textAlign: 'center' }}>Reports List</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Report ID</th>
                        <th style={styles.th}>Title</th>
                        <th style={styles.th}>Generated By</th>
                        <th style={styles.th}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.length > 0 ? (
                        reports.map((report, index) => (
                            <tr key={index}>
                                <td style={styles.td}>{report.id}</td>
                                <td style={styles.td}>{report.title}</td>
                                <td style={styles.td}>{report.generatedBy}</td>
                                <td style={styles.td}>{new Date(report.date).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={styles.td}>No reports available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Reports;