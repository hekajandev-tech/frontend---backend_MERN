import { useEffect, useState } from 'react';
// import './App.css';
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from './components/EmployeeList';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import './App.css';


//importing from service.js
import {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee
} from "./services/employeeService";
import axios from 'axios';




export default function App() {
  //creating a const employee
  const [employees, setEmployees] = useState([]);

  //const for update & delete
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  //const for search bar
  const [searchText, setSearchText] = useState("");



  //const to call getAllEmployees from employeeService.js
  const loadEmployees = async () => {
    console.log("step 2")
    try {
      const x = await axios.get('http://localhost:5000/employee-api/findall')
      console.log('x',x)
      const response = await getAllEmployees();
      setEmployees(response.data)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    console.log("step 1")
    loadEmployees();
  }, []);



  //Save Employee for the Add and Update
  const saveEmployee = async (employee) => {
    try {
      if (employee._id) {
        await updateEmployee(employee);
      }
      else {
        await addEmployee(employee);
      }
      loadEmployees();
      setSelectedEmployee(null);
    } catch (error) {
      console.log(error)
    }
  }


  //Delete employee
  const removeEmployee = async (id) => {

    //confirmation message
    if (window.confirm("Delete this employee?")) {
      await deleteEmployee(id);
      loadEmployees();
    }
    else {
      alert("Employee not deleted!");
    }
  }


  //function to filter search
  const filteredEmployees = employees.filter(employee =>
    //the first name 
    employee.FIRST_NAME
      .toLowerCase()
      .includes(searchText?.toLowerCase())
    ||
    //the last name
    employee.LAST_NAME
      .toLowerCase()
      .includes(searchText?.toLowerCase())
    ||
    //the id
    employee.EMPLOYEE_ID
      .toString()
      .includes(searchText)
  );


  return (
    <div className='container'>
      <Navbar />

      <h2 className='mt-4'>
        Employee Management System
      </h2>

      <SearchBar
        searchTxt={searchText}
        setSearchTxt={setSearchText}
      />

      <EmployeeForm
        selectedEmployee={selectedEmployee}
        saveEmployee={saveEmployee}
      />


      <EmployeeList
        employees={employees}
        editEmployee={setSelectedEmployee}
        deleteEmployee={removeEmployee} />
    </div>
  )
};