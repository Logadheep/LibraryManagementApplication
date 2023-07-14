import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const verifyRegister = (data) => {
		data.preventDefault();
		console.log(data);
		// redirect to home page
		// go to home page
		navigate('/dashboard', { replace: true });
	}
	return (
		<div className="login-register">
			<div className="form">
			<form className="form-container" onSubmit={verifyRegister}>
				<h1>Register</h1>
					<div>
						<label>Full Name</label>
						<input required name="fullname" id="fullname" type="text" placeholder="Enter Full Name" />
					</div>
					<div>
						<label>E-Mail Address</label>
						<input required name="email" id="email" type="email" placeholder="Enter E-Mail Address" />
					</div>
					<div>
						<label>Phone </label>
						<input required name="phone" id="phone" type="phone" placeholder="Enter Phone" />
					</div>
					<div>
						<label>Username</label>
						<input required name="username" id="username" type="text" placeholder="Enter Username" />
					</div>
					<div>
						<label>Password</label>
						<input required name="password" id="password" type="password" placeholder="Enter Password" />
					</div>
					<div>
						<label>Confirm Password</label>
						<input required name="confirmpassword" id="confirmpassword" type="password" placeholder="Confirm Password" />
					</div>
					<div>
						<label> Date of Birth </label>
						<input required name="dob" id="dob" type="date" placeholder="Enter Date of Birth" />
					</div>
					<div className="select">
						<label>Gender</label>
						<select required name="gender" id="gender">
							<option selected disabled>Select</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
					</div>
					<div className="select"> 
						<label for="user">Register as </label>
						<p></p>
						<select required name="user" id="user">
							<option selected disabled>Select</option>
							<option value="student">Student</option>
							<option value="teacher">Teacher</option>
							<option value="admin">Admin</option>
						</select>
					</div>
					<button type="submit">Register</button>
			</form>
			<p>Already registered? <Link to="/login">Login</Link></p>
			</div>
		</div>
	)
}

export default Login