import axios from 'axios';

//Base URL of your Node.js backend
const BASE_URL = "http://10.20.9.166:5000/employee-api";

//Get all employees
export const getAllEmployees = async () => {
    console.log('step 3')
    return await axios.get(`${BASE_URL}/findall`);
};

//Add a new employee
export const addEmployee = async (employee) => {
    return await axios.post(`${BASE_URL}/save`,employee);
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