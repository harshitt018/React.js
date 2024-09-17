import React from 'react';
import './Subscribe.css'; 

// Import icon
import { HiOutlineMail } from 'react-icons/hi'; 

const Subscribe = () => { 
    return (
        <div className="Subscribe container section">
            <div className="secContent grids"> 
                <h1>Subscribe for latest news and interesting offers!</h1> 
                <div className="inputDiv flex"> 
                    <div className="input flex"> 
                        <HiOutlineMail className="icon" /> 
                        <input type="text" placeholder="Your email" /> 
                    </div>
                    <button className="btn">Subscribe</button> 
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
