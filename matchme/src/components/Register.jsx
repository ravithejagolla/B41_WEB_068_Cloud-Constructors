import React, { useState } from 'react';
import axios from 'axios';
import '../styles/auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    location: '',
    religion: '',
    hobbies: '',
    education: '',
    profession: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      setMessage('Registration successful!');
      console.log(response.data); 
    } catch (error) {
      console.error(error);
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="religion"
          placeholder="Religion"
          value={formData.religion}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="hobbies"
          placeholder="Hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={formData.profession}
          onChange={handleChange}
          required
        />
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
        <button type="submit" className="btn">Register</button>
      </form>
      {message && <p>{message}</p>}
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Register;

