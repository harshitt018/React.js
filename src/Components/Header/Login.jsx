// Login.jsx
import React, { useState } from 'react';
import './Auth.css'; 

const Login = ({ onSwitch, onLoginComplete }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLoginComplete(); 
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
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
                <button type="submit" className="btn">Login</button>
                <p>Don't have an account? <button onClick={onSwitch}>Sign Up</button></p>
            </form>
        </div>
    );
};

export default Login;
