import { setState, useState } from 'react'
import React from 'react'
import Profile from '../components/Profile/Profile'
import './NavBar.css'
import Search from '../components/Search/Search'

const searchbutton =
	<svg width="25" height="30" xmlns="http://www.w3.org/2000/svg">
		<g>
			<g>
				<path d="m3.14382,0l15.15322,0c0.3331,0 0.60525,0.3353 0.60525,0.74557l0,9.27679c-1.15145,-0.71605 -2.43394,-1.09858 -3.75147,-1.09858c-1.12554,0 -2.20211,0.27627 -3.18318,0.77803a8.29081,10.1968 0 0 0 -2.70129,2.22253c-2.16612,2.66291 -2.96287,6.60031 -2.08836,10.17997l-4.25736,0c-0.91195,0 -1.65735,0.91794 -1.65735,2.03836c0,1.1216 0.74636,2.03895 1.65735,2.03895l6.17197,0l0.17279,0.21842c0.39214,0.48229 0.81835,0.91086 1.27241,1.28275l-7.55429,0c-1.64103,0 -2.98351,-1.65052 -2.98351,-3.6688l0,-20.14684c0,-2.1269 1.41448,-3.86715 3.14382,-3.86715zm12.19035,10.92672c1.8311,0 3.58012,0.89137 4.8746,2.48286c1.78838,2.19951 2.45362,5.44211 1.73318,8.41906a6.85295,8.42839 0 0 1 -0.70028,1.94922l2.67009,3.57908a0.3308,0.40684 0 0 1 -0.0192,0.5732l-1.96069,2.20187c-0.13391,0.15112 -0.34222,0.13931 -0.46509,-0.02538l-2.55393,-3.45511c-1.08138,0.8105 -2.31203,1.23317 -3.57868,1.23317c-1.8311,0 -3.58012,-0.89137 -4.8746,-2.48345a6.90551,8.49303 0 0 1 -1.49607,-2.75323c-1.06842,-3.16527 -0.46125,-6.82994 1.49703,-9.23724c0.63308,-0.7804 1.39192,-1.40967 2.23715,-1.84001c0.81307,-0.41558 1.70438,-0.64403 2.63649,-0.64403zm3.8897,3.69478c-1.56999,-1.93151 -3.9497,-2.51179 -5.99438,-1.46988c-3.66891,1.86835 -4.51174,7.68648 -1.78598,11.03711c1.57287,1.92974 3.9473,2.51297 5.99486,1.47047c2.05812,-1.05135 3.39629,-3.51355 3.39629,-6.25379c0,-0.91794 -0.14735,-1.79338 -0.41518,-2.58735c-0.27934,-0.82644 -0.6878,-1.57201 -1.19561,-2.19656zm-16.43187,9.94031l5.12035,0l0.09119,0.17237c0.11231,0.20543 0.22991,0.40555 0.3523,0.59976l-5.56384,0c-0.13199,0 -0.24095,-0.13282 -0.24095,-0.29575l0,-0.18005c0,-0.16234 0.10799,-0.29634 0.24095,-0.29634zm0,-1.52891l4.46231,0c0.08975,0.26151 0.18959,0.51948 0.29902,0.77213l-4.76133,0c-0.13199,0 -0.24095,-0.13282 -0.24095,-0.29575l0,-0.18005c0,-0.16352 0.10799,-0.29634 0.24095,-0.29634zm0.93595,-20.01461l0.52365,0c0.2683,0 0.48717,0.21783 0.48717,0.48465l0,15.2006c0,0.26623 -0.21935,0.48406 -0.48717,0.48406l-0.52365,0c-0.26782,0 -0.48669,-0.21783 -0.48669,-0.48406l0,-15.20119c0,-0.26623 0.21887,-0.48406 0.48669,-0.48406z" />
			</g>
		</g>
	</svg>
const NavBar = () => {
	const openProfileMenu = (e) => {
		e.preventDefault()
		const profile_Menu = document.getElementById('profileMenu');
		if(profile_Menu.style.display === "none")
		profile_Menu.style.display = "block";
		else
		profile_Menu.style.display = "none";
	}
	const [loggedIn, setLoggedIn] = useState(false)
	const activateSearch = (e) => {
		e.preventDefault()
		const search = document.querySelector('.search')
		if (loggedIn) {
			//make search block active
			search.style.display = "block";
		}
		else {	
			alert("Please login to search for books")
		}
	}
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">LMS</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<input type="search" placeholder="Search books" className="search-bar" /><button onClick={activateSearch} className="search-btn">{searchbutton}</button>
							
							<a className="nav-link" href="/dashboard">Dashboard</a>
							<a className="nav-link" href="/about">About</a>
							<a className="nav-link" href="/request">Request</a>
							<button className="nav-link profile-img" onClick={openProfileMenu}><Profile/></button>
							<div id="profileMenu" className="profile-Menu">
								<a className="nav-link" href="/profile">Profile</a>
								<a className="nav-link" href="/login">Logout</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default NavBar