import { Link } from '@mui/material'
import {setState, useState} from 'react';
import React from 'react'
import './NavBar.css'

const NavBar = () => {
	const [loggedIn, setLoggedIn] = useState(false)
	return (
	<>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">Navbar</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link" href="/">Home</a>
						<a className="nav-link" href="/about">About</a>
						<a className="nav-link" href="/request">Request</a>
						<a className="nav-link" href="/login">{loggedIn?"Logout":"Login"}</a>
					</div>
				</div>
			</div>
		</nav>
	</>
  )
}

export default NavBar