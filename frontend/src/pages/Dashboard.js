import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Pages.css';
import { AuthContext } from '../context/AuthContext';

function Dashboard() {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // Redirect to login if not authenticated
    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    const portfolioHoldings = [
        { symbol: 'INFY', quantity: 10, price: '₹1,234.50', value: '₹12,345' },
        { symbol: 'TCS', quantity: 5, price: '₹3,567.80', value: '₹17,839' },
        { symbol: 'RELIANCE', quantity: 3, price: '₹2,456.90', value: '₹7,370.70' }
    ];

    const recentTrades = [
        { date: '01 Apr 2024', symbol: 'INFY', action: 'BUY', quantity: 10, price: '₹1,210.00', total: '₹12,100' },
        { date: '31 Mar 2024', symbol: 'TCS', action: 'BUY', quantity: 5, price: '₹3,500.00', total: '₹17,500' },
        { date: '30 Mar 2024', symbol: 'RELIANCE', action: 'BUY', quantity: 3, price: '₹2,400.00', total: '₹7,200' }
    ];

    return (
        <div className='dashboard-page'>
            <section className='dashboard-header'>
                <div className='container py-4'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='dashboard-title'>Welcome Back! 👋</h1>
                            <p className='dashboard-subtitle'>Here's your dashboard overview</p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-6 text-start'>
                        </div>
                        <div className='col-md-6 text-end'>
                            <Link to="/" className=' btn-outline-primary me-2' style={{padding: '5px 12px',width: '100%', fontSize: '15px'}}>Back to Home</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='dashboard-stats'>
                <div className='container py-4'>
                    <div className='row g-4'>
                        <div className='col-md-3'>
                            <div className='stat-box'>
                                <h6 className='stat-label'>Total Balance</h6>
                                <h3 className='stat-value'>₹50,00,000</h3>
                                <p className='stat-change positive'>+₹50,000 (+1.0%)</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='stat-box'>
                                <h6 className='stat-label'>Portfolio Value</h6>
                                <h3 className='stat-value'>₹37,555</h3>
                                <p className='stat-change positive'>+₹1,215 (+3.4%)</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='stat-box'>
                                <h6 className='stat-label'>Cash Available</h6>
                                <h3 className='stat-value'>₹12,44,445</h3>
                                <p className='stat-change neutral'>Ready to invest</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='stat-box'>
                                <h6 className='stat-label'>Today's P&L</h6>
                                <h3 className='stat-value'>+₹2,450</h3>
                                <p className='stat-change positive'>+0.5%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='dashboard-content'>
                <div className='container py-5'>
                    <div className='row g-4'>
                        <div className='col-lg-8'>
                            <div className='sheet'>
                                <div className='sheet-header'>
                                    <h3>Your Holdings</h3>
                                    <button className=' btn-sm btn-primary' style={{padding:'6px 12px',width:'40%', fontSize: '13px'}}>+ Add Stock</button>
                                </div>
                                <div className='holdings-table'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Symbol</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Value</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {portfolioHoldings.map((holding, idx) => (
                                                <tr key={idx}>
                                                    <td className='symbol'>{holding.symbol}</td>
                                                    <td>{holding.quantity}</td>
                                                    <td>{holding.price}</td>
                                                    <td className='value'>{holding.value}</td>
                                                    <td>
                                                        <button className='btn btn-xs btn-primary' style={{padding: '4px 10px', fontSize: '12px'}}>Sell</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='sheet'>
                                <div className='sheet-header'>
                                    <h3>Quick Actions</h3>
                                </div>
                                <div className='quick-actions'>
                                    <button className='action-btn'>
                                        <span className='action-icon'>📈</span>
                                        <span>Buy Stocks</span>
                                    </button>
                                    <button className='action-btn'>
                                        <span className='action-icon'>💰</span>
                                        <span>Add Funds</span>
                                    </button>
                                    <button className='action-btn'>
                                        <span className='action-icon'>🎯</span>
                                        <span>Set Alerts</span>
                                    </button>
                                    <button className='action-btn'>
                                        <span className='action-icon'>📊</span>
                                        <span>View Reports</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col-12'>
                            <div className='sheet'>
                                <div className='sheet-header'>
                                    <h3>Recent Trades</h3>
                                </div>
                                <div className='trades-table'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Symbol</th>
                                                <th>Action</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentTrades.map((trade, idx) => (
                                                <tr key={idx}>
                                                    <td>{trade.date}</td>
                                                    <td className='symbol'>{trade.symbol}</td>
                                                    <td>
                                                        <span className={`action-badge ${trade.action.toLowerCase()}`}>
                                                            {trade.action}
                                                        </span>
                                                    </td>
                                                    <td>{trade.quantity}</td>
                                                    <td>{trade.price}</td>
                                                    <td className='value'>{trade.total}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
