import { useEffect, useState } from 'react';
// import './App.css';
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from './components/EmployeeList';
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";


//importing from service.js
import {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee
} from "./services/employeeService";




export default function App() {
  //creating a const employee
  const [employees, setEmployees] = useState([]);

  //const for update & delete
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  //const for search bar
  const [seachTxt, setSearchTxt] = useState("");



  //const to call getAllEmployees from employeeService.js
  const loadEmployees = async () => {
    try {
      const response = await getAllEmployees();
      setEmployees(response.data)
    } catch (error) {
      console.log(error.message)
    }
  };
  useEffect(() => {
    loadEmployees();
  }, []);




  return (
    <div>
      <Navbar />
      <SearchBar />
      <EmployeeForm />
      <EmployeeList employees={employees} />
    </div>
  )
};