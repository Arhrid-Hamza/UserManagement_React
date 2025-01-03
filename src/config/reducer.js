const initialState = {
    users: JSON.parse(localStorage.getItem('utilisateurs')) || [],
    employees: JSON.parse(localStorage.getItem('employees')) || [],
    departments: JSON.parse(localStorage.getItem('departments')) || [],
    projects: JSON.parse(localStorage.getItem('projects')) || [],
    reports: JSON.parse(localStorage.getItem('reports')) || [], 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // User Actions
        case "Add_user":
            const updatedUsersAdd = [...state.users, action.payload];
            localStorage.setItem('utilisateurs', JSON.stringify(updatedUsersAdd)); // Save to localStorage
            return { ...state, users: updatedUsersAdd };

        case "Update_user":
            const updatedUsersUpdate = state.users.map((user) =>
                user.id === parseInt(action.payload.id) ? { ...user, ...action.payload } : user
            );
            localStorage.setItem('utilisateurs', JSON.stringify(updatedUsersUpdate)); // Save to localStorage
            return { ...state, users: updatedUsersUpdate };

        case "Delete_user":
            const updatedUsersDelete = state.users.filter((u) => u.id !== parseInt(action.payload));
            localStorage.setItem('utilisateurs', JSON.stringify(updatedUsersDelete)); // Save to localStorage
            return { ...state, users: updatedUsersDelete };

        // Employee Actions
        case "Add_employee":
            const updatedEmployeesAdd = [...state.employees, action.payload];
            localStorage.setItem('employees', JSON.stringify(updatedEmployeesAdd)); // Save to localStorage
            return { ...state, employees: updatedEmployeesAdd };

        case "Update_employee":
            const updatedEmployeesUpdate = state.employees.map(employee =>
                employee.id === action.payload.id ? action.payload : employee
            );
            localStorage.setItem('employees', JSON.stringify(updatedEmployeesUpdate)); // Save to localStorage
            return { ...state, employees: updatedEmployeesUpdate };

        case "Delete_employee":
            const updatedEmployeesDelete = state.employees.filter(employee => employee.id !== action.payload);
            localStorage.setItem('employees', JSON.stringify(updatedEmployeesDelete)); // Save to localStorage
            return { ...state, employees: updatedEmployeesDelete };

        // Department Actions
        case "Add_department":
            const updatedDepartmentsAdd = [...state.departments, action.payload];
            localStorage.setItem('departments', JSON.stringify(updatedDepartmentsAdd)); // Save to localStorage
            return { ...state, departments: updatedDepartmentsAdd };

        case "Update_department":
            const updatedDepartmentsUpdate = state.departments.map(department =>
                department.id === action.payload.id ? action.payload : department
            );
            localStorage.setItem('departments', JSON.stringify(updatedDepartmentsUpdate)); // Save to localStorage
            return { ...state, departments: updatedDepartmentsUpdate };

        // src/config/reducer.js

        case "Delete_department":
            const updatedDepartmentsDelete = state.departments.filter(department => department.id !== action.payload);
            const employeesToDelete = state.employees.filter(employee => employee.department === action.payload);
            const updatedEmplOyeesDelete = state.employees.filter(employee => !employeesToDelete.includes(employee));
            localStorage.setItem('departments', JSON.stringify(updatedDepartmentsDelete));
            localStorage.setItem('employees', JSON.stringify(updatedEmplOyeesDelete));
            return { ...state, departments: updatedDepartmentsDelete, employees: updatedEmplOyeesDelete };

        // Project Actions
        case "Add_project":
            const updatedProjectsAdd = [...state.projects, action.payload];
            localStorage.setItem('projects', JSON.stringify(updatedProjectsAdd)); // Save to localStorage
            return { ...state, projects: updatedProjectsAdd };

        case "Update_project":
            const updatedProjectsUpdate = state.projects.map(project =>
                project.id === action.payload.id ? action.payload : project
            );
            localStorage.setItem('projects', JSON.stringify(updatedProjectsUpdate)); // Save to localStorage
            return { ...state, projects: updatedProjectsUpdate };

        case "Delete_project":
            const updatedProjectsDelete = state.projects.filter(project => project.id !== action.payload);
            localStorage.setItem('projects', JSON.stringify(updatedProjectsDelete)); // Save to localStorage
            return { ...state, projects: updatedProjectsDelete };

       // Report Actions
        case "Add_report":
            const updatedReportsAdd = [...state.reports, action.payload];
            localStorage.setItem('reports', JSON.stringify(updatedReportsAdd)); // Save to localStorage
            return { ...state, reports: updatedReportsAdd };

        case "Update_report":
                const updatedReportsUpdate = state.reports.map(report =>
                report.id === action.payload.id ? action.payload : report
            );
            localStorage.setItem('reports', JSON.stringify(updatedReportsUpdate)); // Save to localStorage
            return { ...state, reports: updatedReportsUpdate };

        case "Delete_report":
            const updatedReportsDelete = state .reports.filter(report => report.id !== action.payload);
            localStorage.setItem('reports', JSON.stringify(updatedReportsDelete)); // Save to localStorage
            return { ...state, reports: updatedReportsDelete };

        default:
            return state;
    }
};

export default reducer;