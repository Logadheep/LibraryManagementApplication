import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const verifyLogin = () => {

}
const Login = () => {
	return (
		<div className="login-register">
			<div className="form">
			<form className="form-container">
				<h1>Login</h1>
					<div>
						<label for="username">Username</label>
						<input required name="username" id="username" type="text" placeholder="Enter Username" />
					</div>
					<div>
						<label>Password</label>
						<input required name="password" id="password" type="password" placeholder="Enter Password" />
					</div>
					<div className="loginType"> 
						<label for="user">Logging in as </label>
						<p></p>
						<select name="user" id="user">
							<option selected disabled>Select</option>
							<option value="student">Student</option>
							<option value="teacher">Teacher</option>
							<option value="admin">Admin</option>
						</select>
					</div>
					<button type="submit" onSubmit={verifyLogin}>Login</button>
			</form>
			<p>New to the library? <Link to="/register">Register</Link></p>
			</div>
		</div>
	)
}

export default Login