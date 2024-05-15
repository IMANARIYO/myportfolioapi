import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://imanariyobaptisteportfolioapi.onrender.com/auth/login',
        { email, password }
      );

      const data = response.data;

      if (response.status === 200) {
        alert('Login successful!');
        localStorage.setItem('accessToken', data.access_token);
        setIsLoggedIn(true);
        if (data.user.role === 'admin') {
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/';
        }
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
    alert('Logged out successfully!');
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">Login</button>
          <div className="form-footer">
            <span>Forgot your password?</span>
            <a href="/signup">Sign up</a>
          </div>
        </form>
      ) : (
        <div className="logout-container">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
