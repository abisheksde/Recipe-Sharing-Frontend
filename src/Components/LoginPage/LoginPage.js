import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <p>Don't have Account ? <Link to="/registration">Create New One</Link></p>
    </div>
  );
}

export default LoginPage;
