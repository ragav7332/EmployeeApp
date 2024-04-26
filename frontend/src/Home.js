
import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);
  
    return (
        <div className='container justify-content-center mt-3'>
            <h1>Welcome to the Dashboard Home Page</h1>
            <p>This is the dashboard of the application. You can add content here to display various information or actions available to the user.</p>
        </div>
    );
};

export default Home;
