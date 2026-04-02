# Zerodha Clone - MERN Backend

A complete backend for the Zerodha Clone trading platform built with Express, MongoDB, and Node.js.

## Features

- ✅ User Authentication (JWT)
- ✅ User Profile Management
- ✅ Stock Management
- ✅ Watchlist Management
- ✅ Portfolio Management
- ✅ Trading Orders

## Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB Atlas** account
- **npm** or **yarn**

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a `.env` file** in the Backend directory:
   ```bash
   cp .env.example .env
   ```

3. **Update `.env` with your MongoDB Atlas connection string:**
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/zerodha
   JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

## Running the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login user
- **GET** `/api/auth/profile` - Get user profile (requires auth)
- **PUT** `/api/auth/profile` - Update user profile (requires auth)

### Stocks
- **GET** `/api/stocks` - Get all stocks
- **GET** `/api/stocks/:symbol` - Get stock by symbol
- **GET** `/api/stocks/search?query=` - Search stocks
- **POST** `/api/stocks/add` - Add/Update stock (admin only)

### Watchlist
- **GET** `/api/watchlist` - Get watchlist (requires auth)
- **POST** `/api/watchlist/add` - Add stock to watchlist (requires auth)
- **DELETE** `/api/watchlist/:symbol` - Remove stock from watchlist (requires auth)

### Portfolio
- **GET** `/api/portfolio` - Get portfolio (requires auth)
- **POST** `/api/portfolio/add` - Add holding to portfolio (requires auth)
- **PUT** `/api/portfolio/:symbol` - Update holding (requires auth)
- **DELETE** `/api/portfolio/:symbol` - Remove holding from portfolio (requires auth)

### Orders
- **GET** `/api/orders` - Get all orders (requires auth)
- **GET** `/api/orders/history` - Get order history with filters (requires auth)
- **GET** `/api/orders/:id` - Get order by ID (requires auth)
- **POST** `/api/orders/create` - Create new order (requires auth)
- **PATCH** `/api/orders/:id/cancel` - Cancel order (requires auth)

## Project Structure

```
Backend/
├── models/
│   ├── User.js
│   ├── Stock.js
│   ├── Watchlist.js
│   ├── Portfolio.js
│   └── Order.js
├── controllers/
│   ├── authController.js
│   ├── stockController.js
│   ├── watchlistController.js
│   ├── portfolioController.js
│   └── orderController.js
├── routes/
│   ├── authRoutes.js
│   ├── stockRoutes.js
│   ├── watchlistRoutes.js
│   ├── portfolioRoutes.js
│   └── orderRoutes.js
├── middleware/
│   └── auth.js
├── server.js
├── package.json
└── .env.example
```

## Authentication

This API uses JWT (JSON Web Tokens) for authentication. 

To access protected endpoints:
1. Register or Login to get a token
2. Include the token in the Authorization header:
   ```
   Authorization: Bearer <your-token>
   ```

## Database Models

### User
- firstName, lastName
- email (unique)
- password (hashed)
- phone, address, city, state, zipCode
- panNumber, bankAccount, ifscCode

### Stock
- symbol (unique)
- name, sector
- currentPrice, previousClose
- dayHigh, dayLow, yearHigh, yearLow
- marketCap, volume, peRatio
- description

### Watchlist
- userId (reference to User)
- stocks (array of stock symbols)

### Portfolio
- userId (reference to User)
- holdings (array of holdings with quantity, prices, gain/loss)
- Total portfolio metrics

### Order
- userId (reference to User)
- symbol, quantity, price
- orderType (BUY/SELL)
- status (PENDING/COMPLETED/CANCELLED)
- orderCategory, timeInForce
- totalValue, brokerage, charges

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | mongodb+srv://... |
| JWT_SECRET | Secret key for JWT signing | secret_key_123 |
| JWT_EXPIRE | Token expiration time | 7d |
| NODE_ENV | Environment | development/production |

## Development Notes

- Password hashing uses bcryptjs
- JWT tokens expire after the specified duration
- All authentication-required endpoints check for valid token
- Database queries support filtering and sorting
- Error handling returns appropriate HTTP status codes

## Future Enhancements

- [ ] Real-time stock price updates using WebSockets
- [ ] Email verification for new accounts
- [ ] Two-factor authentication
- [ ] Transaction history
- [ ] Dividend tracking
- [ ] Advanced analytics and charts
- [ ] Admin dashboard
- [ ] Rate limiting
- [ ] Logging system

## License

MIT
