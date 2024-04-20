import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppNavbar from './AppNavbar.js';
import AppFooter from './AppFooter.js';
import restImg from "../Images/restaurant-interior.jpg";


const Homepage = () => {

  const testimonials = [
    {
      name: "Virat Kohli, Food Enthusiast",
      comment: "I've dined at countless restaurants around the world, but none have left as lasting an impression as Desi Tarka. From the moment you step inside, you're greeted with warmth and hospitality. The menu is a culinary journey, each dish bursting with flavor and creativity. Every visit is a delight, and I can't wait to return for another unforgettable meal."
    },
    {
      name: "Ravi Teja, Local Resident",
      comment: "As a local resident, Desi Tarka has become my go-to spot for any occasion. Whether it's a casual dinner with friends or a special celebration, they never disappoint. The food is consistently delicious, and the service is top-notch. Plus, the cozy ambiance makes you feel right at home. It's no wonder this place has become a beloved fixture in our community."
    },
    {
      name: "Ashneer Grover, Business Traveller",
      comment: "Traveling for work can be exhausting, but discovering Desi Tarka was a true gem. Despite being far from home, dining here feels like a comforting embrace. The menu offers a perfect balance of familiar favorites and enticing surprises. And the staff? Friendly, attentive, and always ready with a recommendation. It's safe to say I'll be making this my regular stop whenever I'm in town."
    }
  ]

  function returnTestimonial() {
    return testimonials.map((testimonial, index) => (
      <div key={index} className='carousel-item'>
        <h6>"{testimonial.comment}"</h6>
        <em>{testimonial.name}</em>
      </div>
    ))
  }

  return (
    <>
        <AppNavbar/>
        <div className='homePage'>
            <section className='home-Section'>
                <div className='homeText'>
                    <h1 className='brand'>Desi Tarka</h1>
                    <p>Where every dish tells a story of India's rich culinary heritage, blending traditional flavors with modern flair to create an unforgettable dining experience</p>
                </div>
            </section>
            <section>
              <div className='row aboutText' id='about'>
                <div className='col-sm-3 restImg'>
                  <img src={restImg} alt='Desi Tarka'/>
                </div>
                <div className='col-sm-9 usText'>
                  <p>
                    At Desi Tarka, we believe that great food starts with the finest ingredients and a commitment to culinary excellence. Our philosophy revolves around creating memorable dining experiences through impeccable service, creative dishes, and a warm, inviting atmosphere. We strive to exceed your expectations with every visit, delivering a feast for the senses that lingers long after the last bite.
                  </p>
                  <p>
                    We are committed to sustainability and supporting local farmers and producers. We source the freshest seasonal ingredients from trusted suppliers, ensuring that each dish not only tantalizes the taste buds but also honors the land from which it came. From farm to table, we take pride in serving you the best nature has to offer.
                  </p>
                </div>
              </div>
              <div className='row location'>
                <h1>Visit Us</h1>
                <p>Advant Business Park, Greater Noida, Uttar Pradesh, India</p>
                <p>Open Hours: 10 a.m. to 10 p.m. (Weekdays), 12 p.m. to 11:30 p.m. (Weekends) </p>
                <p>Open Days: All Week</p>
              </div>
            </section>
            <section id='testimonials'>
              <h2>Testimonials</h2>
              <div id='restTestimonial' className='carousel slide' data-ride="carousel">
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <h6>"As a food critic, I'm constantly on the lookout for culinary excellence, and Desi Tarka delivers just that. Each dish is a masterpiece, showcasing the chef's skill and artistry. The attention to detail is unparalleled, from the presentation to the harmonious flavors. It's evident that every element has been carefully considered. Without a doubt, Desi Tarka has earned its place among the city's culinary elite."</h6>
                    <em>Rakesh Arora, Food Critic</em>
                  </div>
                  {returnTestimonial()}
                </div>
                <a className='carousel-control-prev' href='#restTestimonial' role='button' data-slide="prev">
                  <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                  <span className='sr-only'>Previous</span>
                </a>
                <a className='carousel-control-next' href='#restTestimonial' role='button' data-slide="next">
                  <span className='carousel-control-next-icon' aria-hidden="true"></span>
                  <span className='sr-only'>Next</span>
                </a>
              </div>
          </section>
        </div>
        <AppFooter/>
    </>
  )
}

export default Homepage
