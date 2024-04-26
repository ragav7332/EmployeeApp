
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import { useAuth } from './AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    // Check if user is logged in using local storage
    const isLoggedInLocally = localStorage.getItem('token');

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    EMPLOYEE INFO
                </Typography>
                <Button component={Link} to="/home" color="inherit">Home</Button>
                <Button component={Link} to="/getemployee" color="inherit">Employee Details</Button>
                <Button component={Link} to="/employees" color="inherit">Add Employee Info</Button>
                {isLoggedIn || isLoggedInLocally ? (
                    <Button onClick={handleLogout} color="inherit">Log Out</Button>
                ) : (
                    <Button component={Link} to="/login" color="inherit">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;

