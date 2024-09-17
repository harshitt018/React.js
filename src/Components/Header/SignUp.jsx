// signup.jsx
import React, { useState } from 'react';
import './Auth.css'; 

const Signup = ({ onSwitch, onSignUpComplete }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password === confirmPassword) {
            onSignUpComplete();
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Sign Up</button>
                <p>Already have an account? <button onClick={onSwitch}>Login</button></p>
            </form>
        </div>
    );
};

export default Signup;
