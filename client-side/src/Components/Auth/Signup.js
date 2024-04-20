import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./AuthStyles.css";
import AppFooter from '../AppFooter';
import AppNavbar from '../AppNavbar';


const Signup = () => {
  return(
    <>
      <AppNavbar/>
      <div className='homePage authForm row'>
        <div className='col-md-4 imgArea'>
          <h1>Join</h1>
          <h1>Us</h1>
        </div>
        <div className='col-md-8 formArea'>
          <h3>Sign Up</h3>
          <div>
            <form>
              <input
                name='name'
                type='text'
                placeholder='Your Name'
                required
              />
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
              <input
                name='cnfmPassword'
                type='password'
                placeholder='Confirm Password'
                required
              />

              <a href='/login'>Already have an Account</a>
               
              <button className='btn btn-primary authButton'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <AppFooter/>
    </>
  )  
}

export default Signup
