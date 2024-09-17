import React from 'react';
import './Footer.css'; 

// Import icons
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

// Import images
import image1 from '../../Assets/Google Play.jpg'; 
import image2 from '../../Assets/astore.jpg'; 

const Footer = () => {
    return (
        <div className="Footer container"> 
            <div className="secContainer grid">
                <div className="singleSection">
                    <h2>TripyGo</h2>
                    <p>Book your trip in minutes, get full control for much longer.</p>
                </div>

                <div className="singleSection">
                    <h3>Company</h3>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Support</li>
                </div>

                <div className="singleSection">
                    <h3>Contact</h3>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Hotels</li>
                </div>

                <div className="singleSection">
                    <h3>More</h3>
                        <li>Guidelines</li>
                        <li>Insurance</li>
                        <li>Terms of Service</li>
                </div>

                <div className="singleSection">
                    <div className="social flex">
                        <AiFillInstagram className='icon'/>
                        <BiLogoFacebookCircle className='icon'/>
                        <AiFillTwitterCircle className='icon'/>
                        <BsYoutube className='icon'/>
                    </div>
                    <span className="text">Discover Our App</span> 
                    <div className="flex"> 
                        <img src={image1} alt="Google Play Store" style={{width:'180px'}}/>
                        <img src={image2} alt="Apple Store" style={{width:'200px'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
