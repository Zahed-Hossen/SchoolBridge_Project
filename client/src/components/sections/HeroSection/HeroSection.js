import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Welcome to SchoolBridge: Redefining School Operations</h1>
                <p>One platform to streamline classroom management, enhance communication, and drive academic success.</p>
                <div className="cta-buttons">
                    <button className="btn-primary">Sign Up Now — Join Thousands of Happy Users!</button>
                    <button className="btn-secondary">Log In to Your Account</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="path/to/hero-image.jpg" alt="Illustration of SchoolBridge dashboard" />
            </div>
        </section>
    );
};

export default HeroSection;