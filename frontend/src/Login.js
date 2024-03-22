import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/login', { username, password });
            if (response.status === 200) {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);            
                navigate('/home');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            window.alert("Incorrect username and password!");
            console.error(error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
        <div>
            <h1 className='d-flex justify-content-center'>Login</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="d-grid">
                    <Button variant="contained" type="submit">Login</Button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;
