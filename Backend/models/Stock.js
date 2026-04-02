import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    name: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      trim: true,
    },
    currentPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    previousClose: {
      type: Number,
      default: 0,
    },
    dayHigh: {
      type: Number,
      default: 0,
    },
    dayLow: {
      type: Number,
      default: 0,
    },
    yearHigh: {
      type: Number,
      default: 0,
    },
    yearLow: {
      type: Number,
      default: 0,
    },
    marketCap: {
      type: Number,
      default: 0,
    },
    volume: {
      type: Number,
      default: 0,
    },
    peRatio: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Stock', stockSchema);
