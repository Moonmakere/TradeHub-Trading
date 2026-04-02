import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-section'>
            <div className='container-fluid'>
                <div className='row align-items-center py-5 px-5'>
                    <div className='col-lg-6'>
                        <h1 className='hero-title'>Invest in Everything</h1>
                        <p className='hero-subtitle'>Online platform to invest in stocks, derivatives, mutual funds, and more. Start your investment journey with minimal fees and maximum transparency.</p>
                        <div className='cta-buttons'>
                            <Link to="/signup" className='btn btn-primary btn-lg me-3'>Sign Up Now</Link>
                            <Link to="/products" className='btn btn-outline-primary btn-lg'>Learn More</Link>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='hero-image-placeholder'>
                            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <rect width="300" height="300" fill="#f0f0f0"/>
                                <circle cx="150" cy="100" r="50" fill="#0066cc"/>
                                <path d="M 100 200 L 150 150 L 200 180 L 250 120" stroke="#0066cc" strokeWidth="3" fill="none"/>
                                <circle cx="100" cy="200" r="3" fill="#0066cc"/>
                                <circle cx="150" cy="150" r="3" fill="#0066cc"/>
                                <circle cx="200" cy="180" r="3" fill="#0066cc"/>
                                <circle cx="250" cy="120" r="3" fill="#0066cc"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;