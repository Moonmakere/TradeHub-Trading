import React from 'react';
import './Pages.css';

function Products() {
    const products = [
        {
            name: 'Kite',
            description: 'Our flagship trading platform with advanced charting and order types.',
            features: ['Real-time charts', 'Advanced orders', 'Portfolio tracking', 'Alerts & notifications'],
            icon: '📊'
        },
        {
            name: 'Console',
            description: 'Account management and portfolio analysis dashboard.',
            features: ['Account statements', 'Tax reports', 'Portfolio analytics', 'Holdings overview'],
            icon: '💼'
        },
        {
            name: 'Coin',
            description: 'Simple direct mutual fund investment platform.',
            features: ['Direct mutual funds', 'Zero commissions', 'SIP automation', 'Performance tracking'],
            icon: '💰'
        },
        {
            name: 'Varsity',
            description: 'Free stock market education and learning materials.',
            features: ['40+ modules', 'Live sessions', 'Q&A community', 'Trading quiz'],
            icon: '📚'
        },
        {
            name: 'TradingQ&A',
            description: 'Active community for traders and investors.',
            features: ['Expert answers', 'Community forums', 'Market insights', 'Trading tips'],
            icon: '💬'
        },
        {
            name: 'Sentinel',
            description: 'Smart surveillance and risk management tool.',
            features: ['Risk monitoring', 'Alert systems', 'Performance metrics', 'Compliance reports'],
            icon: '🛡️'
        }
    ];

    return (
        <div className='products-page'>
            <section className='products-hero'>
                <div className='container py-5'>
                    <h1 className='page-title'>The TradeHub Universe</h1>
                    <p className='page-subtitle'>
                        Not just a platform, but a whole ecosystem of fintech apps solving specific investment challenges.
                    </p>
                </div>
            </section>

            <section className='products-grid'>
                <div className='container py-5'>
                    <div className='row g-4'>
                        {products.map((product, index) => (
                            <div className='col-md-6 col-lg-4' key={index}>
                                <div className='product-card'>
                                    <div className='product-icon'>{product.icon}</div>
                                    <h3 className='product-name'>{product.name}</h3>
                                    <p className='product-description'>{product.description}</p>
                                    <ul className='product-features'>
                                        {product.features.map((feature, fIndex) => (
                                            <li key={fIndex}>✓ {feature}</li>
                                        ))}
                                    </ul>
                                    <button className='btn btn-primary btn-sm w-100 mt-3'>Learn More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Products;
