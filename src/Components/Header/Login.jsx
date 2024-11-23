import React, { useState } from 'react';
import './Auth.css'; 

const Login = ({ onSwitch, onLoginComplete }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/Login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                onLoginComplete(); // Handle successful login
            } else {
                setError(data.message); // Display error if login fails
            }
        } catch (err) {
            setError('Error connecting to the server');
        }
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
                {error && <p className="error">{error}</p>} {/* Display error message */}
                <p>Don't have an account? <button onClick={onSwitch}>Sign Up</button></p>
            </form>
        </div>
    );
};

export default Login;
