import axios from 'axios';

//Base URL of your Node.js backend
const BASE_URL = "htttp://localhost:5000/employee-api";

//Get all employees
export const getAllEmployees = async () => {
    return await axios.get(`${BASE_URL}/findall`);
};

//Add a new employee
export const addEmployee = async (employee) => {
    return await axios.post(`${BASE_URL}/save1`,employee);
};


//Update a new employee
export const updateEmployee = async (employee) => {
    return await axios.post(`${BASE_URL}/update`,employee);
};


//Delete a new employee
export const deleteEmployee = async (id) => {
    return await axios.post(`${BASE_URL}/delete`,{
        _id: id
    });
};