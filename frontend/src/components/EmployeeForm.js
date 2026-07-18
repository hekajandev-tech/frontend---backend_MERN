import React, { useState, useEffect } from "react";

function EmployeeForm({ selectedEmployee, saveEmployee }) {

    // Initial form values
    const initialState = {
        EMPLOYEE_ID: "",
        FIRST_NAME: "",
        LAST_NAME: "",
        EMAIL: "",
        PHONE_NUMBER: "",
        HIRE_DATE: "",
        JOB_ID: "",
        SALARY: "",
        COMMISSION_PCT: "",
        MANAGER_ID: "",
        DEPARTMENT_ID: ""
    };

    const [employee, setEmployee] = useState(initialState);

    // Populate the form when editing an employee
    useEffect(() => {

        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        } else {
            setEmployee(initialState);
        }

    }, [selectedEmployee]);



    // Update state when the user types
    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployee((previousEmployee) => ({
            ...previousEmployee,
            [name]: value
        }));
    };

    // Save the employee
    const handleSubmit = (event) => {
        event.preventDefault();
        saveEmployee(employee);
        // Clear the form after saving
        setEmployee(initialState);
    };




    
    return (

        <div className="card mb-4">
            <div className="card-header bg-primary text-white">
                <h4>
                    {employee._id ? "Update Employee" : "Add New Employee"}
                </h4>
            </div>

            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label>Employee ID</label>
                            <input
                                type="number"
                                className="form-control"
                                name="EMPLOYEE_ID"
                                value={employee.EMPLOYEE_ID}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="FIRST_NAME"
                                value={employee.FIRST_NAME}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="LAST_NAME"
                                value={employee.LAST_NAME}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="EMAIL"
                                value={employee.EMAIL}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="PHONE_NUMBER"
                                value={employee.PHONE_NUMBER}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label>Hire Date</label>
                            <input
                                type="date"
                                className="form-control"
                                name="HIRE_DATE"
                                value={employee.HIRE_DATE}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label>Job ID</label>
                            <input
                                type="text"
                                className="form-control"
                                name="JOB_ID"
                                value={employee.JOB_ID}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Salary</label>
                            <input
                                type="number"
                                className="form-control"
                                name="SALARY"
                                value={employee.SALARY}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-4 mb-3">
                            <label>Commission</label>
                            <input
                                type="text"
                                className="form-control"
                                name="COMMISSION_PCT"
                                value={employee.COMMISSION_PCT}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Manager ID</label>
                            <input
                                type="number"
                                className="form-control"
                                name="MANAGER_ID"
                                value={employee.MANAGER_ID}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Department ID</label>
                            <input
                                type="number"
                                className="form-control"
                                name="DEPARTMENT_ID"
                                value={employee.DEPARTMENT_ID}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success me-2">
                        {employee._id ? "Update Employee" : "Save Employee"}
                    </button>

                    <button type="button" className="btn btn-secondary" onClick={() => setEmployee(initialState)}>
                        Clear
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EmployeeForm;