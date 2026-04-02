import React from 'react';
import './Stats.css';

function Stats() {
    const stats = [
        {
            label: 'Total Users',
            value: '2.5M+',
            description: 'Active traders and investors'
        },
        {
            label: 'Assets Managed',
            value: '₹50,000Cr+',
            description: 'Under management'
        },
        {
            label: 'Daily Trades',
            value: '500K+',
            description: 'Average transactions'
        },
        {
            label: 'Market Share',
            value: '15%+',
            description: 'India\'s retail volumes'
        }
    ];

    return (
        <section className='stats-section'>
            <div className='container py-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <div className='stats-chart'>
                            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="300" fill="#f8f9fa"/>
                                <line x1="50" y1="250" x2="380" y2="250" stroke="#0066cc" strokeWidth="2"/>
                                <line x1="50" y1="250" x2="50" y2="20" stroke="#0066cc" strokeWidth="2"/>
                                <rect x="70" y="180" width="40" height="70" fill="#0066cc" opacity="0.7"/>
                                <rect x="120" y="140" width="40" height="110" fill="#0066cc" opacity="0.8"/>
                                <rect x="170" y="100" width="40" height="150" fill="#0066cc" opacity="0.9"/>
                                <rect x="220" y="60" width="40" height="190" fill="#0066cc"/>
                                <rect x="270" y="120" width="40" height="130" fill="#0066cc" opacity="0.8"/>
                                <rect x="320" y="160" width="40" height="90" fill="#0066cc" opacity="0.7"/>
                            </svg>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='row g-4'>
                            {stats.map((stat, index) => (
                                <div className='col-md-6' key={index}>
                                    <div className='stat-card'>
                                        <h3 className='stat-value'>{stat.value}</h3>
                                        <h5 className='stat-label'>{stat.label}</h5>
                                        <p className='stat-description'>{stat.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;