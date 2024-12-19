import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();  
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    location: '',
    religion: '',
    hobbies: [],
    education: '',
    profession: '',
    partnerPreferences: {
      ageRange: [],
      education: '',
      religion: '',
      location: ''
    }
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/api/read/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
    setFormData(user);  
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    axios.put(`http://localhost:3000/api/update/${id}`, formData)
      .then(res => {
        setUser(res.data);
        setIsEditing(false);
      })
      .catch(err => console.error(err));
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/api/delete/${id}`)
      .then(() => history.push('/')) 
      .catch(err => console.error(err));
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Location: {user.location}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Profile;

