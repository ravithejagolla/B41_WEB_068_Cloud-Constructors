import React, { useState } from 'react';
import axios from 'axios';
import '../styles/auth.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:3000/api/login', formData);

      if (response.status === 200) {
        const { message, token } = response.data;

        setMessage(message || 'Login successful!');

        localStorage.setItem('authToken', token);

      } else {
        setMessage('Unexpected response. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response);
        setMessage(error.response.data.message || 'Failed to log in. Check your credentials.');
      } else if (error.request) {
        console.error('Error request:', error.request);
        setMessage('No response from the server. Please try again later.');
      } else {
        console.error('Error message:', error.message);
        setMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
};

export default Login;



