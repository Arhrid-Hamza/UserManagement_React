// src/config/action.js

// User Actions
export const AddUserAction = (user) => {
    return { type: "Add_user", payload: user };
}

export const UpdateUserAction = (newUser ) => {
    return { type: "Update_user", payload: newUser  };
}

export const DeleteUserAction = (id) => {
    return { type: "Delete_user", payload: id };
}

// Department Actions
export const AddDepartmentAction = (department) => {
    return { type: "Add_department", payload: department };
}

export const UpdateDepartmentAction = (newDepartment) => {
    return { type: "Update_department", payload: newDepartment };
}

export const DeleteDepartmentAction = (id) => {
    return { type: "Delete_department", payload: id };
}

// Project Actions
export const addProjectAction = (project) => {
    return { type: "Add_project", payload: project };
}

export const UpdateProjectAction = (newProject) => {
    return { type: "Update_project", payload: newProject };
}

export const DeleteProjectAction = (id) => {
    return { type: "Delete_project", payload: id };
}

// Employee Actions
export const AddEmployeeAction = (employee) => {
    return { type: "Add_employee", payload: employee };
}

export const UpdateEmployeeAction = (employee) => {
    return { type: "Update_employee", payload: employee };
}

export const DeleteEmployeeAction = (id) => {
    return { type: "Delete_employee", payload: id };
}

export const FetchEmployeesAction = (employees) => {
    return { type: "Fetch_employees", payload: employees };
}

// Report Actions
export const AddReportAction = (report) => {
    return { type: "Add_report", payload: report };
}

export const UpdateReportAction = (updatedReport) => {
    return { type: "Update_report", payload: updatedReport };
}

export const DeleteReportAction = (id) => {
    return { type: "Delete_report", payload: id };
}