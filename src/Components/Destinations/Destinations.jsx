import React from 'react';
import './Destinations.css';

// Import Images
import goa from '../../Assets/Goa.png';
import paris from '../../Assets/Paris.jpg';
import london from '../../Assets/London.jpg';
import japan from '../../Assets/Japan.jpg';
import dubai from '../../Assets/Dubai.jpg';
import ny from '../../Assets/NewYork.jpg';

// Import Icons
import { FaLocationArrow } from 'react-icons/fa';

const Destinations = () => {
    return (
        <div className="Destinations container section">
            <div className="secHeader">
                <span>Top Selling</span>
                <h2>Top Destinations</h2>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={goa} alt="Goa" />
                    </div>
                    <div className="infoDiv">
                        <div className="upperSpan flex">
                            <span className="location">Goa, India</span>
                            <span className="amount">₹32.5k</span>
                        </div>
                        <div className="lowerSpan flex">
                            <FaLocationArrow className="icon" />
                            <div className="distance">10 Days Trip</div>
                        </div>
                        <p className="description">
                            Discover the vibrant beaches, rich culture, and stunning landscapes of Goa. 
                            Known for its lively nightlife, Portuguese heritage, and delicious seafood, 
                            Goa is the perfect destination for a memorable getaway.
                        </p>
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={paris} alt="Paris" />
                    </div>
                    <div className="infoDiv">
                        <div className="upperSpan flex">
                            <span className="location">Paris, France</span>
                            <span className="amount">₹2.45L</span>
                        </div>
                        <div className="lowerSpan flex">
                            <FaLocationArrow className="icon" />
                            <div className="distance">15 Days Trip</div>
                        </div>
                        <p className="description">
                            Immerse yourself in the romance and charm of Paris, the City of Light. 
                            Explore iconic landmarks such as the Eiffel Tower and the Louvre, stroll through picturesque streets, 
                            and savor world-class cuisine in charming cafés. Paris offers an unforgettable blend of history, culture, 
                            and sophistication.
                        </p>
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={london} alt="London" />
                    </div>
                    <div className="infoDiv">
                        <div className="upperSpan flex">
                            <span className="location">London, England</span>
                            <span className="amount">₹3.5L</span>
                        </div>
                        <div className="lowerSpan flex">
                            <FaLocationArrow className="icon" />
                            <div className="distance">16 Days Trip</div>
                        </div>
                        <p className="description">
                            Experience the rich history and vibrant culture of London, a city that seamlessly blends tradition with modernity. 
                            From the historic Tower of London and Buckingham Palace to the dynamic West End theatres and trendy markets, 
                            London offers an exciting array of attractions and experiences.
                        </p>
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={japan} alt="Tokyo" />
                    </div>
                    <div className="infoDiv">
                        <div className="upperSpan flex">
                            <span className="location">Tokyo, Japan</span>
                            <span className="amount">₹2.01L</span>
                        </div>
                        <div className="lowerSpan flex">
                            <FaLocationArrow className="icon" />
                            <div className="distance">15 Days Trip</div>
                        </div>
                        <p className="description">
                            Dive into the vibrant energy and unique culture of Tokyo, Japan's bustling capital. 
                            From futuristic skyscrapers and traditional temples to exquisite cuisine and shopping districts, 
                            Tokyo offers an unforgettable journey through a city where the old meets the new in perfect harmony.
                        </p>
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={dubai} alt="Dubai" />
                    </div>
                    <div className="infoDiv">
                        <div className="upperSpan flex">
                            <span className="location">Dubai, UAE</span>
                            <span className="amount">₹5L</span>
                        </div>
                        <div className="lowerSpan flex">
                            <FaLocationArrow className="icon" />
                            <div className="distance">30 Days Trip</div>
                        </div>
                        <p className="description">
                            Experience the dazzling modernity and luxury of Dubai, a city of innovation and extravagance. 
                            From the towering Burj Khalifa and luxury shopping malls to pristine beaches and bustling souks, 
                            Dubai offers a blend of high-tech marvels and traditional Arabian charm that is truly unforgettable.
                        </p>
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCard grid">
                    <div className="imgDiv">
                        <img src={ny} alt="New York" />
                    </div>
                    <div className="infoDiv">
                        <div className="upperSpan flex">
                            <span className="location">New York, U.S.A</span>
                            <span className="amount">₹3.2L</span>
                        </div>
                        <div className="lowerSpan flex">
                            <FaLocationArrow className="icon" />
                            <div className="distance">15 Days Trip</div>
                        </div>
                        <p className="description">
                            Explore the bustling metropolis of New York City, where iconic landmarks like Times Square, 
                            Central Park, and the Statue of Liberty await. Enjoy world-class museums, Broadway shows, 
                            and a diverse culinary scene that captures the essence of this vibrant city that never sleeps.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
