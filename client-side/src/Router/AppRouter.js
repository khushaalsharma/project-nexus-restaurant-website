import React from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Homepage from '../Components/Homepage.js';
import Login from '../Components/Auth/Login.js';
import Signup from '../Components/Auth/Signup.js';
import OffersPage from '../Components/OffersPage.js';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={Homepage} />
            <Route path='/login' Component={Login} />
            <Route path='/signup' Component={Signup} />
            <Route path='/offers' Component={OffersPage} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
