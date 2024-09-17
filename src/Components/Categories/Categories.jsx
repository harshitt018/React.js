import React from 'react';
import './Categories.css';

// Import images
import satellite from "../../Assets/satellite.png";
import aeroplane from "../../Assets/Plane.png";
import mic from "../../Assets/mic.png";
import settings from "../../Assets/setting.png";
import rec from "../../Assets/rec.png";

const Categories = () => {
  return (
    <div className="Categories container section">
      <div className="secHeader">
        <span>Categories</span>
        <h2>We Offer the Best Services</h2>
      </div>

      <div className="secContainer">
        {/* First card */}
        <div className="singleCard">
          <div className="imgDiv">
            <img src={satellite} alt="Satellite" className="mainImage" />
            <img src={rec} alt="Decoration" className="design" />
          </div>
          <span className="cardTitle">Calculated Weather</span>
          <p className="cardDescription">Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>

        {/* Second card */}
        <div className="singleCard">
          <div className="imgDiv">
            <img src={aeroplane} alt="Aeroplane" className="mainImage" />
            <img src={rec} alt="Decoration" className="design" />
          </div>
          <span className="cardTitle">Best Flight</span>
          <p className="cardDescription">Engrossed listening. Park gate all they went hard for the great evening.</p>
        </div>

        {/* Third card */}
        <div className="singleCard">
          <div className="imgDiv">
            <img src={mic} alt="Microphone" className="mainImage" />
            <img src={rec} alt="Decoration" className="design" />
          </div>
          <span className="cardTitle">Live Audio Assistance</span>
          <p className="cardDescription">Receive real-time audio guidance with our premium service.</p>
        </div>

        {/* Fourth card */}
        <div className="singleCard">
          <div className="imgDiv">
            <img src={settings} alt="Settings" className="mainImage" style={{width: '80px', height: '80px'}} />
            <img src={rec} alt="Decoration" className="design" />
          </div>
          <span className="cardTitle">Advanced Settings</span>
          <p className="cardDescription">Customize your experience with advanced configurations.</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
