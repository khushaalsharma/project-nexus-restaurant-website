import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import AppNavbar from '../AppNavbar';
import AppFooter from '../AppFooter';
import "./AuthStyles.css"

const Login = () => {
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
            <form>
              <input
                name='email'
                type='email'
                placeholder='Your Email'
                required
              />
              <input
                name='password'
                type='password'
                placeholder='Your Password'
                required
              />

              <a href='/signup'>Don't have an Account</a>
               
              <button className='btn btn-primary authButton'>Log In</button>
            </form>
          </div>
        </div>
      </div>
      <AppFooter/>
    </>
  )
}

export default Login
