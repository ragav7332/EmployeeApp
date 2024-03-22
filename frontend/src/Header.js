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

    return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                EMPLOYEE INFO
            </Typography>
            <Button component={Link} to="/home" color="inherit">Home</Button>
            <Button component={Link} to="/getemployee" color="inherit">Employee Details</Button>
            <Button component={Link} to="/employees" color="inherit">Add Employee Info</Button>
            {isLoggedIn ? (
                <Button onClick={handleLogout} color="inherit">Log Out</Button>
            ) : (
                <Button component={Link} to="/login" color="inherit">Login</Button>
            )}
        </Toolbar>
    </AppBar>
    );
};

export default Header;
//this is header file all the links through routes were stored in header

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// import { useAuth } from './AuthContext';

// const Header = () => {
//     const navigate = useNavigate();
//     const { isLoggedIn, logout } = useAuth();

//     const handleLogout = () => {
//         logout();
//         navigate('/login');
//     };

//     return (
//         <header>
//             <nav>
//                 <ul>
//                     <li><Link to="/home">Home</Link></li>
//                     {isLoggedIn && (
//                         <>
//                             <li><Link to="/getemployee">Employee Details</Link></li>
//                             <li><Link to="/employees">Add Employee Info</Link></li>
//                             <li><button onClick={handleLogout}>Log Out</button></li>
//                         </>
//                     )}
//                     {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header;

