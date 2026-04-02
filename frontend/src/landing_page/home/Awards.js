import React from 'react';
import './Awards.css';

function Awards() {
    const awards = [
        {
            title: 'Best Trading Platform',
            year: '2024',
            issuer: 'Trading Excellence Awards'
        },
        {
            title: 'Most Innovative Fintech',
            year: '2024',
            issuer: 'Indian Fintech Association'
        },
        {
            title: 'Customer Choice Award',
            year: '2023',
            issuer: 'Financial Times'
        },
        {
            title: 'Best Mobile App',
            year: '2023',
            issuer: 'Tech Innovation Awards'
        },
        {
            title: 'Fastest Growing Broker',
            year: '2023',
            issuer: 'Stock Market Excellence'
        },
        {
            title: 'Best User Experience',
            year: '2022',
            issuer: 'UX Design Awards'
        }
    ];

    return (
        <section className='awards-section'>
            <div className='container py-5'>
                <h2 className='section-title text-center mb-5'>Awards & Recognition</h2>
                <div className='row g-4'>
                    {awards.map((award, index) => (
                        <div className='col-md-6 col-lg-4' key={index}>
                            <div className='award-card'>
                                <div className='award-icon'>🏆</div>
                                <h5 className='award-title'>{award.title}</h5>
                                <p className='award-issuer'>{award.issuer}</p>
                                <p className='award-year'>{award.year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Awards;