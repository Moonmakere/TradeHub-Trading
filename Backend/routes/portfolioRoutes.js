import express from 'express';
import { getPortfolio, addHolding, removeHolding, updateHolding } from '../controllers/portfolioController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getPortfolio);
router.post('/add', verifyToken, addHolding);
router.delete('/:symbol', verifyToken, removeHolding);
router.put('/:symbol', verifyToken, updateHolding);

export default router;
