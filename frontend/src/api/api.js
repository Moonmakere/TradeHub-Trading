import axios from 'axios';

// DEMO MODE - Works without backend for Vercel deployment
const DEMO_MODE = !process.env.REACT_APP_API_URL;
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8001/api';

// Mock Data
const mockStocks = [
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3500, change: 2.5 },
  { symbol: 'INFY', name: 'Infosys Limited', price: 1800, change: 1.8 },
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2800, change: -0.5 },
  { symbol: 'HDFC', name: 'HDFC Bank', price: 1650, change: 3.2 },
  { symbol: 'ITC', name: 'ITC Limited', price: 445, change: 0.8 },
];

const mockPortfolio = [
  { symbol: 'TCS', quantity: 10, buyPrice: 3400, currentPrice: 3500, value: 35000 },
  { symbol: 'INFY', quantity: 20, buyPrice: 1750, currentPrice: 1800, value: 36000 },
];

const mockOrders = [
  { id: 1, symbol: 'TCS', quantity: 10, price: 3400, date: '2024-03-01', status: 'completed' },
  { id: 2, symbol: 'INFY', quantity: 20, price: 1750, date: '2024-03-02', status: 'completed' },
];

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Demo Wrapper - Returns mock data if backend is unavailable
const callAPI = async (apiFn) => {
  try {
    return await apiFn();
  } catch (error) {
    if (DEMO_MODE) {
      console.log('📍 Running in DEMO MODE - Backend not available');
      return { data: { message: 'Demo mode - no backend available' } };
    }
    throw error;
  }
};

// Auth APIs
export const authAPI = {
  register: async (data) => {
    if (DEMO_MODE) {
      return Promise.resolve({
        data: {
          message: 'Demo: Registration successful',
          token: 'demo_token_' + Date.now(),
          user: { email: data.email, name: 'Demo User' }
        }
      });
    }
    return api.post('/auth/register', data);
  },
  
  login: async (data) => {
    if (DEMO_MODE) {
      return Promise.resolve({
        data: {
          message: 'Demo: Login successful',
          token: 'demo_token_' + Date.now(),
          user: { email: data.email, name: 'Demo User' }
        }
      });
    }
    return api.post('/auth/login', data);
  },
  
  getProfile: () => {
    if (DEMO_MODE) {
      return Promise.resolve({
        data: { user: { email: 'demo@example.com', name: 'Demo User' } }
      });
    }
    return api.get('/auth/profile');
  },
  
  updateProfile: (data) => {
    if (DEMO_MODE) {
      return Promise.resolve({
        data: { message: 'Demo: Profile updated', user: data }
      });
    }
    return api.put('/auth/profile', data);
  },
};

// Stock APIs
export const stockAPI = {
  getAllStocks: () => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: mockStocks });
    }
    return api.get('/stocks');
  },
  
  getStockBySymbol: (symbol) => {
    if (DEMO_MODE) {
      const stock = mockStocks.find(s => s.symbol === symbol);
      return stock 
        ? Promise.resolve({ data: stock })
        : Promise.reject(new Error('Stock not found'));
    }
    return api.get(`/stocks/${symbol}`);
  },
  
  searchStocks: (query) => {
    if (DEMO_MODE) {
      const results = mockStocks.filter(s => 
        s.symbol.includes(query.toUpperCase()) || 
        s.name.includes(query)
      );
      return Promise.resolve({ data: results });
    }
    return api.get('/stocks/search', { params: { query } });
  },
  
  addStock: (data) => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: { message: 'Demo: Stock added', stock: data } });
    }
    return api.post('/stocks/add', data);
  },
};

// Watchlist APIs
export const watchlistAPI = {
  getWatchlist: () => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: mockStocks });
    }
    return api.get('/watchlist');
  },
  
  addToWatchlist: (data) => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: { message: 'Demo: Added to watchlist' } });
    }
    return api.post('/watchlist/add', data);
  },
  
  removeFromWatchlist: (symbol) => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: { message: 'Demo: Removed from watchlist' } });
    }
    return api.delete(`/watchlist/${symbol}`);
  },
};

// Portfolio APIs
export const portfolioAPI = {
  getPortfolio: () => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: mockPortfolio });
    }
    return api.get('/portfolio');
  },
  
  addHolding: (data) => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: { message: 'Demo: Holding added' } });
    }
    return api.post('/portfolio/add', data);
  },
  
  updateHolding: (symbol, data) => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: { message: 'Demo: Holding updated' } });
    }
    return api.put(`/portfolio/${symbol}`, data);
  },
  
  removeHolding: (symbol) => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: { message: 'Demo: Holding removed' } });
    }
    return api.delete(`/portfolio/${symbol}`);
  },
};

// Order APIs
export const orderAPI = {
  getAllOrders: () => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: mockOrders });
    }
    return api.get('/orders');
  },
  
  getOrderById: (id) => {
    if (DEMO_MODE) {
      const order = mockOrders.find(o => o.id === parseInt(id));
      return order 
        ? Promise.resolve({ data: order })
        : Promise.reject(new Error('Order not found'));
    }
    return api.get(`/orders/${id}`);
  },
  
  createOrder: (data) => {
    if (DEMO_MODE) {
      return Promise.resolve({
        data: {
          message: 'Demo: Order created',
          order: { ...data, id: Date.now(), status: 'completed', date: new Date().toISOString() }
        }
      });
    }
    return api.post('/orders/create', data);
  },
  
  cancelOrder: (id) => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: { message: 'Demo: Order cancelled' } });
    }
    return api.patch(`/orders/${id}/cancel`);
  },
  
  getOrderHistory: (filters) => {
    if (DEMO_MODE) {
      return Promise.resolve({ data: mockOrders });
    }
    return api.get('/orders/history', { params: filters });
  },
};

export default api;
