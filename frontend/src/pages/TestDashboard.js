import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './TestDashboard.css';
import { AuthContext } from '../context/AuthContext';

const TestDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('test' + Math.random().toString(36).substring(7) + '@test.com');
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState('password123');
  const [output, setOutput] = useState('Ready for testing...');
  const [loading, setLoading] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001/api';
  const DEMO_MODE = !process.env.REACT_APP_API_URL;

  const log = (message) => {
    setOutput((prev) => prev + '\n\n' + new Date().toLocaleTimeString() + ' → ' + message);
  };

  const clearLog = () => {
    setOutput('');
  };

  // 1. TEST REGISTER
  const testRegister = async () => {
    setLoading(true);
    try {
      log('📝 Testing REGISTER...');
      const response = await axios.post(`${API_URL}/auth/register`, {
        firstName: 'Test',
        lastName: 'User',
        email: email,
        password: password,
        confirmPassword: password,
      });
      
      const data = response.data;
      setToken(data.token);
      log(`✅ REGISTER SUCCESS\nToken: ${data.token.substring(0, 30)}...\nUser: ${data.user.email}`);
    } catch (error) {
      log(`❌ REGISTER ERROR: ${error.response?.data?.message || error.message}`);
    }
    setLoading(false);
  };

  // 2. TEST LOGIN
  const testLogin = async () => {
    setLoading(true);
    try {
      log('🔐 Testing LOGIN...');
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: email,
        password: password,
      });
      
      const data = response.data;
      setToken(data.token);
      log(`✅ LOGIN SUCCESS\nToken: ${data.token.substring(0, 30)}...\nUser: ${data.user.email}`);
    } catch (error) {
      log(`❌ LOGIN ERROR: ${error.response?.data?.message || error.message}`);
    }
    setLoading(false);
  };

  // 3. TEST ADD STOCKS
  const testAddStocks = async () => {
    setLoading(true);
    try {
      log('📊 Adding Sample Stocks...');
      
      const stocks = [
        { symbol: 'INFY', name: 'Infosys', sector: 'IT', currentPrice: 1450.5, previousClose: 1445, dayHigh: 1465, dayLow: 1440, yearHigh: 1800, yearLow: 1200, marketCap: 625000000000, volume: 25000000, peRatio: 15.5 },
        { symbol: 'TCS', name: 'Tata Consultancy', sector: 'IT', currentPrice: 3250.75, previousClose: 3245, dayHigh: 3270, dayLow: 3220, yearHigh: 4000, yearLow: 2500, marketCap: 13000000000000, volume: 50000000, peRatio: 25.3 },
        { symbol: 'HDFCBANK', name: 'HDFC Bank', sector: 'Finance', currentPrice: 1650, previousClose: 1645, dayHigh: 1670, dayLow: 1630, yearHigh: 2000, yearLow: 1400, marketCap: 10500000000000, volume: 75000000, peRatio: 18.7 },
      ];

      for (const stock of stocks) {
        await axios.post(`${API_URL}/stocks/add`, stock);
      }
      log(`✅ Added 3 Sample Stocks (INFY, TCS, HDFCBANK)`);
    } catch (error) {
      log(`❌ STOCK ERROR: ${error.response?.data?.message || error.message}`);
    }
    setLoading(false);
  };

  // 4. TEST GET STOCKS
  const testGetStocks = async () => {
    setLoading(true);
    try {
      log('📈 Fetching All Stocks...');
      const response = await axios.get(`${API_URL}/stocks`);
      const stocks = response.data;
      log(`✅ Found ${stocks.length} stocks:\n${stocks.map(s => `${s.symbol}: ₹${s.currentPrice}`).join('\n')}`);
    } catch (error) {
      log(`❌ FETCH STOCKS ERROR: ${error.message}`);
    }
    setLoading(false);
  };

  // 5. TEST ADD WATCHLIST
  const testAddWatchlist = async () => {
    setLoading(true);
    try {
      if (!token) {
        log('❌ Please login first!');
        setLoading(false);
        return;
      }
      
      log('⭐ Adding to Watchlist...');
      const response = await axios.post(
        `${API_URL}/watchlist/add`,
        { symbol: 'INFY', name: 'Infosys Limited' },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      log(`✅ Added INFY to Watchlist\nWatchlist: ${response.data.watchlist.stocks.map(s => s.symbol).join(', ')}`);
    } catch (error) {
      log(`❌ WATCHLIST ERROR: ${error.response?.data?.message || error.message}`);
    }
    setLoading(false);
  };

  // 6. TEST GET WATCHLIST
  const testGetWatchlist = async () => {
    setLoading(true);
    try {
      if (!token) {
        log('❌ Please login first!');
        setLoading(false);
        return;
      }
      
      log('📋 Fetching Watchlist...');
      const response = await axios.get(`${API_URL}/watchlist`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const watchlist = response.data.stocks;
      log(`✅ Watchlist (${watchlist.length} stocks):\n${watchlist.map(s => s.symbol).join(', ')}`);
    } catch (error) {
      log(`❌ GET WATCHLIST ERROR: ${error.message}`);
    }
    setLoading(false);
  };

  // 7. TEST ADD PORTFOLIO
  const testAddPortfolio = async () => {
    setLoading(true);
    try {
      if (!token) {
        log('❌ Please login first!');
        setLoading(false);
        return;
      }
      
      log('💼 Adding to Portfolio...');
      const response = await axios.post(
        `${API_URL}/portfolio/add`,
        { symbol: 'INFY', quantity: 10, averageBuyPrice: 1400, currentPrice: 1450.5 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      const p = response.data.portfolio;
      log(`✅ Added holding to Portfolio\nTotal Holdings: ${p.holdings.length}\nTotal Value: ₹${p.totalCurrentValue}`);
    } catch (error) {
      log(`❌ PORTFOLIO ERROR: ${error.response?.data?.message || error.message}`);
    }
    setLoading(false);
  };

  // 8. TEST GET PORTFOLIO
  const testGetPortfolio = async () => {
    setLoading(true);
    try {
      if (!token) {
        log('❌ Please login first!');
        setLoading(false);
        return;
      }
      
      log('📊 Fetching Portfolio...');
      const response = await axios.get(`${API_URL}/portfolio`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const p = response.data;
      log(`✅ Portfolio Summary:\nHoldings: ${p.holdings.length}\nInvested: ₹${p.totalInvested}\nCurrent Value: ₹${p.totalCurrentValue}\nGain/Loss: ₹${p.totalGainLoss}`);
    } catch (error) {
      log(`❌ GET PORTFOLIO ERROR: ${error.message}`);
    }
    setLoading(false);
  };

  // 9. TEST CREATE ORDER
  const testCreateOrder = async () => {
    setLoading(true);
    try {
      if (!token) {
        log('❌ Please login first!');
        setLoading(false);
        return;
      }
      
      log('📝 Creating Order (BUY)...');
      const response = await axios.post(
        `${API_URL}/orders/create`,
        { symbol: 'TCS', quantity: 5, price: 3250, orderType: 'BUY' },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      const order = response.data.order;
      log(`✅ Order Created:\nSymbol: ${order.symbol}\nQuantity: ${order.quantity}\nPrice: ₹${order.price}\nTotal: ₹${order.totalValue}\nStatus: ${order.status}`);
    } catch (error) {
      log(`❌ ORDER ERROR: ${error.response?.data?.message || error.message}`);
    }
    setLoading(false);
  };

  // 10. TEST GET ORDERS
  const testGetOrders = async () => {
    setLoading(true);
    try {
      if (!token) {
        log('❌ Please login first!');
        setLoading(false);
        return;
      }
      
      log('📋 Fetching Orders...');
      const response = await axios.get(`${API_URL}/orders`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const orders = response.data;
      log(`✅ Total Orders: ${orders.length}\n${orders.map(o => `${o.orderType} ${o.quantity} × ${o.symbol} @ ₹${o.price} - ${o.status}`).join('\n')}`);
    } catch (error) {
      log(`❌ GET ORDERS ERROR: ${error.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="test-dashboard">
      <div className="test-container">
        <div style={{marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #f0f0f0', paddingBottom: '20px'}}>
          <div>
            <h1 style={{margin: 0, textAlign: 'left', marginBottom: '5px'}}>🧪 Testing Dashboard</h1>
            <p className="subtitle" style={{textAlign: 'left', margin: 0}}>Test all the features below</p>
          </div>
          <Link to="/dashboard" className="btn btn-danger" style={{padding: '8px 16px', fontSize: '14px', whiteSpace: 'nowrap'}}>
            ← Back to Dashboard
          </Link>
        </div> 

        {/* Status Panel */}
        <div className="status-panel">
          <div className="status-item">
            <span>🔌Port:</span>
            <span className="status-success">Running on Port 8001</span>
          </div>
          <div className="status-item">
            <span>📝 Email:</span>
            <span>{email}</span>
          </div>
          <div className="status-item">
            <span>🔐 Token:</span>
            <span>{token ? token.substring(0, 20) + '...' : 'Not logged in'}</span>
          </div>
        </div>


          {/* Stocks Section */}
          <div className="test-section">
            <h2>📊 Stocks</h2>
            <button onClick={testAddStocks} disabled={loading} className="btn btn-info">
              3. Add Sample Stocks
            </button>
            <button onClick={testGetStocks} disabled={loading} className="btn btn-info">
              4. Get All Stocks
            </button>
          </div>

          {/* Watchlist Section */}
          <div className="test-section">
            <h2>⭐ Watchlist</h2>
            <button onClick={testAddWatchlist} disabled={loading} className="btn btn-success">
              5. Add to Watchlist
            </button>
            <button onClick={testGetWatchlist} disabled={loading} className="btn btn-success">
              6. View Watchlist
            </button>
          </div>

          {/* Portfolio Section */}
          <div className="test-section">
            <h2>💼 Portfolio</h2>
            <button onClick={testAddPortfolio} disabled={loading} className="btn btn-warning">
              7. Add Portfolio Holding
            </button>
            <button onClick={testGetPortfolio} disabled={loading} className="btn btn-warning">
              8. View Portfolio
            </button>
          </div>

          {/* Orders Section */}
          <div className="test-section">
            <h2>📈 Orders</h2>
            <button onClick={testCreateOrder} disabled={loading} className="btn btn-danger">
              9. Create Order
            </button>
            <button onClick={testGetOrders} disabled={loading} className="btn btn-danger">
              10. View Orders
            </button>
          </div>
        </div>

        {/* Output Console */}
        <div className="console">
          <div className="console-header">
            <span>📟 Test Output</span>
            <button onClick={clearLog} className="btn-clear">Clear</button>
          </div>
          <div className="console-content">
            {output.split('\n').map((line, i) => (
              <div key={i} className="console-line">
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="instructions">
          <h3>📚 How to Use:</h3>
          <ol>
            <li><strong>Step 1:</strong> Click "Add Sample Stocks" to populate database</li>
            <li><strong>Step 2:</strong> Click "Add to Watchlist" to get a token</li>
            <li><strong>Step 3:</strong> Click "Add Portfolio Holding" </li>
            <li><strong>Step 4:</strong> click "Create Order" to explore </li>
            <li><strong>Check Output:</strong> All API responses appear in the console below</li>
          </ol>
        </div>
      </div>
    
  );
};

export default TestDashboard;
