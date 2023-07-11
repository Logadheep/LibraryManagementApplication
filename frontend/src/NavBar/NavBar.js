import React from 'react'
import {stack as Menu} from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <Menu className="navbar">
            <div className="navbar-container">
                <Link to="/">
                    Library Management System
                </Link>
                <Link to="/">
                    Library Management System
                </Link>
            </div>
        </Menu>
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/login">  
                    Login 
                </Link>
            </div>
            <div className="navbar-container">
                <Link to="/register" >
                    Register
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar