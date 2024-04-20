import React from 'react';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import OfferCard from './OfferCard';

//images
import daal from "../Images/dalmakhani.jpg";
import dosa from "../Images/dosa.jpg";
import delivery from "../Images/delivery.jpg";
import child from "../Images/kidsparty.jpg";
import couple from "../Images/happyCouple.jpg";
import gather from "../Images/gathering.jpg";


const OffersPage = () => {
  
    const offers = [
        {
            image: daal,
            name: "Makhani Mondays",
            details: "Get our speciality - Dal Makhani just @199 every Monday",
            type: "Order Now"
        }, 
        {
            image: dosa,
            name: "Dosa Day",
            details: "Choose out of 20 varieties of Dosas every Friday, beginning @149",
            type: "Order Now"
        }, 
        {
            image: delivery,
            name: "Free Home Delivery",
            details: "Free delivery for order amount of more than 200",
            type: "Order Now"
        }
    ]

    const service = [
        {
            image: child,
            name: "Children's Party",
            details: "Get your kids a great party with Desi Tarks's kids plan",
            type: "Book Now"
        },
        {
            image: couple,
            name: "Couple's Night",
            details: "Give your loved ones a personalised romantic evening with Desi Tarka's Couple's Plan",
            type: "Book Now"
        },
        {
            image: gather,
            name: "Social Gathering",
            details: "Be it 4 people or 40, Desi Tarka has arrangement for all types of gatherings",
            type: "Book Now"
        }
    ]

    const offerReturn = () =>{
        return offers.map((offer,index) => (
            <div className='col-md-4'>
                <OfferCard key={index} data={offer}/>
            </div>
        ))
    }

    const serviceReturn = () => {
        return service.map((serv, index) => (
            <div className='col-md-4'>
                <OfferCard key={index} data={serv}/>
            </div>
        ))
    }
  return (
    <>
        <AppNavbar/>
        <div className='homePage offerPage'>
            <h1>Existing Offers</h1>
            <div className='row '>
                {offerReturn()}
            </div>
            <h1>Our Services</h1>
            <div className='row'>
                {serviceReturn()}
            </div>
        </div>
        <AppFooter/>
    </>
  )
}

export default OffersPage
