import React from 'react';
import './Sponsors.css'; 

// Import images
import logo1 from '../../Assets/Makemytrip.jpg';
import logo2 from '../../Assets/Sitejet.jpg';
import logo3 from '../../Assets/tripkeep.jpg';
import logo4 from '../../Assets/Yatra.jpg';

const Sponsors = () => {
    return (
        <div className='Sponsors container'> 
            <h2 className='sponsorsTitle'>Our Sponsors</h2>
            <div className="logos flex">
                <div className="logoItem" data-tooltip="MakeMyTrip">
                    <img src={logo1} alt="MakeMyTrip Logo" /> 
                </div>
                <div className="logoItem" data-tooltip="Sitejet">
                    <img src={logo2} alt="Sitejet Logo" /> 
                </div>
                <div className="logoItem" data-tooltip="TripKeep">
                    <img src={logo3} alt="TripKeep Logo" /> 
                </div>
                <div className="logoItem" data-tooltip="Yatra">
                    <img src={logo4} alt="Yatra Logo" /> 
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
