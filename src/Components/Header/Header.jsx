import React, { useState, useEffect } from 'react';
import './Header.css';
import './Auth.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import Login from './Login';
import Signup from './SignUp';

const Header = () => {
    const [active, setActive] = useState(false);  
    const [transparent, setTransparent] = useState(false); 
    const [authMode, setAuthMode] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const showNavBar = () => setActive(true);
    const removeShowNavBar = () => setActive(false);

    useEffect(() => {
        const addBg = () => {
            if (window.scrollY >= 10) {
                setTransparent(true);
            } else {
                setTransparent(false);
            }
        };
        window.addEventListener("scroll", addBg);
        return () => window.removeEventListener("scroll", addBg); 
    }, []);

    const switchAuthMode = (mode) => {
        setAuthMode(mode);
    };

    const closeAuthModal = () => {
        setAuthMode(null);
    };

    const handleSignUpComplete = () => {
        setAuthMode('login');
        setShowMessage(true); 
    };

    const handleLoginComplete = () => {
        setAuthMode(null);
        setShowMessage(true); 
    };

    const closeMessageBox = () => {
        setShowMessage(false); 
    };

    return (
        <div className={transparent ? 'Navbar activeHeader' : 'Navbar'}>
            <div className="logoDiv">
                <h2 className="logo">TripyGo</h2>
            </div>

            <div className={active ? 'menu showMenu' : 'menu'}>
                <div className="lists flex">
                    <li><a href="#">Destination</a></li>
                    <li><a href="#">Hotels</a></li>
                    <li><a href="#">Flights</a></li>
                    <li><a href="#">Bookings</a></li>
                </div>

                <div className="btns flex">
                    <button className="btn" onClick={() => switchAuthMode('login')}>Login</button>
                    <button className="btn" onClick={() => switchAuthMode('signup')}>SignUp</button>
                    <select className="lang">
                        <option value="en">EN</option>
                        <option value="fr">FR</option>
                        <option value="sp">SP</option>
                    </select>
                </div>

                <div className="closeIcon" onClick={removeShowNavBar}>
                    <AiFillCloseCircle className="icon" />
                </div>
            </div>

            <div className="toggleIcon" onClick={showNavBar}>
                <TbGridDots className="icon" />
            </div>

            {authMode === 'login' && (
                <div className="auth-modal">
                    <Login onSwitch={() => switchAuthMode('signup')} onLoginComplete={handleLoginComplete} />
                    <button className="close-modal" onClick={closeAuthModal}>Close</button>
                </div>
            )}

            {authMode === 'signup' && (
                <div className="auth-modal">
                    <Signup onSwitch={() => switchAuthMode('login')} onSignUpComplete={handleSignUpComplete} />
                    <button className="close-modal" onClick={closeAuthModal}>Close</button>
                </div>
            )}

            {showMessage && (
                <div className="message-box show">
                    <p>{authMode === 'login' ? 'You signed up successfully! You can now log in.' : 'You logged in successfully!'}</p>
                    <button onClick={closeMessageBox}>OK</button>
                </div>
            )}
        </div>
    );
};

export default Header;
