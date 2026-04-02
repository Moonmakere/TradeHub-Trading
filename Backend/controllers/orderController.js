import Order from '../models/Order.js';

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order || order.userId.toString() !== req.user.userId.toString()) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { symbol, quantity, price, orderType, orderCategory = 'REGULAR', timeInForce = 'DAY' } = req.body;

    if (!symbol || !quantity || !price || !orderType) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const totalValue = quantity * price;
    const brokerage = totalValue * 0.001; // 0.1% brokerage
    const charges = brokerage * 1.18; // 18% GST

    const order = new Order({
      userId: req.user.userId,
      symbol: symbol.toUpperCase(),
      quantity,
      price,
      orderType,
      orderCategory,
      timeInForce,
      totalValue,
      brokerage,
      charges,
      status: 'COMPLETED', // For demo, auto-complete orders
    });

    await order.save();

    res.status(201).json({
      message: 'Order created successfully',
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order || order.userId.toString() !== req.user.userId.toString()) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.status !== 'PENDING') {
      return res.status(400).json({ message: 'Only pending orders can be cancelled' });
    }

    order.status = 'CANCELLED';
    await order.save();

    res.status(200).json({
      message: 'Order cancelled successfully',
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderHistory = async (req, res) => {
  try {
    const { symbol, status, orderType } = req.query;

    let filter = { userId: req.user.userId };

    if (symbol) filter.symbol = symbol.toUpperCase();
    if (status) filter.status = status;
    if (orderType) filter.orderType = orderType;

    const orders = await Order.find(filter).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
