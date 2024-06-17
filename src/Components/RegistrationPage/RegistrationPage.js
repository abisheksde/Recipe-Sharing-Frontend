// src/components/RegistrationForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './RegistrationPages.css';
import axios from 'axios';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const response = axios.post('http://localhost:8080/api/users/register', {
                fullname: formData.fullname,
                username: formData.username,
                password: formData.password,
                
            });
            navigate('/login');
            console.log('Form data submitted:', formData.fullname);
            console.log('User registered successfully:', response.data);
        } catch (error) {
            console.error('Error registering user:', error);
        }
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="registration-container">
            <div>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <p style={{ textAlign: 'center' }}>Already have Account? <Link to={"/login"}>Login</Link></p>
            </div>
        </div>
    );
};

export default RegistrationPage;
