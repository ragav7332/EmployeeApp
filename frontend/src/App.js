import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import EmployeeList from './EmployeeList';
import Login from './Login';
import { AuthProvider } from './AuthContext';
import EmployeeTable from './EmployeeTable';
import EditEmployee from './EditEmployee';


const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/getemployee" element={<EmployeeTable/>} />
                    <Route path="/employees" element={<EmployeeList/>} />
                    <Route path="/employees/update/:id" element={<EditEmployee/>} />
                    <Route path="/employees/delete/:id" element={<EditEmployee/>} />
                    <Route path="/login" exact element={<Login/>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;


