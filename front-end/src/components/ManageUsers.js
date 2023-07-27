// components/ManageUsers.js

import React, { useState } from 'react';

const ManageUsers = () => {
  const [formData, setFormData] = useState({ username: '', type: 'student' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement Redux action to add or remove a member from the library
    console.log('Managing user:', formData);
    // Reset the form after submission
    setFormData({ username: '', type: 'student' });
  };

  return (
    <div className="manage-user-container">
      <h2>Manage Library Members</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">User Type</label>
          <select id="type" name="type" value={formData.type} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
          </select>
        </div>
        <button type="submit">Add/Remove Member</button>
      </form>
    </div>
  );
};

export default ManageUsers;
