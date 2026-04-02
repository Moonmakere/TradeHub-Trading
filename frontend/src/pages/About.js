import React from 'react';
import './Pages.css';

function About() {
    const team = [
        {
            name: 'Mikasa Ackerman (Attack on Titan)',
            role: 'CEO & Co-founder',
            bio: 'Trading and investing enthusiast with 15+ years of experience in financial markets.',
            image: '👨‍💼'
        },
        {
            name: 'Naruto Uzumaki (Naruto)',
            role: 'Co-founder',
            bio: 'Tech visionary focused on building products that simplify investing.',
            image: '👨‍💻'
        },
        {
            name: 'Sailor Moon (Usagi Tsukino)',
            role: 'CTO & Co-founder',
            bio: 'Software engineer passionate about creating scalable financial systems.',
            image: '⚙️'
        },
        {
            name: 'Goku (Dragon Ball)',
            role: 'Head of Products',
            bio: 'Product strategist committed to user-centric design and innovation.',
            image: '🎯'
        }
    ];

    const milestones = [
        { year: '2010', event: 'TradeHub was founded with revolutionary discount brokerage model' },
        { year: '2014', event: 'Kite platform was launched, disrupting the trading platform space' },
        { year: '2018', event: 'TradeHub became India\'s largest retail broker by number of accounts' },
        { year: '2021', event: 'Expanded into fintech ecosystem with multiple products' },
        { year: '2024', event: '2.5M+ users managing 50000Cr+ in assets' }
    ];

    return (
        <div className='about-page'>
            <section className='about-hero'>
                <div className='container py-5'>
                    <h1 className='page-title'>About TradeHub</h1>
                       <p className='page-subtitle'>
                        Simplifying investing and market education for everyone in India.
                        </p>
                </div>
            </section>

            <section className='company-info'>
                <div className='container py-5'>
                    <div className='row g-4'>
                        <div className='col-lg-6'>
                            <h2>Our Mission</h2>
                            <p className='mission-text'>
                                To empower every Indian to invest efficiently and take full control of their investments. 
                                We believe that investing should be transparent, straightforward, and accessible to everyone.
                            </p>
                        </div>
                        <div className='col-lg-6'>
                            <h2>Our Vision</h2>
                            <p className='vision-text'>
                                To become the world's leading fintech company by creating tools and platforms that 
                                democratize financial services and make investing effortless for millions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='team-section'>
                <div className='container py-5'>
                    <h2 className='section-title text-center mb-5'>Our Leadership Team</h2>
                    <div className='row g-4'>
                        {team.map((member, index) => (
                            <div className='col-md-6 col-lg-3' key={index}>
                                <div className='team-card'>
                                    <div className='team-avatar'>{member.image}</div>
                                    <h4 className='team-name'>{member.name}</h4>
                                    <p className='team-role'>{member.role}</p>
                                    <p className='team-bio'>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='milestones-section'>
                <div className='container py-5'>
                    <h2 className='section-title text-center mb-5'>Our Journey</h2>
                    <div className='timeline'>
                        {milestones.map((milestone, index) => (
                            <div className='timeline-item' key={index}>
                                <div className='timeline-marker'>{milestone.year}</div>
                                <div className='timeline-content'>
                                    <p>{milestone.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
