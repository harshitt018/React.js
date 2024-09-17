import React from 'react';
import './Guide.css';

// Import images
import icon1 from '../../Assets/sq.jpg';
import icon2 from '../../Assets/makepayment.jpg';
import icon3 from '../../Assets/car.jpg';
import image1 from '../../Assets/img1.png';

const Guide = () => {
    return (
        <div className='Guide container section'>
            <div className="secContainer flex">
                <div className="textDiv grid">
                    <div className="secHeader">
                        <span>Easy and Fast</span>
                        <h2>Book Your Next Trip</h2>
                    </div>

                    <div className="secContent grid">
                        <div className="singleSection flex">
                            <img src={icon1} alt="Make a Choice Icon" />
                            <div className="text">
                                <span>Make a Choice</span>
                                <p>
                                    "Explore a world of possibilities. Choose the perfect destination 
                                    that matches your dreams and desires, and set the course for a 
                                    memorable journey."
                                </p>
                            </div>
                        </div>

                        <div className="singleSection flex">
                            <img src={icon2} alt="Payment Icon" style={{width: '90px'}} />
                            <div className="text">
                                <span>Make Payment</span>
                                <p>
                                    "Secure your adventure with ease. Our simple payment process ensures 
                                    that you can confirm your booking swiftly and confidently."
                                </p>
                            </div>
                        </div>

                        <div className="singleSection flex">
                            <img src={icon3} alt="Travel Services Icon" />
                            <div className="text">
                                <span>Travel Services</span>
                                <p>
                                    "From comfortable transport to expert guidance, our comprehensive 
                                    travel services are designed to make your trip seamless and enjoyable."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imgDiv">
                    <img src={image1} alt="Travel" />
                </div>
            </div>
        </div>
    );
};

export default Guide;
