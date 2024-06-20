// src/UserProfileUpdate.js
import React, { useState } from 'react';
import './UserProfileUpdate.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const UserProfileUpdate = () => {
  const [profile, setProfile] = useState({
    fullname: '',
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  try {
      const response = axios.post('http://localhost:8080/api/users/update', profile);
      
      console.log('Form data submitted:', profile.fullname);
      console.log('User Updated successfully:', response.data);
      navigate("/");
  } catch (error) {
      console.error('Error Updating user:', error);
  }
  console.log('Form data submitted:', profile);
    console.log(profile);
  };

  return (
    <div className="container">
      <div className="profile-update">
        <div className="avatar">
          <span>U</span>
        </div>
        <h1>Update Profile</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={profile.fullname}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="username"
              value={profile.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileUpdate;
