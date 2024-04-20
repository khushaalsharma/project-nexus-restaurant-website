import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./offerStyles.css";

const OfferCard = ({data}) => {
  return (
    <div className='offerCard'>
        <div className='offerImg'>
            <img src={data.image} alt='food'/>
        </div>
        <div>
            <h4>{data.name}</h4>
            <p>
                {data.details}
            </p>
            <button className='btn btn-danger offerbtn' onClick={() => {window.location.href = "/login"}}>
                {data.type}
            </button>
        </div>
    </div>
  )
}

export default OfferCard
