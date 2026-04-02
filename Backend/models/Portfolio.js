import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    holdings: [
      {
        symbol: {
          type: String,
          required: true,
          uppercase: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 0,
        },
        averageBuyPrice: {
          type: Number,
          required: true,
          default: 0,
        },
        currentPrice: {
          type: Number,
          default: 0,
        },
        totalInvested: {
          type: Number,
          default: 0,
        },
        currentValue: {
          type: Number,
          default: 0,
        },
        gainLoss: {
          type: Number,
          default: 0,
        },
        gainLossPercent: {
          type: Number,
          default: 0,
        },
      },
    ],
    totalInvested: {
      type: Number,
      default: 0,
    },
    totalCurrentValue: {
      type: Number,
      default: 0,
    },
    totalGainLoss: {
      type: Number,
      default: 0,
    },
    totalGainLossPercent: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Portfolio', portfolioSchema);
