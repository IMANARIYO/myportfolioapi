import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
let url='http://localhost:3330'
    try {
      const response = await axios.post(
        `${url}/auth/login`,
        { email, password }
      );

      const data = response.data;

      if (response.status === 200) {
        alert('Login successful!');
        localStorage.setItem('accessToken', data.access_token);
        localStorage.setItem('userId', data.user._id);
        alert(data.user._id)
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
      setError('wrong user or password.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    alert('Logged out successfully!');
  };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isLoggedIn ? 'hidden' : 'block'}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-96 p-6 rounded-lg shadow-md">
          <span className="absolute top-0 right-30 cursor-pointer" onClick={() => setIsLoggedIn(true)}>X</span>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input mt-1 block w-full rounded-lg border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input mt-1 block w-full rounded-lg border-gray-300"
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Login</button>
            <div className="mt-4">
              <span className="text-gray-600">Forgot your password?</span>
              <a href="/signup" className="text-blue-500 ml-2">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
