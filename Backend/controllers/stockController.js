import Stock from '../models/Stock.js';

export const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStockBySymbol = async (req, res) => {
  try {
    const { symbol } = req.params;
    const stock = await Stock.findOne({ symbol: symbol.toUpperCase() });

    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }

    res.status(200).json(stock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchStocks = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const stocks = await Stock.find({
      $or: [
        { symbol: { $regex: query, $options: 'i' } },
        { name: { $regex: query, $options: 'i' } },
        { sector: { $regex: query, $options: 'i' } },
      ],
    });

    res.status(200).json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Admin only - Add/Update stock
export const addStock = async (req, res) => {
  try {
    const { symbol, name, sector, currentPrice, previousClose, dayHigh, dayLow, yearHigh, yearLow, marketCap, volume, peRatio, description } = req.body;

    let stock = await Stock.findOne({ symbol: symbol.toUpperCase() });

    if (stock) {
      stock = await Stock.findByIdAndUpdate(
        stock._id,
        { name, sector, currentPrice, previousClose, dayHigh, dayLow, yearHigh, yearLow, marketCap, volume, peRatio, description },
        { new: true, runValidators: true }
      );
    } else {
      stock = new Stock({
        symbol: symbol.toUpperCase(),
        name,
        sector,
        currentPrice,
        previousClose,
        dayHigh,
        dayLow,
        yearHigh,
        yearLow,
        marketCap,
        volume,
        peRatio,
        description,
      });
      await stock.save();
    }

    res.status(201).json({
      message: 'Stock added/updated successfully',
      stock,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
