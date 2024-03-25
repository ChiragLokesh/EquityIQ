import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StockPriceDisplay() {
  const [stockData, setStockData] = useState(null);
  const ticker = 'ASHOKLEY'; // Replace with your desired stock ticker

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(`https://your-python-api-url/${ticker}`);
        setStockData(response.data);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, [ticker]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Stock Price Display</h1>
      {stockData !== null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Company Name</h2>
            <p className="text-gray-700">{stockData.companyName}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Ticker Symbol</h2>
            <p className="text-gray-700">{stockData.ticker}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Current Price</h2>
            <p className="text-gray-700">{stockData.price}</p>
          </div>
          {/* Add more grid items for additional information */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default StockPriceDisplay;
