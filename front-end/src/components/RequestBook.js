// components/RequestBook.js

import React, { useState } from 'react';

const RequestBook = () => {
  const [formData, setFormData] = useState({ title: '', author: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement Redux action to request the book from the library
    console.log('Requesting book:', formData);
    // Reset the form after submission
    setFormData({ title: '', author: '' });
  };

  return (
    <div>
      <h2>Request a Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Request Book</button>
      </form>
    </div>
  );
};

export default RequestBook;
