import Watchlist from '../models/Watchlist.js';

export const getWatchlist = async (req, res) => {
  try {
    let watchlist = await Watchlist.findOne({ userId: req.user.userId });

    if (!watchlist) {
      watchlist = new Watchlist({ userId: req.user.userId, stocks: [] });
      await watchlist.save();
    }

    res.status(200).json(watchlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToWatchlist = async (req, res) => {
  try {
    const { symbol, name } = req.body;

    if (!symbol || !name) {
      return res.status(400).json({ message: 'Symbol and name are required' });
    }

    let watchlist = await Watchlist.findOne({ userId: req.user.userId });

    if (!watchlist) {
      watchlist = new Watchlist({ userId: req.user.userId, stocks: [] });
    }

    // Check if stock already in watchlist
    const exists = watchlist.stocks.some((stock) => stock.symbol === symbol.toUpperCase());

    if (exists) {
      return res.status(400).json({ message: 'Stock already in watchlist' });
    }

    watchlist.stocks.push({ symbol: symbol.toUpperCase(), name });
    await watchlist.save();

    res.status(200).json({
      message: 'Stock added to watchlist',
      watchlist,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeFromWatchlist = async (req, res) => {
  try {
    const { symbol } = req.params;

    const watchlist = await Watchlist.findOne({ userId: req.user.userId });

    if (!watchlist) {
      return res.status(404).json({ message: 'Watchlist not found' });
    }

    watchlist.stocks = watchlist.stocks.filter((stock) => stock.symbol !== symbol.toUpperCase());
    await watchlist.save();

    res.status(200).json({
      message: 'Stock removed from watchlist',
      watchlist,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
