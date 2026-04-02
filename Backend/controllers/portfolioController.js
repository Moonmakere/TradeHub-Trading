import Portfolio from '../models/Portfolio.js';

export const getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ userId: req.user.userId });

    if (!portfolio) {
      portfolio = new Portfolio({
        userId: req.user.userId,
        holdings: [],
        totalInvested: 0,
        totalCurrentValue: 0,
        totalGainLoss: 0,
        totalGainLossPercent: 0,
      });
      await portfolio.save();
    }

    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addHolding = async (req, res) => {
  try {
    const { symbol, quantity, averageBuyPrice, currentPrice } = req.body;

    if (!symbol || !quantity || !averageBuyPrice) {
      return res.status(400).json({ message: 'Symbol, quantity, and average buy price are required' });
    }

    let portfolio = await Portfolio.findOne({ userId: req.user.userId });

    if (!portfolio) {
      portfolio = new Portfolio({ userId: req.user.userId, holdings: [] });
    }

    const totalInvested = quantity * averageBuyPrice;
    const current = currentPrice || averageBuyPrice;
    const currentValue = quantity * current;
    const gainLoss = currentValue - totalInvested;
    const gainLossPercent = (gainLoss / totalInvested) * 100;

    const holding = {
      symbol: symbol.toUpperCase(),
      quantity,
      averageBuyPrice,
      currentPrice: current,
      totalInvested,
      currentValue,
      gainLoss,
      gainLossPercent,
    };

    portfolio.holdings.push(holding);

    // Recalculate totals
    portfolio.totalInvested = portfolio.holdings.reduce((sum, h) => sum + h.totalInvested, 0);
    portfolio.totalCurrentValue = portfolio.holdings.reduce((sum, h) => sum + h.currentValue, 0);
    portfolio.totalGainLoss = portfolio.totalCurrentValue - portfolio.totalInvested;
    portfolio.totalGainLossPercent = (portfolio.totalGainLoss / portfolio.totalInvested) * 100 || 0;

    await portfolio.save();

    res.status(200).json({
      message: 'Holding added to portfolio',
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeHolding = async (req, res) => {
  try {
    const { symbol } = req.params;

    const portfolio = await Portfolio.findOne({ userId: req.user.userId });

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    portfolio.holdings = portfolio.holdings.filter((holding) => holding.symbol !== symbol.toUpperCase());

    // Recalculate totals
    portfolio.totalInvested = portfolio.holdings.reduce((sum, h) => sum + h.totalInvested, 0);
    portfolio.totalCurrentValue = portfolio.holdings.reduce((sum, h) => sum + h.currentValue, 0);
    portfolio.totalGainLoss = portfolio.totalCurrentValue - portfolio.totalInvested;
    portfolio.totalGainLossPercent = (portfolio.totalGainLoss / portfolio.totalInvested) * 100 || 0;

    await portfolio.save();

    res.status(200).json({
      message: 'Holding removed from portfolio',
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHolding = async (req, res) => {
  try {
    const { symbol } = req.params;
    const { currentPrice } = req.body;

    const portfolio = await Portfolio.findOne({ userId: req.user.userId });

    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    const holding = portfolio.holdings.find((h) => h.symbol === symbol.toUpperCase());

    if (!holding) {
      return res.status(404).json({ message: 'Holding not found' });
    }

    holding.currentPrice = currentPrice;
    holding.currentValue = holding.quantity * currentPrice;
    holding.gainLoss = holding.currentValue - holding.totalInvested;
    holding.gainLossPercent = (holding.gainLoss / holding.totalInvested) * 100;

    // Recalculate totals
    portfolio.totalCurrentValue = portfolio.holdings.reduce((sum, h) => sum + h.currentValue, 0);
    portfolio.totalGainLoss = portfolio.totalCurrentValue - portfolio.totalInvested;
    portfolio.totalGainLossPercent = (portfolio.totalGainLoss / portfolio.totalInvested) * 100 || 0;

    await portfolio.save();

    res.status(200).json({
      message: 'Holding updated',
      portfolio,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
