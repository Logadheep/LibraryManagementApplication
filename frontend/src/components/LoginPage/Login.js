import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
	const navigate = useNavigate();
	const verifyLogin = (data) => {
		data.preventDefault();
		console.log(data);
		// redirect to home page
		// go to home page
		navigate('/dashboard', { replace: true });
	}
	return (
		<div className="login-register">
			<div className="form">
			<form className="form-container" onSubmit={verifyLogin}>
				<h1>Login</h1>
					<div>
						<label htmlFor="username">Username</label>
						<input required name="username" id="username" type="text" placeholder="Enter Username" />
					</div>
					<div>
						<label htmlFor='password'>Password</label>
						<input required name="password" id="password" type="password" placeholder="Enter Password" />
					</div>
					<div className="loginType"> 
						<label htmlFor="user">Logging in as </label>
						<p></p>
						<select name="user" id="user">
							<option defaultChecked disabled>Select</option>
							<option value="student">Student</option>
							<option value="teacher">Teacher</option>
							<option value="admin">Admin</option>
						</select>
					</div>
					<button type="submit">Login</button>
			</form>
			<p>New to the library? <Link to="/register">Register</Link></p>
			</div>
		</div>
	)
}

export default Login