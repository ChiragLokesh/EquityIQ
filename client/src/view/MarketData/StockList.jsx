import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link component for routing

function StockList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/stocks") // Adjust the URL based on your setup
      .then((response) => response.json())
      .then((data) => setStocks(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold text-white mb-4">Stock Ratios</h1>
      <ul className="list-none">
        {stocks.map((stock) => (
          <li key={stock.NAME} className="mb-2">
            <Link
              to={`/stock/${stock.NAME}`}
              className="text-white hover:text-blue-500 transition duration-300"
            >
              {stock.NAME}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StockList;
