import React from 'react'

const AppFooter = () => {
  return (
    <footer>
        <div className='row'>
            <div className='col-md-4 footerBrand'>
                <h1>Desi Tarka</h1>
                <h6>Taste.Service.Quality</h6>
            </div>
            <div className='col-md-4 footerLinks'>
                <p onClick={() => {window.location.href = "#about"}}>About Us</p>
                <p onClick={() => {window.location.href = "#testimonials"}}>Testimonials</p>
                <p onClick={() => {window.location.href = "/offers"}}>Offers</p>
                <p onClick={() => {window.location.href = "/login"}}>Log In</p>
            </div>
            <div className='col-md-4'>
                <p>Rate us at Zomato and Swiggy</p>
                <p>📍Advant Business Park, Greater Noida, Uttar Pradesh, India</p>
            </div>
        </div>
        <div className='row'>
            ©️ Desi Tarka - Khushaal Sharma 2024
        </div>
    </footer>
  )
}

export default AppFooter
