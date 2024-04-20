import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./AppStyles.css";

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <h2 className='navbar-brand restBrand' onClick={() => {window.location.href = "/"}}>Desi Tarka</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarOptions">
                <li className="nav-item" onClick={() => {window.location.href = "#about"}}> 
                    <p>About Desi Tarka</p>
                </li>
                <li className="nav-item" onClick={() => {window.location.href = "#testimonials"}}>
                    <p>Testimonials</p>
                </li>
                <li className="nav-item" onClick={() => {window.location.href = "/offers"}}>
                    <p>Offers</p>
                </li>
                <li className='nav-item authBtns'>
                    <button className='btn btn-primary' onClick={() => {window.location.href = "/login"}}>Log In</button>
                    <button className='btn btn-primary' onClick={() => {window.location.href = "/signup"}}>Sign Up</button>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default AppNavbar
