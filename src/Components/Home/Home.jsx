import React from 'react';
import './Home.css';

//Import image
import MainImage from '../../Assets/Main Model.png';
import aeroplane from '../../Assets/Plane.png';

//Import Icon
import { FaPlay } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="Home container section">
            <div className="textDiv grid">
                <span className="redText">Best Destinations around the world</span>
                <h2>Travel, enjoy and live a new and full life</h2>
                <p>
                    Discover the world's most stunning destinations and immerse yourself in vibrant cultures. 
                    From pristine beaches to bustling cityscapes, our curated travel experiences offer something 
                    for every wanderlust soul. Embrace adventure, create unforgettable memories, and rejuvenate your spirit 
                    as you explore the globe like never before.
                </p>
                <div className="buttons flex">
                    <button className="btn">Find More</button>
                    <div className="playBtn flex">
                        <FaPlay className="icon" />
                        <span>Play Demo</span>
                    </div>
                </div>
            </div>
            <div className="imgDiv flex">
                <img src={MainImage} alt="MainImage" />
            </div>
                <img src={aeroplane} alt="aeroplane Image" className="aeroplane"/>
        </div>
    );
};

export default Home;
