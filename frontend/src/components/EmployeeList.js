import React from "react";

function EmployeeList({ employees, editEmployee, deleteEmployee }) {

    return (
        <div className="card mt-4">
            <div className="card-header bg-dark text-white">
                <h4>Employee List</h4>
            </div>
            <div className="card-body">
                {
                    employees.length === 0 ?

                        (
                            <div className="alert alert-warning text-center">
                                No employees found.
                            </div>
                        )
                        :
                        (
                            <table className="table table-bordered table-hover table-striped">
                                <thead className="table-primary">
                                    <tr>
                                        <th>Employee ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Job ID</th>
                                        <th>Salary</th>
                                        <th>Department</th>
                                        <th width="180">Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        employees.map((employee) => (

                                            <tr key={employee._id}>
                                                <td>{employee.EMPLOYEE_ID}</td>
                                                <td>{employee.FIRST_NAME}</td>
                                                <td>{employee.LAST_NAME}</td>
                                                <td>{employee.EMAIL}</td>
                                                <td>{employee.PHONE_NUMBER}</td>
                                                <td>{employee.JOB_ID}</td>
                                                <td>{employee.SALARY}</td>
                                                <td>{employee.DEPARTMENT_ID}</td>
                                                <td>

                                                    <button
                                                        className="btn btn-warning btn-sm me-2"
                                                        onClick={() => editEmployee(employee)}
                                                    >
                                                        Edit
                                                    </button>

                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => deleteEmployee(employee._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                }
            </div>
        </div>
    );
}
export default EmployeeList;