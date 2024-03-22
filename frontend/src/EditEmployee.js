import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import './style.css'

const EditEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender, setGender] = useState('');
    const [course, setCourse] = useState('');
    const [imageUpload, setImageUpload] = useState('');
    // const [getAllEmployee,SetAllEmployee] = useState([]);
    // console.log(getAllEmployee);

    const {id} = useParams();    //consume params
    console.log(id);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch employee data with the given id and update the state
        axios.get(`http://localhost:8000/getemployees/${id}`)
            .then(res => {
                const { name, email, mobileNo, designation, gender, course, imageUpload } = res.data;
                setName(name);
                setEmail(email);
                setMobileNo(mobileNo);
                setDesignation(designation);
                setGender(gender);
                setCourse(course);
                setImageUpload(imageUpload);
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);
    // const filteremployee = getAllEmployee.find((emp)=>emp._id == id);
    // console.log(filteremployee);
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/getemployees/${id}`, {
            name,
            email,
            mobileNo,
            designation,
            gender,
            course,
            imageUpload
        })
        .then(res => {
            console.log(res.data);
            window.alert("Data Updated successfully");
            // Redirect to the employee list page or show a success message
            navigate(`/getemployee`);
        })
        .catch(err => {
            console.error(err.message);
            // Handle error
        });
    
    };

    return (
        <div className="bottom-container rounded">
        <div className="employee-details rounded mt-2 py-2">
            <h3 className="mb-0">EDIT EMPLOYEE</h3>
            <h5 className="mb-0">Id:{id}</h5>
        </div>
        <form onSubmit={(e) => handleSubmit(e,id)}>
        <div className="d-flex gap-3 ms-3 my-4 justify-content-center">
       
            <div className="d-flex flex-column label-flex ms-3">
                <label htmlFor="text" className="label_text">
                    Name
                </label>
                <label htmlFor="text" className="label_text">
                    Email
                </label>
                <label htmlFor="text" className="label_text">
                    Mobile No
                </label>
                <label htmlFor="text" className="label_text">
                    Designation
                </label>
                <label htmlFor="text" className="label_text">
                    Gender
                </label>
                <label htmlFor="text" className="label_text">
                    Course
                </label>
                <label htmlFor="text" className="label_text">
                    Image URL
                </label>
            </div>
            <div className="d-flex flex-column input-flex">
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-control"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-control"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    required
                />
                <select
                    className="form-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    type="text"
                    className="form-control"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="form-control"
                    value={imageUpload}
                    onChange={(e) => setImageUpload(e.target.value)}
                    required
                />
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <Button type="submit" variant="contained" color="primary">
                Update Employee
            </Button>
        </div>
        </form>
    </div>
    );
};

export default EditEmployee;

//by Clicking edit button in EmployeeTable it navigate to EditEmployee table for Update the particular data.