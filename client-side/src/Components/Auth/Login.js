import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import AppNavbar from '../AppNavbar';
import AppFooter from '../AppFooter';
import "./AuthStyles.css"
import axios from 'axios';

const Login = () => {

  const [formData, setFormData] = useState({
    "email": "",
    "password": ""
  });

  const handleChange = (e) => {
    e.preventDefault();

    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(e){
    e.preventDefault();
    
    try{
      axios
        .post("http://localhost:5000/auth/login", formData, {withCredentials: true})
        .then(response => {
          if(response.status === 200){
            alert("Login Successful");
            window.location.href = "/home";
          }
          else if(response.status === 205){
            alert("Wrong Credentials");
          }
          else if(response.status === 204){
            alert("Wrong Password");
          }
        })
        .catch(error => {
          alert("Error connecting to server");
        })
    }
    catch(error){
      alert("Error connecting to server");
    }
  }

  return (
    <>
      <AppNavbar/>
      <div className='homePage authForm row'>
        <div className='col-md-4 imgArea'>
          <h1>Welcome</h1>
          <h1>Back</h1>
        </div>
        <div className='col-md-8 formArea'>
          <h3>Log In</h3>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                name='email'
                type='email'
                placeholder='Your Email'
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                name='password'
                type='password'
                placeholder='Your Password'
                required
                value={formData.password}
                onChange={handleChange}
              />

              <a href='/signup'>Don't have an Account</a>
               
              <button className='btn btn-primary authButton' type='submit'>Log In</button>
            </form>
          </div>
        </div>
      </div>
      <AppFooter/>
    </>
  )
}

export default Login
