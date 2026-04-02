# TradeHub - Online trading platform to invest in Everything...

A full-stack inspired by Zerodha trading platform built with the MERN stack (MongoDB, Express, React, Node.js).
## Some Glipmses of website pages
<img width="1907" height="917" alt="image" src="https://github.com/user-attachments/assets/16eca54e-756a-4274-beea-0437e3c69481" />
<img width="1900" height="916" alt="image" src="https://github.com/user-attachments/assets/792d256c-d1c8-4659-baf9-cca6575a7328" />
<img width="1852" height="897" alt="image" src="https://github.com/user-attachments/assets/4cbbf342-2d45-48f1-879c-75f30587b881" />
<img width="1873" height="905" alt="image" src="https://github.com/user-attachments/assets/f6c2410b-f8aa-48b2-a5f7-bf40070c71b5" />
<img width="1866" height="917" alt="image" src="https://github.com/user-attachments/assets/dcfd2aec-1ecc-4304-ab30-69c56e87fe66" />
<img width="1891" height="903" alt="image" src="https://github.com/user-attachments/assets/ae315dd5-6ca5-4e2d-907f-a1639db2004c" />


## 📁 Project Structure

```
Zerodha Clone/
├── Backend/                    # Node.js + Express Backend
│   ├── models/                 # MongoDB schemas
│   ├── controllers/            # Business logic
│   ├── routes/                 # API endpoints
│   ├── middleware/             # Auth & other middleware
│   ├── server.js              # Express server entry point
│   ├── package.json
│   ├── .env.example           # Environment template
│   └── README.md              # Backend setup guide
├── frontend/                   # React Frontend
│   ├── src/
│   │   ├── pages/            # Page components
│   │   ├── landing_page/     # Landing page components
│   │   └── App.js            # Root component
│   ├── public/
│   ├── package.json
│   └── .env.example          # Frontend environment template
└── README.md                 # This file

```

## 🚀 Quick Start

### Backend Setup

1. Navigate to Backend folder:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with MongoDB Atlas credentials:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your MongoDB connection string

5. Start the backend:
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm start
   ```
   App opens on `http://localhost:3000`

## 📡 API Architecture

### Base URL
```
http://localhost:5000/api
```

### Authentication
- JWT-based authentication
- Include token in Authorization header: `Bearer <token>`

### Main API Routes

**Authentication**
**Stocks**
**Watchlist** (Protected)
**Portfolio** (Protected)
**Orders** (Protected)

## 🗄️ Database Schema

### Collections

**Users**
- Authentication & profile information
- KYC details (PAN, bank account, etc.)

**Stocks**
- Stock master data
- Price and market information

**Watchlists**
- User's watched stocks

**Portfolios**
- User's holdings
- Gain/loss calculations

**Orders**
- Buy/Sell orders
- Order status tracking

## 🔐 Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT authentication
- ✅ Protected API routes
- ✅ Environment variable management
- ✅ CORS enabled for frontend

## 📦 Dependencies

### Backend
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **jsonwebtoken** - JWT authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment management
- **cors** - Cross-origin resource sharing

### Frontend
- **react** - UI library
- **react-router-dom** - Routing
- **axios** - HTTP client
- **react-scripts** - Build tool

## 📝 Development Workflow

1. **Start Backend**: `cd Backend && npm run dev`
2. **Start Frontend**: `cd frontend && npm start`
3. Frontend automatically proxies API calls to backend
4. Make changes and see live updates in browser

## 🎯 Features Implemented

- [x] User Registration & Login
- [x] JWT Authentication
- [x] User Profile Management
- [x] Stock Search & Browse
- [x] Watchlist Management
- [x] Portfolio Creation
- [x] Order Placement
- [x] Order History
- [x] Gain/Loss Calculations

## 🚧 Future Enhancements

- [ ] Real-time stock prices (WebSockets)
- [ ] Two-factor authentication
- [ ] Advanced charting
- [ ] Transaction history
- [ ] Admin dashboard

## 📚 Documentation

- [Backend README](./Backend/README.md) - Detailed backend setup and API docs
- [Frontend README](./frontend/README.md) - Frontend build and deployment info

## 👨‍💻 Development Tips

### Making API Calls from Frontend
```javascript
import axios from 'axios';

const token = localStorage.getItem('token');
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

// GET example
api.get('/portfolio').then(res => console.log(res.data));

// POST example
api.post('/orders/create', { symbol: 'INFY', quantity: 5, price: 1500, orderType: 'BUY' });
```

### Testing Authentication
1. Register at `/api/auth/register`
2. Login at `/api/auth/login` - saves token
3. Use token for protected routes


## 📄 License

MIT

---

**Made with ❤️ - Happy Trading!**
