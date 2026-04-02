import React from 'react';
import './Pricing.css';

function Pricing() {
    const pricingPlans = [
        {
            name: 'Equity Delivery',
            fee: '₹0',
            features: ['Zero Commission', 'Flat ₹20 delivery trades', 'Direct Mutual Funds', 'ETFs included']
        },
        {
            name: 'Intraday Trading',
            fee: '₹20',
            features: ['Per trade', 'Leverage available', 'Real-time charts', 'Advanced tools'],
            highlighted: true
        },
        {
            name: 'F&O Trading',
            fee: '₹20',
            features: ['Per contract', 'Futures trading', 'Options strategies', 'Risk management tools']
        }
    ];

    return (
        <section className='pricing-section'>
            <div className='container py-5'>
                <h2 className='section-title text-center mb-5'>Simple, Transparent Pricing</h2>
                <p className='text-center mb-5 pricing-intro'>No hidden charges. No account opening fees. Invest at your own pace.</p>
                <div className='row g-4'>
                    {pricingPlans.map((plan, index) => (
                        <div className='col-md-4' key={index}>
                            <div className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                                <h4 className='pricing-name'>{plan.name}</h4>
                                <h2 className='pricing-fee'>{plan.fee}</h2>
                                <ul className='pricing-features'>
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex}>✓ {feature}</li>
                                    ))}
                                </ul>
                                <button className='btn btn-primary w-100 mt-4'>
                                    {plan.highlighted ? 'Get Started' : 'Learn More'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;