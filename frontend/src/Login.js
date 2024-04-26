import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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
                localStorage.setItem('token', response.data.token);           
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
            <ValidatorForm onSubmit={handleSubmit}>
                <div className="mb-3">
                    <TextValidator
                        fullWidth
                        label="Username"
                        id="username"
                        type="email"
                        value={username}
                        placeholder='Enter your mail'
                        onChange={(e) => setUsername(e.target.value)}
                        validators={['required', 'isEmail']}
                        errorMessages={['This field is required', 'Email is not valid']}
                    />
                </div>
                <div className="mb-3">
                    <TextValidator
                        fullWidth
                        label="Password"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        validators={['required']}
                        errorMessages={['This field is required']}
                    />
                </div>
                <div className="d-grid">
                    <Button variant="contained" type="submit">Login</Button>
                </div>
            </ValidatorForm>
        </div>
    </div>
    );
};

export default Login;