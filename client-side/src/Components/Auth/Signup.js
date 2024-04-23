import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "./AuthStyles.css";
import AppFooter from '../AppFooter';
import AppNavbar from '../AppNavbar';
import axios from 'axios';


const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [cnfmPassword, setCnfmPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  function checkPassword(){
    const alphaRegex = /[a-zA-Z]/;
    const numRegex = /[0-9]/;
    const specialRegex = /[^a-zA-Z0-9\s]/;

    var isAlpha = alphaRegex.test(formData.password);
    var isNum = numRegex.test(formData.password);
    var isSpecial = specialRegex.test(formData.password);

    if(formData.password.length < 8){
      return false;
    }
    else if(isAlpha && isNum && isSpecial){
      return true;
    }
    else{
      return false;
    }
  }

  useEffect(() => {
    function checkUser(){
      try{
        axios
          .get("http://localhost:5000/auth/check", {
            query: {
              email: formData.email
            },
            withCredentials: true
          })
          .then(response => {
            if(response.status !== 200){
              alert("Account with this username already exists");
            }
          })
          .catch(error => {
            alert("Error connecting to server");
          });
      }
      catch(error){
        console.log("error:"+ error);
      }
    }

    if(formData.email){
      setTimeout(checkUser(), 5000);
    }
  },[formData]);

  const submitForm = (e) => {
    e.preventDefault();

    try{
      if(!checkPassword()){
        alert("Your Password must contain alphabets, numbers and special characters, and should be atleast 8 characters long");
      }
      else if(formData.password !== cnfmPassword){
        alert("Password doesn't match");
      }
      else{
        axios
          .post("http://localhost:5000/auth/register",formData, {withCredentials: true})
          .then(response => {
            if(response.status === 200){
              alert("Account Created Successfully!!!");
              window.location.href = "/home";
            }
            else{
              alert("Invalid Credentials! Try Again");
            }
          })
          .catch(error => {
            alert("Error connecting to server");
            console.log(error);
          }) 
      }
    }
    catch(error){
      alert("Error creating account, try again later");
    }
  }

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
            <form onSubmit={submitForm}>
              <input
                name='name'
                type='text'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name='email'
                type='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name='password'
                type='password'
                placeholder='Your Password'
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                name='cnfmPassword'
                type='password'
                placeholder='Confirm Password'
                value={cnfmPassword}
                onChange={(e) => setCnfmPassword(e.target.value)}
                required
              />

              <a href='/login'>Already have an Account</a>
               
              <button className='btn btn-primary authButton' type='submit'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <AppFooter/>
    </>
  )  
}

export default Signup
