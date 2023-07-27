import React from 'react';

import DisplayBooks from './components/DisplayBooks';
import Home from './components/Home';
import AddBook from './components/AddBook';
import RequestBook from './components/RequestBook';
import ManageUsers from './components/ManageUsers';
import Login from './components/Login';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import {  BrowserRouter, Route, Routes as Routing } from 'react-router-dom';
import MemberList from './components/MemberList';

const Routes = () => {
  return (
      <Routing>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-book" element={<AddBook/>}></Route>
        <Route path="/request-book" element={<RequestBook/>} />
        <Route path="/manage-users" element={<ManageUsers/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/users" element={<MemberList/>} />
        <Route path="/books" element={<DisplayBooks/>} />
        <Route element={() => <div>404 - Page Not Found</div>} />
      </Routing>
      
  );
};

export default Routes;
