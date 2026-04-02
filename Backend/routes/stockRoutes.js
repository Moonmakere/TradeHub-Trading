import express from 'express';
import { getAllStocks, getStockBySymbol, searchStocks, addStock } from '../controllers/stockController.js';

const router = express.Router();

router.get('/', getAllStocks);
router.get('/search', searchStocks);
router.get('/:symbol', getStockBySymbol);
router.post('/add', addStock);

export default router;
