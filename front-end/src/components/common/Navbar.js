// components/common/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Book List</Link>
        </li>
        <li>
          <Link to="/add-book">Add Book</Link>
        </li>
        <li>
          <Link to="/request-book">Request Book</Link>
        </li>
        <li>
          <Link to="/manage-users">Manage Users</Link>
        </li>
        <li>
          <Link to="/users">Member List</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register new member</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
