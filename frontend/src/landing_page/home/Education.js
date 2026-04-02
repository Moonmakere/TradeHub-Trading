import React from 'react';
import './Education.css';

function Education() {
    const resources = [
        {
            title: 'Stock Market Basics',
            description: 'Learn the fundamentals of stock market investing',
            modules: 15,
            type: 'Beginner'
        },
        {
            title: 'Technical Analysis',
            description: 'Master chart reading and technical indicators',
            modules: 25,
            type: 'Intermediate'
        },
        {
            title: 'Advanced Trading',
            description: 'Explore strategies for experienced traders',
            modules: 30,
            type: 'Advanced'
        },
        {
            title: 'Market Psychology',
            description: 'Understand emotional aspects of trading',
            modules: 12,
            type: 'Intermediate'
        }
    ];

    return (
        <section className='education-section'>
            <div className='container py-5'>
                <h2 className='section-title text-center mb-5'>Learn & Grow</h2>
                <p className='text-center mb-5 education-intro'>Access free, comprehensive resources to improve your trading and investment skills.</p>
                <div className='row g-4'>
                    {resources.map((resource, index) => (
                        <div className='col-md-6 col-lg-3' key={index}>
                            <div className='education-card'>
                                <div className='edu-badge'>{resource.type}</div>
                                <h5 className='edu-title'>{resource.title}</h5>
                                <p className='edu-description'>{resource.description}</p>
                                <div className='edu-footer'>
                                    <span className='edu-modules'>{resource.modules} modules</span>
                                </div>
                                <button className='btn btn-outline-primary w-100 mt-3'>Start Learning</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;