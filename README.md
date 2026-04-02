# TradeHub - Online trading platform to invest in Everything...

A full-stack inspired by Zerodha trading platform built with the MERN stack (MongoDB, Express, React, Node.js).

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
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get profile (protected)
- `PUT /auth/profile` - Update profile (protected)

**Stocks**
- `GET /stocks` - All stocks
- `GET /stocks/search?query=` - Search stocks
- `GET /stocks/:symbol` - Stock details
- `POST /stocks/add` - Add/update stock (admin)

**Watchlist** (Protected)
- `GET /watchlist` - Get watchlist
- `POST /watchlist/add` - Add to watchlist
- `DELETE /watchlist/:symbol` - Remove from watchlist

**Portfolio** (Protected)
- `GET /portfolio` - Get portfolio
- `POST /portfolio/add` - Add holding
- `PUT /portfolio/:symbol` - Update holding
- `DELETE /portfolio/:symbol` - Remove holding

**Orders** (Protected)
- `GET /orders` - Get orders
- `POST /orders/create` - Create order
- `GET /orders/history` - Order history with filters
- `PATCH /orders/:id/cancel` - Cancel order

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

## 🔧 Environment Configuration

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/zerodha
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

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
- [ ] Email verification
- [ ] Two-factor authentication
- [ ] Advanced charting
- [ ] Transaction history
- [ ] Dividend tracking
- [ ] Admin dashboard
- [ ] Mobile app
- [ ] Deployment setup

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

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Backend won't start | Check MongoDB URI in .env |
| CORS errors | Ensure frontend proxy is set in package.json |
| API calls fail | Verify token is included in Authorization header |
| Port already in use | Kill process on port 5000: `lsof -ti:5000 \| xargs kill -9` |

## 📄 License

MIT

---

**Made with ❤️ - Happy Trading!**
