import express from 'express';
import { getAllOrders, getOrderById, createOrder, cancelOrder, getOrderHistory } from '../controllers/orderController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getAllOrders);
router.get('/history', verifyToken, getOrderHistory);
router.get('/:id', verifyToken, getOrderById);
router.post('/create', verifyToken, createOrder);
router.patch('/:id/cancel', verifyToken, cancelOrder);

export default router;
