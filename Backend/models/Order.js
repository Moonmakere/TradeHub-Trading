import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    symbol: {
      type: String,
      required: true,
      uppercase: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    orderType: {
      type: String,
      enum: ['BUY', 'SELL'],
      required: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'COMPLETED', 'CANCELLED'],
      default: 'PENDING',
    },
    orderCategory: {
      type: String,
      enum: ['REGULAR', 'BRACKET', 'COVER'],
      default: 'REGULAR',
    },
    timeInForce: {
      type: String,
      enum: ['DAY', 'IOC', 'GTC'],
      default: 'DAY',
    },
    totalValue: {
      type: Number,
      default: 0,
    },
    brokerage: {
      type: Number,
      default: 0,
    },
    charges: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);
