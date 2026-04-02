import express from 'express';
import { getWatchlist, addToWatchlist, removeFromWatchlist } from '../controllers/watchlistController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getWatchlist);
router.post('/add', verifyToken, addToWatchlist);
router.delete('/:symbol', verifyToken, removeFromWatchlist);

export default router;
