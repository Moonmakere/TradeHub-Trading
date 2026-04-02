import React, { useState } from 'react';
import './Pages.css';

function Markets() {
    const [activeTab, setActiveTab] = useState('stocks');

    const stocks = [
        { symbol: 'INFY', name: 'Infosys', price: '₹1,234.50', change: '+2.5%' },
        { symbol: 'TCS', name: 'Tata Consultancy', price: '₹3,567.80', change: '+1.8%' },
        { symbol: 'RELIANCE', name: 'Reliance Industries', price: '₹2,456.90', change: '-0.5%' },
        { symbol: 'HDFC', name: 'HDFC Bank', price: '₹1,876.45', change: '+3.2%' }
    ];

    const sectors = [
        { name: 'Information Technology', companies: 458, change: '+2.1%' },
        { name: 'Banking & Financial', companies: 123, change: '+1.5%' },
        { name: 'Pharmaceuticals', companies: 89, change: '+0.8%' },
        { name: 'Automobiles', companies: 67, change: '-1.2%' },
        { name: 'FMCG', companies: 56, change: '+2.3%' },
        { name: 'Energy', companies: 45, change: '-2.5%' }
    ];

    const indices = [
        { name: 'Nifty 50', value: '22,456.50', change: '+1.2%' },
        { name: 'Sensex', value: '73,234.80', change: '+1.1%' },
        { name: 'Nifty Midcap', value: '8,234.20', change: '+0.9%' },
        { name: 'Nifty Smallcap', value: '12,567.45', change: '+1.5%' }
    ];

    return (
        <div className='markets-page'>
            <section className='markets-hero'>
                <div className='container py-5'>
                    <h1 className='page-title'>Market Overview</h1>
                    <p className='page-subtitle'>
                        Real-time market data, insights, and analytics at your fingertips.
                      <p className='deals-text'>  So that you don't miss your BEST  DEAL...!
                      </p> 
                    </p>
                </div>
            </section>

            <section className='indices-section'>
                <div className='container py-5'>
                    <h2 className='section-title mb-4'>Market Indices</h2>
                    <div className='row g-4'>
                        {indices.map((index, i) => (
                            <div className='col-md-6 col-lg-3' key={i}>
                                <div className='index-card'>
                                    <h5>{index.name}</h5>
                                    <h3 className='index-value'>{index.value}</h3>
                                    <p className={`index-change ${index.change.includes('+') ? 'positive' : 'negative'}`}>
                                        {index.change}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='market-data-section'>
                <div className='container py-5'>
                    <div className='tab-navigation mb-4'>
                        <button
                            className={`tab-btn ${activeTab === 'stocks' ? 'active' : ''}`}
                            onClick={() => setActiveTab('stocks')}
                        >
                            Top Stocks
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'sectors' ? 'active' : ''}`}
                            onClick={() => setActiveTab('sectors')}
                        >
                            Sectors
                        </button>
                    </div>

                    {activeTab === 'stocks' && (
                        <div className='market-table'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Symbol</th>
                                        <th>Company</th>
                                        <th>Price</th>
                                        <th>Change</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stocks.map((stock, idx) => (
                                        <tr key={idx}>
                                            <td className='symbol'>{stock.symbol}</td>
                                            <td>{stock.name}</td>
                                            <td className='price'>{stock.price}</td>
                                            <td className={`change ${stock.change.includes('+') ? 'positive' : 'negative'}`}>
                                                {stock.change}
                                            </td>
                                            <td>
                                                <button className='btn btn-sm btn-primary'>Trade</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'sectors' && (
                        <div className='sectors-grid'>
                            {sectors.map((sector, idx) => (
                                <div className='sector-card' key={idx}>
                                    <h5>{sector.name}</h5>
                                    <p className='sector-companies'>{sector.companies} companies</p>
                                    <p className={`sector-change ${sector.change.includes('+') ? 'positive' : 'negative'}`}>
                                        {sector.change}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Markets;
