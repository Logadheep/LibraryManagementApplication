import React from 'react'
import "./RequestForm.css"
import { useNavigate } from 'react-router-dom';
//importing acios for xmlhttpreqest
import axios from 'axios';



const RequestForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    // redirect to home page
    // go to home page
    window.alert("Request Submitted")
    axios.send('http://localhost:8080/request', e)
    navigate('/dashboard', { replace: true });
  }
  return (
    <div className="request-form-page">
    <form className="request-form-container" onSubmit={handleSubmit}>
      <h1>Request Form</h1>
      <p> Please fill in the form below to request a book. </p>
          <label for="name">Name:</label><br/>
          <input type="text" id="name" name="name" placeholder="Your name.."/><br/>
          <label for="email">Email:</label><br/>
          <input type="text" id="email" name="email" placeholder="Your email.."/><br/>
          <label for="book">Book:</label><br/>
          <input type="text" id="book" name="book" placeholder="Book name.."/><br/>
          <label for="author">Author:</label><br/>
          <input type="text" id="author" name="author" placeholder="Author name.."/><br/>
          <label for="publisher">Publisher:</label><br/>
          <input type="text" id="publisher" name="publisher" placeholder="Publisher name.."/><br/>
          <label for="year">Year:</label><br/>
          <input type="text" id="year" name="year" placeholder="Year of publication.."/><br/>
          <label for="isbn">ISBN:</label><br/>
          <input type="text" id="isbn" name="isbn" placeholder="ISBN number.."/><br/>
          <label for="description">Description:</label><br/>
          <textarea id="description" name="description" placeholder="Write something.." style={{height:"200px"}}></textarea><br/>
          <button type="submit" value="Submit"> Submit </button>
        </form>
    </div>
  )
}

export default RequestForm