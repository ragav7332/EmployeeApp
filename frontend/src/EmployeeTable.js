import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from '@mui/material';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/getemployees')         //get all employee detail from database through backend
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleEdit = async (_id) => {
        try {
            await axios.get(`http://localhost:8000/getemployees/${_id}`); //filtering process happens here by Clicking event in button
            navigate(`/employees/update/${_id}`);
            console.log(_id);
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show error message)
        }
    };

    const handleDelete = async(_id)=>{
        try {
            await axios.delete(`http://localhost:8000/getemployees/${_id}`);   //deleting particular data by clicking event
            navigate(`/getemployee`);
            console.log("Deleted Successfully");
            window.alert("Data Deleted Successfully");
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <table className="table table-striped">
    <thead>
        <tr>
            <th className="col">Unique Id</th>
            <th className="col">Image</th>
            <th className="col">Name</th>
            <th className="col">Email</th>
            <th className="col">Mobile No</th>
            <th className="col">Designation</th>
            <th className="col">Gender</th>
            <th className="col">Course</th>
            <th className="col">Create Date</th>
            <th className="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {employees.map(employee => (  
            <tr key={employee._id}>
                <td>{employee._id}</td>
                <td><img src={employee.imageUpload} alt={employee.name} width={100} height={100} /></td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.mobileNo}</td>
                <td>{employee.designation}</td>
                <td>{employee.gender}</td>
                <td>{employee.course}</td>
                <td>{new Date(employee.createDate).toLocaleDateString()}</td>
                <td>
                    <Link to="/employees/update"><Button onClick={() => handleEdit(employee._id)} variant="contained" color="primary">EDIT</Button></Link>
                    <Link to="/employees/delete"><Button onClick={() => handleDelete(employee._id)} variant="contained" class ="btn btn-danger">DELETE</Button></Link>
                </td>
            </tr>
        ))}
    </tbody>
</table>

    );
};

export default EmployeeTable;
